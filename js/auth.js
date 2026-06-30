/*! auth.js — login + user management for the Permission System
 *  - 2 roles: "user" (ส่งคำขอเท่านั้น) และ "it" (สิทธิ์เต็ม + จัดการผู้ใช้)
 *  - users เก็บใน localStorage["perm_users_v1"] (seed defaults ครั้งแรก)
 *  - session เก็บใน sessionStorage (หรือ localStorage ถ้าติ๊ก "จดจำ")
 *  - รหัสผ่าน: เก็บแบบ HASH (PBKDF2-SHA256, 100,000 iterations + salt 16 ไบต์ ต่อบัญชี)
 *    ไม่มีการเก็บ plain text ลง storage หลังจาก migrate ครั้งแรก
 *
 *  Public API: window.Auth = {
 *    session()                              -> current session (no password) | null
 *    list()                                 -> all users (no secret fields)
 *    users()                                -> alias of list()
 *    create({username,name,department,role,password})   -> Promise
 *    update(username, {name,department,role})           -> sync
 *    setPassword(username, newPassword)                 -> Promise
 *    remove(username)                                   -> sync
 *    resetUsers()                                       -> sync (DEV use)
 *    onChange(fn)                           -> session-change listener
 *    onUsersChange(fn)                      -> users-list-change listener
 *    logout()
 *    showLogin()
 *  }
 */
(function(){
  "use strict";

  var SKEY = "perm_session_v1";
  var UKEY = "perm_users_v1";
  var ITER = 100000;
  var DEFAULT_PW = "1234";

  /* ===== บัญชีเริ่มต้น (seed ครั้งแรก; รหัสจะถูก hash อัตโนมัติเมื่อโหลด) ===== */
  var DEFAULTS = [
    { username:"it.admin",  password:DEFAULT_PW, role:"it",   name:"ศุภณัฐ พิมพบุตร", department:"ไอที" },
    { username:"somchai",   password:DEFAULT_PW, role:"user", name:"สมชาย ใจดี",      department:"บัญชี" },
    { username:"preecha",   password:DEFAULT_PW, role:"user", name:"ปรีชา ขายเก่ง",   department:"ประสานงานขาย" },
    { username:"sudarat",   password:DEFAULT_PW, role:"user", name:"สุดารัตน์ รักดี",  department:"ทรัพยากรบุคคล" }
  ];
  /* ======================================================================= */

  var sessionListeners = [];
  var usersListeners   = [];

  function esc(s){
    return String(s==null?"":s).replace(/[&<>"']/g,function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  // ── Web Crypto helpers ───────────────────────────────────────
  var subtle = (window.crypto && window.crypto.subtle) ? window.crypto.subtle : null;

  function buf2b64(buf){
    var bytes = new Uint8Array(buf), s = "";
    for (var i=0;i<bytes.length;i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  }
  function b642buf(b64){
    var s = atob(b64), u = new Uint8Array(s.length);
    for (var i=0;i<s.length;i++) u[i] = s.charCodeAt(i);
    return u.buffer;
  }
  function newSalt(){
    var u = new Uint8Array(16);
    window.crypto.getRandomValues(u);
    return buf2b64(u.buffer);
  }
  function pbkdf2(plain, saltB64, iter){
    if (!subtle) return Promise.reject(new Error("เบราว์เซอร์ไม่รองรับ Web Crypto"));
    iter = iter || ITER;
    var enc = new TextEncoder();
    return subtle.importKey(
      "raw", enc.encode(String(plain)),
      { name:"PBKDF2" }, false, ["deriveBits"]
    ).then(function(key){
      return subtle.deriveBits(
        { name:"PBKDF2", salt:b642buf(saltB64), iterations:iter, hash:"SHA-256" },
        key, 256
      );
    }).then(function(bits){ return buf2b64(bits); });
  }
  function hashNew(plain){
    if (subtle) {
      var salt = newSalt();
      return pbkdf2(plain, salt, ITER).then(function(hash){
        return { salt:salt, hash:hash, iter:ITER };
      });
    }
    // Fallback: ask server to compute PBKDF2 (used when browser lacks Web Crypto,
    // e.g. accessed over LAN on plain HTTP from a non-secure context)
    var sess = readSessionRaw();
    var token = sess && sess.token;
    if (!token) return Promise.reject(new Error("เบราว์เซอร์ไม่รองรับ Web Crypto และไม่มี session สำหรับ fallback"));
    return fetch("/api/auth/hash", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ password: String(plain) })
    }).then(function(r){
      if (!r.ok) {
        return r.json().catch(function(){return{};}).then(function(j){
          throw new Error(j.message || ("ขอ hash จาก server ไม่สำเร็จ ("+r.status+")"));
        });
      }
      return r.json();
    }).then(function(j){
      if (!j || !j.salt || !j.hash) throw new Error("Server ส่งข้อมูล hash ไม่ครบ");
      return { salt:j.salt, hash:j.hash, iter:j.iter || ITER };
    });
  }

  // ── users storage ────────────────────────────────────────────
  function loadUsers(){
    try {
      var r = localStorage.getItem(UKEY);
      if (r) {
        var arr = JSON.parse(r);
        if (Array.isArray(arr) && arr.length) return arr;
      }
    } catch(e){}
    var seed = DEFAULTS.map(function(u){
      return {
        username:u.username, role:u.role, name:u.name, department:u.department,
        password:u.password,       // plain (จะถูก migrate เป็น hash โดยอัตโนมัติ)
        isDefault:true
      };
    });
    saveUsers(seed);
    return seed;
  }
  function saveUsers(arr){
    try { localStorage.setItem(UKEY, JSON.stringify(arr)); } catch(e){}
  }
  function strip(u){
    return { username:u.username, role:u.role, name:u.name, department:u.department, isDefault:!!u.isDefault };
  }
  function list(){ return loadUsers().map(strip); }
  function findIdx(arr, username){
    for (var i=0;i<arr.length;i++) if (arr[i].username===username) return i;
    return -1;
  }
  function countIT(arr){
    var n=0; for (var i=0;i<arr.length;i++) if (arr[i].role==="it") n++; return n;
  }
  function validateUser(u){
    if (!u || !u.username) throw new Error("ต้องระบุ username");
    if (!/^[a-zA-Z0-9._-]{3,32}$/.test(u.username))
      throw new Error("username ใช้ได้เฉพาะ a-z 0-9 . _ - (3–32 ตัวอักษร)");
    if (u.role !== "it" && u.role !== "user")
      throw new Error("role ต้องเป็น 'it' หรือ 'user'");
    if (!u.name || !String(u.name).trim()) throw new Error("ต้องระบุชื่อ");
  }

  // migrate plain `password` → {salt,hash,iter} (background, idempotent)
  function migratePlainPasswords(){
    if (!subtle) return Promise.resolve();
    var arr = loadUsers();
    var pending = arr.filter(function(u){ return !u.hash && u.password!=null; });
    if (!pending.length) return Promise.resolve();
    var chain = Promise.resolve();
    pending.forEach(function(rec){
      chain = chain.then(function(){
        return hashNew(rec.password).then(function(h){
          rec.salt = h.salt; rec.hash = h.hash; rec.iter = h.iter;
          if (rec.isDefault === undefined) rec.isDefault = (rec.password === DEFAULT_PW);
          delete rec.password;
        });
      });
    });
    return chain.then(function(){ saveUsers(arr); });
  }

  // ── session storage ──────────────────────────────────────────
  // Session shape: { token, expiresAt, username, role, name, department, isDefault }
  function readSessionRaw(){
    try {
      var r = sessionStorage.getItem(SKEY) || localStorage.getItem(SKEY);
      if (!r) return null;
      var s = JSON.parse(r);
      if (!s || !s.username || !s.token) return null;
      if (s.expiresAt && new Date(s.expiresAt).getTime() < Date.now()) { clearSession(); return null; }
      return s;
    } catch(e) { return null; }
  }
  function readSession(){
    var s = readSessionRaw();
    if (!s) return null;
    return { username:s.username, role:s.role, name:s.name, department:s.department, isDefault:!!s.isDefault };
  }
  function saveSession(sess, remember){
    try {
      var data = JSON.stringify(sess);
      if (remember) {
        localStorage.setItem(SKEY, data);
        sessionStorage.removeItem(SKEY);
      } else {
        sessionStorage.setItem(SKEY, data);
        localStorage.removeItem(SKEY);
      }
    } catch(e){}
  }
  function clearSession(){
    try{ sessionStorage.removeItem(SKEY); localStorage.removeItem(SKEY); }catch(e){}
  }
  function isRemembered(){
    try { return !!localStorage.getItem(SKEY); } catch(e){ return false; }
  }

  // ── public CRUD ──────────────────────────────────────────────
  function create(u){
    return new Promise(function(resolve, reject){
      try {
        var arr = loadUsers();
        if (findIdx(arr, u.username) >= 0) throw new Error("มี username นี้อยู่แล้ว");
        validateUser(u);
        if (!u.password || String(u.password).length < 4)
          throw new Error("รหัสผ่านต้องอย่างน้อย 4 ตัวอักษร");
        hashNew(u.password).then(function(h){
          arr.push({
            username: u.username,
            role: u.role,
            name: String(u.name).trim(),
            department: String(u.department||"").trim(),
            salt:h.salt, hash:h.hash, iter:h.iter,
            isDefault: (String(u.password) === DEFAULT_PW)
          });
          saveUsers(arr);
          notifyUsers();
          resolve(strip(arr[arr.length-1]));
        }, reject);
      } catch(err){ reject(err); }
    });
  }

  function update(username, patch){
    var arr = loadUsers();
    var i = findIdx(arr, username);
    if (i < 0) throw new Error("ไม่พบผู้ใช้");
    var merged = Object.assign({}, arr[i], {
      name: patch.name,
      department: patch.department,
      role: patch.role
    });
    validateUser(merged);
    if (arr[i].role === "it" && merged.role !== "it" && countIT(arr) <= 1)
      throw new Error("ต้องมีผู้ดูแลระบบ (IT) อย่างน้อย 1 คน");
    arr[i].name       = String(merged.name).trim();
    arr[i].department = String(merged.department||"").trim();
    arr[i].role       = merged.role;
    saveUsers(arr);
    var s = readSessionRaw();
    if (s && s.username === username) {
      var newSess = Object.assign({}, s, {
        name: arr[i].name, department: arr[i].department,
        role: arr[i].role, isDefault: !!arr[i].isDefault
      });
      saveSession(newSess, isRemembered());
      notifySession();
    }
    notifyUsers();
  }

  function setPassword(username, newPass){
    return new Promise(function(resolve, reject){
      try {
        if (!newPass || String(newPass).length < 4)
          throw new Error("รหัสผ่านต้องอย่างน้อย 4 ตัวอักษร");
        var arr = loadUsers();
        var i = findIdx(arr, username);
        if (i < 0) throw new Error("ไม่พบผู้ใช้");
        hashNew(newPass).then(function(h){
          arr[i].salt = h.salt; arr[i].hash = h.hash; arr[i].iter = h.iter;
          arr[i].isDefault = (String(newPass) === DEFAULT_PW);
          delete arr[i].password;
          saveUsers(arr);
          notifyUsers();
          resolve();
        }, reject);
      } catch(err){ reject(err); }
    });
  }

  function remove(username){
    var arr = loadUsers();
    var i = findIdx(arr, username);
    if (i < 0) throw new Error("ไม่พบผู้ใช้");
    var s = readSession();
    if (s && s.username === username) throw new Error("ลบบัญชีตัวเองไม่ได้");
    if (arr[i].role === "it" && countIT(arr) <= 1)
      throw new Error("ต้องมีผู้ดูแลระบบ (IT) อย่างน้อย 1 คน");
    arr.splice(i,1);
    saveUsers(arr);
    notifyUsers();
  }

  function resetUsers(){
    try { localStorage.removeItem(UKEY); } catch(e){}
    loadUsers();              // re-seed with plain pw + isDefault:true
    migratePlainPasswords();  // background-hash
    notifyUsers();
    if (!readSession()) { clearSession(); notifySession(); renderLogin(); }
  }

  function notifyUsers(){
    var u = list();
    usersListeners.forEach(function(fn){ try{ fn(u); }catch(e){} });
  }
  function notifySession(){
    var s = readSession();
    sessionListeners.forEach(function(fn){ try{ fn(s); }catch(e){} });
  }

  // ── login overlay UI ─────────────────────────────────────────
  function ensureOverlay(){
    var ov = document.getElementById("loginOverlay");
    if (!ov) {
      ov = document.createElement("div");
      ov.id = "loginOverlay";
      ov.className = "login-ov";
      document.body.appendChild(ov);
    }
    return ov;
  }

  // เก็บรายชื่อ quick-login ที่ดึงมาจาก server (ก่อน login ยังอ่าน cache ไม่ได้)
  var quickUsersCache = null;
  function fetchQuickUsers(){
    return fetch('/api/auth/quick-users')
      .then(function(r){ return r.ok ? r.json() : []; })
      .then(function(arr){ quickUsersCache = Array.isArray(arr) ? arr : []; return quickUsersCache; })
      .catch(function(){ quickUsersCache = []; return []; });
  }

  function renderQuickBlock(users){
    if (!users || !users.length) return '';
    var html = users.map(function(u){
      var roleLabel = u.role === "it" ? "IT" : "User";
      return '<button type="button" class="quick-btn" data-u="'+esc(u.username)+'">'+
        '<span>'+esc(u.name||u.username)+(u.department ? ' · '+esc(u.department) : '')+'</span>'+
        '<span class="role">'+roleLabel+'</span>'+
      '</button>';
    }).join("");
    return '<div class="quick">'+
      '<div class="quick-l">บัญชีที่ยังใช้รหัสเริ่มต้น — แตะเพื่อเข้าทันที (รหัส <b>'+DEFAULT_PW+'</b>)</div>'+
      '<div class="quick-btns">'+html+'</div>'+
    '</div>';
  }

  function wireQuickButtons(ov){
    Array.prototype.forEach.call(ov.querySelectorAll(".quick-btn"), function(b){
      b.onclick = function(){
        var lp = ov.querySelector("#lp");
        if (lp) lp.value = DEFAULT_PW;
        doLogin(b.getAttribute("data-u"), DEFAULT_PW, false);
      };
    });
  }

  function renderLogin(err){
    document.body.classList.add("login-open");
    var ov = ensureOverlay();
    var quickBlock = quickUsersCache ? renderQuickBlock(quickUsersCache) : '<div class="quick" id="quickSlot"></div>';

    ov.innerHTML = ''+
      '<div class="login-card">'+
        '<div class="login-head">'+
          '<div class="crest login-crest">AC</div>'+
          '<div class="login-titles">'+
            '<div class="login-title">เข้าสู่ระบบจัดการสิทธิ์</div>'+
            '<div class="login-sub">Access Permission System</div>'+
          '</div>'+
        '</div>'+
        '<label class="fl" for="lu">ชื่อผู้ใช้</label>'+
        '<input class="f-input" id="lu" autocomplete="username" placeholder="username">'+
        '<label class="fl" for="lp">รหัสผ่าน</label>'+
        '<input class="f-input" id="lp" type="password" autocomplete="current-password" placeholder="••••">'+
        '<label class="lremember"><input type="checkbox" id="lr"> จดจำการเข้าระบบในเครื่องนี้</label>'+
        '<button class="btn-primary full" id="loginBtn">เข้าสู่ระบบ</button>'+
        '<div class="lerr" id="lerr">'+(err?esc(err):"")+'</div>'+
        quickBlock+
      '</div>';

    var lb = ov.querySelector("#loginBtn");
    lb.onclick = function(){
      var u = (ov.querySelector("#lu").value||"").trim();
      var p = ov.querySelector("#lp").value || "";
      var r = ov.querySelector("#lr").checked;
      doLogin(u, p, r);
    };
    ov.querySelector("#lp").addEventListener("keydown", function(e){
      if (e.key === "Enter") lb.click();
    });
    ov.querySelector("#lu").addEventListener("keydown", function(e){
      if (e.key === "Enter") ov.querySelector("#lp").focus();
    });
    wireQuickButtons(ov);
    setTimeout(function(){ var f = ov.querySelector("#lu"); if (f) f.focus(); }, 30);

    // ถ้ายังไม่ได้ดึง quick-users → ดึงและ inject ทีหลัง (ไม่ block UI)
    if (!quickUsersCache) {
      fetchQuickUsers().then(function(users){
        var slot = document.getElementById("quickSlot");
        if (slot && users.length) {
          slot.outerHTML = renderQuickBlock(users);
          wireQuickButtons(ensureOverlay());
        }
      });
    }
  }

  function hideLogin(){
    document.body.classList.remove("login-open");
    var ov = document.getElementById("loginOverlay");
    if (ov) ov.innerHTML = "";
  }

  function setBtnBusy(busy){
    var lb = document.getElementById("loginBtn");
    if (!lb) return;
    lb.disabled = !!busy;
    if (busy) lb.textContent = "กำลังตรวจสอบ…";
    else if (!lb.dataset.locked) lb.textContent = "เข้าสู่ระบบ";
  }

  var lockTimer = null;
  function startLockoutCountdown(seconds, message){
    if (lockTimer) { clearInterval(lockTimer); lockTimer = null; }
    var ov = ensureOverlay();
    var lb = ov.querySelector("#loginBtn");
    var lerr = ov.querySelector("#lerr");
    var lu = ov.querySelector("#lu");
    var lp = ov.querySelector("#lp");
    var remaining = Math.max(1, parseInt(seconds, 10) || 30);
    if (lb) { lb.disabled = true; lb.dataset.locked = "1"; }
    if (lu) lu.disabled = true;
    if (lp) lp.disabled = true;
    Array.prototype.forEach.call(ov.querySelectorAll(".quick-btn"), function(b){ b.disabled = true; });

    function tick(){
      if (remaining <= 0) {
        if (lockTimer) { clearInterval(lockTimer); lockTimer = null; }
        if (lb) { lb.disabled = false; delete lb.dataset.locked; lb.textContent = "เข้าสู่ระบบ"; }
        if (lu) lu.disabled = false;
        if (lp) lp.disabled = false;
        Array.prototype.forEach.call(ov.querySelectorAll(".quick-btn"), function(b){ b.disabled = false; });
        if (lerr) lerr.textContent = '';
        return;
      }
      if (lb) lb.textContent = "ล็อก — รอ " + remaining + " วินาที";
      if (lerr) lerr.textContent = (message || 'เข้าระบบผิดเกิน 5 ครั้ง') + ' (' + remaining + ' วินาที)';
      remaining--;
    }
    tick();
    lockTimer = setInterval(tick, 1000);
  }

  function doLogin(u, p, remember){
    if (!u || !p) { renderLogin("กรอกชื่อผู้ใช้และรหัสผ่าน"); return; }
    setBtnBusy(true);

    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: u, password: p, remember: !!remember })
    }).then(function(r){
      return r.json().then(function(body){ return { status: r.status, body: body }; });
    }).then(function(resp){
      if (resp.status === 200) {
        var sess = {
          token: resp.body.token,
          expiresAt: resp.body.expiresAt,
          username: resp.body.user.username,
          role: resp.body.user.role,
          name: resp.body.user.name,
          department: resp.body.user.department,
          isDefault: !!resp.body.user.isDefault
        };
        saveSession(sess, !!remember);
        // โหลดข้อมูล KV ทั้งหมดจาก server (ตอนนี้แนบ token แล้ว)
        var refresh = (window.Store && typeof window.Store.refresh === 'function')
          ? window.Store.refresh() : Promise.resolve();
        refresh.then(function(){
          // hash plain-password users ที่ยังไม่ได้ migrate (background)
          migratePlainPasswords().catch(function(){});
          setBtnBusy(false);
          hideLogin();
          notifySession();
          notifyUsers();
        }).catch(function(e){
          console.warn('[auth] refresh after login failed:', e);
          setBtnBusy(false);
          hideLogin();
          notifySession();
        });
      } else if (resp.status === 429) {
        setBtnBusy(false);
        startLockoutCountdown(resp.body.retryAfter || 30, resp.body.message);
      } else {
        setBtnBusy(false);
        renderLogin(resp.body.message || resp.body.error || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    }).catch(function(e){
      setBtnBusy(false);
      renderLogin('เชื่อมต่อ server ไม่ได้: ' + (e && e.message || e));
    });
  }

  window.Auth = {
    session: readSession,
    users: list,
    list: list,
    create: create,
    update: update,
    setPassword: setPassword,
    remove: remove,
    resetUsers: resetUsers,
    onChange: function(fn){ if (typeof fn === "function") sessionListeners.push(fn); },
    onUsersChange: function(fn){ if (typeof fn === "function") usersListeners.push(fn); },
    logout: function(){
      var s = readSessionRaw();
      if (s && s.token) {
        // best-effort server-side invalidation
        try {
          fetch('/api/auth/logout', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + s.token }
          }).catch(function(){});
        } catch(e) {}
      }
      clearSession();
      // also reset quick-users cache so next login screen refreshes it
      quickUsersCache = null;
      notifySession();
      renderLogin();
    },
    showLogin: renderLogin
  };

  function init(){
    if (readSessionRaw()) {
      // มี session อยู่แล้ว → cache จะถูกโหลดโดย store-bootstrap แล้ว
      // migrate รหัสที่ยังเป็น plain (idempotent, background)
      migratePlainPasswords().catch(function(){});
    } else {
      // ดึง quick-users พร้อมกับเปิดหน้า login
      fetchQuickUsers().finally(function(){ renderLogin(); });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
