/*
 * Thefirst Permission V1 — Backend
 * - Serves the static frontend (../) on the same origin (no CORS needed)
 * - SQLite-backed KV API (protected) + auth + audit log + login lockout
 *
 * Public endpoints:
 *   GET    /api/health
 *   GET    /api/auth/quick-users          -> list of default-password accounts (for login UI)
 *   POST   /api/auth/login                -> { token, user, expiresAt }
 *
 * Protected (Authorization: Bearer <token>):
 *   POST   /api/auth/logout
 *   GET    /api/auth/me
 *   GET    /api/kvs                       -> { key: { value, updatedAt }, ... }
 *   GET    /api/kv/:key                   -> { key, value, updatedAt }
 *   PUT    /api/kv/:key                   -> body = raw value (text)
 *   DELETE /api/kv/:key
 *   GET    /api/audit                     -> IT-only; query: limit, offset, q
 *
 * Lockout: 5 wrong attempts per (ip, username) -> locked 30s.
 */

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const Database = require('better-sqlite3');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PROD  = NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 6500;
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'permission.db');
// Trust proxy header(s) — only enable when actually behind a reverse proxy (Plesk/nginx/Cloudflare)
// Set TRUST_PROXY=1 (or 'loopback', a number of hops, or an IP) to enable
const TRUST_PROXY = process.env.TRUST_PROXY || (IS_PROD ? 'loopback' : false);
// Allow opt-in seeding of default-1234 accounts. Default OFF in production.
const SEED_DEFAULTS = String(process.env.SEED_DEFAULTS || (IS_PROD ? '0' : '1')) === '1';
// Sensitive KV keys — only role=it may write/delete. Regex match for flexibility.
const PROTECTED_KV_PATTERNS = [
  /^perm_users_v\d+$/,           // user accounts (hash/salt/role)
  /^perm_groups_v\d+$/,          // permission groups / categories
  /^perm_groups_v\d+_meta$/      // metadata for groups
];
function isProtectedKv(key){ return PROTECTED_KV_PATTERNS.some(re => re.test(key)); }

const SESSION_TTL_MS          = 8 * 60 * 60 * 1000;        // 8h normal
const SESSION_TTL_REMEMBER_MS = 30 * 24 * 60 * 60 * 1000;  // 30d "remember"
const LOCKOUT_THRESHOLD       = 5;                         // wrong attempts before lock
const LOCKOUT_DURATION_MS     = 30 * 1000;                 // 30s lock
const ATTEMPT_RESET_MS        = 10 * 60 * 1000;            // reset counter after this idle window

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS kv (
    key        TEXT PRIMARY KEY,
    value      TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token        TEXT PRIMARY KEY,
    username     TEXT NOT NULL,
    role         TEXT NOT NULL,
    name         TEXT,
    department   TEXT,
    remember     INTEGER NOT NULL DEFAULT 0,
    created_at   TEXT NOT NULL,
    expires_at   TEXT NOT NULL,
    last_ip      TEXT,
    last_seen_at TEXT
  );
  CREATE TABLE IF NOT EXISTS login_attempts (
    ip              TEXT NOT NULL,
    username        TEXT NOT NULL,
    attempts        INTEGER NOT NULL DEFAULT 0,
    locked_until    TEXT,
    last_attempt_at TEXT NOT NULL,
    PRIMARY KEY (ip, username)
  );
  CREATE TABLE IF NOT EXISTS audit_log (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    at       TEXT NOT NULL,
    ip       TEXT,
    username TEXT,
    role     TEXT,
    action   TEXT NOT NULL,
    target   TEXT,
    detail   TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_audit_at ON audit_log(at DESC);
  CREATE INDEX IF NOT EXISTS idx_audit_user ON audit_log(username);
`);

// ── prepared statements ─────────────────────────────────────
const stmtGet    = db.prepare('SELECT value, updated_at FROM kv WHERE key = ?');
const stmtAll    = db.prepare('SELECT key, value, updated_at FROM kv');
const stmtUpsert = db.prepare(`
  INSERT INTO kv (key, value, updated_at) VALUES (@key, @value, @updated_at)
  ON CONFLICT(key) DO UPDATE SET
    value      = excluded.value,
    updated_at = excluded.updated_at
`);
const stmtDelete = db.prepare('DELETE FROM kv WHERE key = ?');

const stmtSessionInsert = db.prepare(`
  INSERT INTO sessions (token, username, role, name, department, remember, created_at, expires_at, last_ip, last_seen_at)
  VALUES (@token, @username, @role, @name, @department, @remember, @created_at, @expires_at, @last_ip, @last_seen_at)
`);
const stmtSessionGet    = db.prepare('SELECT * FROM sessions WHERE token = ?');
const stmtSessionTouch  = db.prepare('UPDATE sessions SET last_seen_at = ?, last_ip = ? WHERE token = ?');
const stmtSessionDelete = db.prepare('DELETE FROM sessions WHERE token = ?');
const stmtSessionPurge  = db.prepare('DELETE FROM sessions WHERE expires_at < ?');

const stmtAttemptGet    = db.prepare('SELECT * FROM login_attempts WHERE ip = ? AND username = ?');
const stmtAttemptUpsert = db.prepare(`
  INSERT INTO login_attempts (ip, username, attempts, locked_until, last_attempt_at)
  VALUES (@ip, @username, @attempts, @locked_until, @last_attempt_at)
  ON CONFLICT(ip, username) DO UPDATE SET
    attempts        = excluded.attempts,
    locked_until    = excluded.locked_until,
    last_attempt_at = excluded.last_attempt_at
`);
const stmtAttemptDelete = db.prepare('DELETE FROM login_attempts WHERE ip = ? AND username = ?');
const stmtAttemptPurge  = db.prepare('DELETE FROM login_attempts WHERE last_attempt_at < ?');

const stmtAuditInsert = db.prepare(`
  INSERT INTO audit_log (at, ip, username, role, action, target, detail)
  VALUES (@at, @ip, @username, @role, @action, @target, @detail)
`);
const stmtAuditCount = db.prepare('SELECT COUNT(*) AS c FROM audit_log');

// ── helpers ─────────────────────────────────────────────────
function getUsersFromKv() {
  const row = stmtGet.get('perm_users_v1');
  if (!row) return [];
  try {
    const arr = JSON.parse(row.value);
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
}

function verifyPbkdf2(plain, saltB64, hashB64, iter) {
  return new Promise((resolve, reject) => {
    let salt, expected;
    try {
      salt = Buffer.from(saltB64, 'base64');
      expected = Buffer.from(hashB64, 'base64');
    } catch (e) { return resolve(false); }
    crypto.pbkdf2(String(plain), salt, iter || 100000, expected.length, 'sha256', (err, derived) => {
      if (err) return reject(err);
      if (derived.length !== expected.length) return resolve(false);
      try { resolve(crypto.timingSafeEqual(derived, expected)); }
      catch (e) { resolve(false); }
    });
  });
}

function verifyUserPassword(user, password) {
  if (user.hash && user.salt) {
    return verifyPbkdf2(password, user.salt, user.hash, user.iter);
  }
  if (user.password != null) {
    // legacy plain (first login before client migrates) — constant-time compare
    const a = Buffer.from(String(user.password));
    const b = Buffer.from(String(password));
    if (a.length !== b.length) return Promise.resolve(false);
    return Promise.resolve(crypto.timingSafeEqual(a, b));
  }
  return Promise.resolve(false);
}

function clientIp(req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || req.ip
    || (req.socket && req.socket.remoteAddress)
    || '';
}

function newToken() {
  return crypto.randomBytes(24).toString('base64url');
}

function logAudit(rec) {
  try {
    stmtAuditInsert.run({
      at:       rec.at || new Date().toISOString(),
      ip:       rec.ip || '',
      username: rec.username || '',
      role:     rec.role || '',
      action:   rec.action,
      target:   rec.target || '',
      detail:   rec.detail == null ? '' : (typeof rec.detail === 'string' ? rec.detail : JSON.stringify(rec.detail))
    });
  } catch (e) { console.error('[audit] insert failed:', e); }
}

function seedDefaultUsersIfEmpty() {
  if (stmtGet.get('perm_users_v1')) return;
  if (!SEED_DEFAULTS) {
    console.log('[seed] skipped — production mode (set SEED_DEFAULTS=1 to override).');
    return;
  }
  const defaults = [
    { username:"it.admin",  password:"1234", role:"it",   name:"ศุภณัฐ พิมพบุตร", department:"ไอที",          isDefault:true },
    { username:"somchai",   password:"1234", role:"user", name:"สมชาย ใจดี",      department:"บัญชี",          isDefault:true },
    { username:"preecha",   password:"1234", role:"user", name:"ปรีชา ขายเก่ง",   department:"ประสานงานขาย",   isDefault:true },
    { username:"sudarat",   password:"1234", role:"user", name:"สุดารัตน์ รักดี",  department:"ทรัพยากรบุคคล", isDefault:true }
  ];
  stmtUpsert.run({ key: 'perm_users_v1', value: JSON.stringify(defaults), updated_at: new Date().toISOString() });
  console.log('[seed] perm_users_v1 created with 4 default accounts (password=1234)');
}
seedDefaultUsersIfEmpty();

// background cleanup
setInterval(() => {
  try {
    stmtSessionPurge.run(new Date().toISOString());
    stmtAttemptPurge.run(new Date(Date.now() - ATTEMPT_RESET_MS * 6).toISOString());
  } catch (e) {}
}, 5 * 60 * 1000).unref?.();

// ── middleware ──────────────────────────────────────────────
function authRequired(req, res, next) {
  const h = req.headers.authorization || '';
  const m = h.match(/^Bearer\s+(.+)$/i);
  if (!m) return res.status(401).json({ error: 'unauthorized', code: 'no_token' });
  const token = m[1];
  const sess = stmtSessionGet.get(token);
  if (!sess) return res.status(401).json({ error: 'unauthorized', code: 'invalid_token' });
  if (new Date(sess.expires_at).getTime() < Date.now()) {
    stmtSessionDelete.run(token);
    return res.status(401).json({ error: 'unauthorized', code: 'expired' });
  }
  stmtSessionTouch.run(new Date().toISOString(), clientIp(req), token);
  req.session = sess;
  next();
}

function itOnly(req, res, next) {
  if (!req.session || req.session.role !== 'it') {
    return res.status(403).json({ error: 'forbidden_it_only' });
  }
  next();
}

// ── app ─────────────────────────────────────────────────────
const app = express();
if (TRUST_PROXY) app.set('trust proxy', TRUST_PROXY);
app.disable('x-powered-by');

// Security headers (lightweight; no extra dependency)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'same-origin');
  res.setHeader('X-XSS-Protection', '0');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  next();
});

app.use(express.json({ limit: '32mb' }));
app.use(express.text({ type: ['text/*'], limit: '32mb' }));
app.use(express.raw({ type: 'application/octet-stream', limit: '32mb' }));

// ── static serving (whitelist only — never expose project root) ──
// Frontend layout = ROOT/index.html + ROOT/js + ROOT/css
// Everything else (server/, *.db, *.json backups, .git, .xlsx, legacy *.html) stays private.
const STATIC_DIRS = ['js', 'css', 'image', 'img', 'assets'];
STATIC_DIRS.forEach(d => {
  const p = path.join(ROOT, d);
  if (fs.existsSync(p)) {
    app.use('/' + d, express.static(p, {
      etag: true, lastModified: true, maxAge: IS_PROD ? '7d' : 0,
      dotfiles: 'ignore', index: false
    }));
  }
});
app.get(['/', '/index.html'], (_req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});
app.get('/favicon.ico', (_req, res) => {
  const f = path.join(ROOT, 'favicon.ico');
  if (fs.existsSync(f)) return res.sendFile(f);
  res.status(204).end();
});

// ── public ──────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get('/api/auth/quick-users', (_req, res) => {
  const users = getUsersFromKv();
  const out = users
    .filter(u => u.isDefault)
    .map(u => ({ username: u.username, role: u.role, name: u.name || '', department: u.department || '' }));
  res.json(out);
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const body = req.body || {};
    const username = String(body.username || '').trim();
    const password = String(body.password || '');
    const remember = !!body.remember;
    const ip = clientIp(req);
    const nowMs = Date.now();
    const nowIso = new Date(nowMs).toISOString();

    if (!username || !password) {
      return res.status(400).json({ error: 'missing_credentials', message: 'กรอกชื่อผู้ใช้และรหัสผ่าน' });
    }

    // Lockout check
    const attemptRow = stmtAttemptGet.get(ip, username);
    if (attemptRow && attemptRow.locked_until && new Date(attemptRow.locked_until).getTime() > nowMs) {
      const retryAfter = Math.max(1, Math.ceil((new Date(attemptRow.locked_until).getTime() - nowMs) / 1000));
      res.setHeader('Retry-After', String(retryAfter));
      logAudit({ at: nowIso, ip, username, action: 'auth.login_blocked', detail: { retryAfter } });
      return res.status(429).json({
        error: 'locked',
        retryAfter,
        lockedUntil: attemptRow.locked_until,
        message: `เข้าระบบผิดเกิน ${LOCKOUT_THRESHOLD} ครั้ง — รออีก ${retryAfter} วินาที`
      });
    }

    const users = getUsersFromKv();
    const user = users.find(u => u.username === username);
    let valid = false;
    if (user) {
      try { valid = await verifyUserPassword(user, password); }
      catch (e) { console.error('[login] verify error:', e); valid = false; }
    }

    if (valid) {
      stmtAttemptDelete.run(ip, username);
      const token = newToken();
      const ttl = remember ? SESSION_TTL_REMEMBER_MS : SESSION_TTL_MS;
      const expiresAt = new Date(nowMs + ttl).toISOString();
      stmtSessionInsert.run({
        token, username: user.username, role: user.role,
        name: user.name || '', department: user.department || '',
        remember: remember ? 1 : 0,
        created_at: nowIso, expires_at: expiresAt,
        last_ip: ip, last_seen_at: nowIso
      });
      logAudit({ at: nowIso, ip, username: user.username, role: user.role, action: 'auth.login', detail: { remember } });
      return res.json({
        token,
        expiresAt,
        user: {
          username: user.username,
          role: user.role,
          name: user.name || '',
          department: user.department || '',
          isDefault: !!user.isDefault
        }
      });
    }

    // wrong credentials
    let attempts = (attemptRow ? attemptRow.attempts : 0) + 1;
    if (attemptRow && (nowMs - new Date(attemptRow.last_attempt_at).getTime()) > ATTEMPT_RESET_MS) {
      attempts = 1; // window expired -> fresh counter
    }
    let lockedUntil = null;
    if (attempts >= LOCKOUT_THRESHOLD) {
      lockedUntil = new Date(nowMs + LOCKOUT_DURATION_MS).toISOString();
    }
    stmtAttemptUpsert.run({
      ip, username, attempts, locked_until: lockedUntil, last_attempt_at: nowIso
    });
    logAudit({ at: nowIso, ip, username, action: 'auth.login_failed', detail: { attempts, locked: !!lockedUntil } });

    if (lockedUntil) {
      const retryAfter = Math.ceil(LOCKOUT_DURATION_MS / 1000);
      res.setHeader('Retry-After', String(retryAfter));
      return res.status(429).json({
        error: 'locked',
        retryAfter,
        lockedUntil,
        message: `เข้าระบบผิดเกิน ${LOCKOUT_THRESHOLD} ครั้ง — รออีก ${retryAfter} วินาที`
      });
    }
    return res.status(401).json({
      error: 'wrong_credentials',
      remaining: LOCKOUT_THRESHOLD - attempts,
      message: `ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (เหลือ ${LOCKOUT_THRESHOLD - attempts} ครั้ง)`
    });
  } catch (e) {
    console.error('[login] error:', e);
    return res.status(500).json({ error: 'internal', message: 'ระบบขัดข้อง' });
  }
});

// ── protected ───────────────────────────────────────────────
app.post('/api/auth/logout', authRequired, (req, res) => {
  stmtSessionDelete.run(req.session.token);
  logAudit({ ip: clientIp(req), username: req.session.username, role: req.session.role, action: 'auth.logout' });
  res.json({ ok: true });
});

app.get('/api/auth/me', authRequired, (req, res) => {
  res.json({
    username: req.session.username,
    role: req.session.role,
    name: req.session.name,
    department: req.session.department,
    expiresAt: req.session.expires_at
  });
});

// Server-side password hashing (fallback when browser has no Web Crypto subtle —
// e.g. accessed over LAN on plain HTTP from a non-secure context)
app.post('/api/auth/hash', authRequired, itOnly, (req, res) => {
  const body = req.body || {};
  const password = String(body.password || '');
  if (!password || password.length < 4) {
    return res.status(400).json({ error: 'bad_password', message: 'รหัสผ่านต้องอย่างน้อย 4 ตัวอักษร' });
  }
  const iter = 100000;
  const salt = crypto.randomBytes(16);
  crypto.pbkdf2(password, salt, iter, 32, 'sha256', (err, derived) => {
    if (err) return res.status(500).json({ error: 'hash_failed' });
    res.json({
      salt: salt.toString('base64'),
      hash: derived.toString('base64'),
      iter: iter
    });
  });
});

app.get('/api/kvs', authRequired, (_req, res) => {
  const rows = stmtAll.all();
  const out = {};
  for (const r of rows) out[r.key] = { value: r.value, updatedAt: r.updated_at };
  res.json(out);
});

app.get('/api/kv/:key', authRequired, (req, res) => {
  const r = stmtGet.get(req.params.key);
  if (!r) return res.status(404).json({ error: 'not found' });
  res.json({ key: req.params.key, value: r.value, updatedAt: r.updated_at });
});

app.put('/api/kv/:key', authRequired, (req, res) => {
  const key = req.params.key;
  // ACL: sensitive keys (users / groups) — IT only
  if (isProtectedKv(key) && req.session.role !== 'it') {
    logAudit({
      ip: clientIp(req), username: req.session.username, role: req.session.role,
      action: 'kv.put_forbidden', target: key
    });
    return res.status(403).json({ error: 'forbidden_protected_key' });
  }
  let value = req.body;
  if (Buffer.isBuffer(value)) value = value.toString('utf8');
  if (value == null) return res.status(400).json({ error: 'empty body' });
  if (typeof value !== 'string') value = JSON.stringify(value);
  const now = new Date().toISOString();
  stmtUpsert.run({ key, value, updated_at: now });
  logAudit({
    at: now, ip: clientIp(req),
    username: req.session.username, role: req.session.role,
    action: 'kv.put', target: key,
    detail: { size: value.length }
  });
  res.json({ ok: true, key, updatedAt: now });
});

app.delete('/api/kv/:key', authRequired, (req, res) => {
  const key = req.params.key;
  // Only IT may delete any KV entry — destructive op
  if (req.session.role !== 'it') {
    logAudit({
      ip: clientIp(req), username: req.session.username, role: req.session.role,
      action: 'kv.delete_forbidden', target: key
    });
    return res.status(403).json({ error: 'forbidden_it_only' });
  }
  stmtDelete.run(key);
  logAudit({
    ip: clientIp(req),
    username: req.session.username, role: req.session.role,
    action: 'kv.delete', target: key
  });
  res.json({ ok: true, key });
});

app.get('/api/audit', authRequired, itOnly, (req, res) => {
  const limit = Math.min(parseInt(req.query.limit, 10) || 200, 1000);
  const offset = Math.max(0, parseInt(req.query.offset, 10) || 0);
  const q = String(req.query.q || '').trim();
  let rows, total;
  if (q) {
    const like = '%' + q + '%';
    rows = db.prepare(`
      SELECT * FROM audit_log
      WHERE username LIKE ? OR action LIKE ? OR target LIKE ? OR detail LIKE ? OR ip LIKE ?
      ORDER BY id DESC LIMIT ? OFFSET ?
    `).all(like, like, like, like, like, limit, offset);
    total = db.prepare(`
      SELECT COUNT(*) AS c FROM audit_log
      WHERE username LIKE ? OR action LIKE ? OR target LIKE ? OR detail LIKE ? OR ip LIKE ?
    `).get(like, like, like, like, like).c;
  } else {
    rows = db.prepare('SELECT * FROM audit_log ORDER BY id DESC LIMIT ? OFFSET ?').all(limit, offset);
    total = stmtAuditCount.get().c;
  }
  res.json({ total, limit, offset, rows });
});

app.get('/api/audit/stats', authRequired, itOnly, (_req, res) => {
  const total = stmtAuditCount.get().c;
  const byAction = db.prepare('SELECT action, COUNT(*) AS c FROM audit_log GROUP BY action ORDER BY c DESC').all();
  const byUser = db.prepare(`
    SELECT username, COUNT(*) AS c FROM audit_log
    WHERE username IS NOT NULL AND username != ''
    GROUP BY username ORDER BY c DESC LIMIT 10
  `).all();
  // last 30 days
  const since30 = new Date(Date.now() - 30 * 86400 * 1000).toISOString();
  const loginSuccess = db.prepare(`SELECT COUNT(*) AS c FROM audit_log WHERE (action='login' OR action='auth.login') AND at >= ?`).get(since30).c;
  const loginFailed = db.prepare(`SELECT COUNT(*) AS c FROM audit_log WHERE (action='login_failed' OR action='auth.login_failed') AND at >= ?`).get(since30).c;
  const lockouts = db.prepare(`SELECT COUNT(*) AS c FROM audit_log WHERE (action='lockout' OR action='auth.login_blocked' OR action='auth.lockout') AND at >= ?`).get(since30).c;
  const recentFailures = db.prepare(`
    SELECT at, ip, username, detail FROM audit_log
    WHERE action='login_failed' OR action='auth.login_failed'
    ORDER BY id DESC LIMIT 10
  `).all();
  const dailyTimeline = db.prepare(`
    SELECT substr(at, 1, 10) AS day, COUNT(*) AS c
    FROM audit_log WHERE at >= ?
    GROUP BY day ORDER BY day ASC
  `).all(since30);
  res.json({
    total, byAction, byUser,
    last30: { loginSuccess, loginFailed, lockouts },
    recentFailures, dailyTimeline
  });
});

// SPA-style fallback
app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.use((err, _req, res, _next) => {
  console.error('[server] error:', err);
  if (IS_PROD) {
    res.status(500).json({ error: 'internal_error' });
  } else {
    res.status(500).json({ error: err.message || 'internal error' });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Thefirst Permission V1 server`);
  console.log(`  mode:     ${NODE_ENV}`);
  console.log(`  serving:  ${ROOT}  (whitelist: ${STATIC_DIRS.join(', ')})`);
  console.log(`  database: ${DB_PATH}`);
  console.log(`  trustProxy: ${TRUST_PROXY || 'off'}`);
  console.log(`  seedDefaults: ${SEED_DEFAULTS ? 'ON' : 'OFF'}`);
  console.log(`  listen:   http://${HOST}:${PORT}/`);
});
