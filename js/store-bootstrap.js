/*
 * store-bootstrap.js
 *   Frontend shim ที่ทำให้โค้ดเดิม (auth.js / app.js) ที่ใช้ localStorage
 *   ทำงานต่อได้โดยไม่ต้องแก้ — แต่ข้อมูลจริงถูกอ่าน/เขียนผ่าน REST API
 *   ไปยัง backend (server/server.js) ที่เก็บลง SQLite
 *
 * ลำดับการทำงาน (หลังเพิ่ม auth):
 *   1) ติดตั้ง shim ทับ window.localStorage ก่อนเสมอ (cache ว่างได้)
 *   2) ถ้าใน sessionStorage/localStorage มี token ของ login อยู่ → ดึง /api/kvs มาก่อน
 *   3) inject <script> auth.js + app.js ตามลำดับ
 *   4) ถ้าไม่มี token → auth.js จะเปิดหน้า login; เมื่อ login สำเร็จ
 *      จะเรียก window.Store.refresh() เพื่อโหลดข้อมูลทั้งหมดเข้า cache
 *
 *  ทุก request /api/* จะแนบ Authorization: Bearer <token> อัตโนมัติถ้ามี
 */
(function () {
  'use strict';

  var SKEY = 'perm_session_v1';
  var LOCAL_ONLY = { perm_session_v1: 1 };

  var DEBOUNCE_MS = 200;
  var API_BASE = '';

  var realLS = window.localStorage;
  var realSS = window.sessionStorage;
  var cache = Object.create(null);
  var pendingTimers = Object.create(null);
  var serverReachable = false;

  function getToken() {
    try {
      var raw = realSS.getItem(SKEY) || realLS.getItem(SKEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      return (s && s.token) || null;
    } catch (e) { return null; }
  }

  function clearLocalSession() {
    try { realSS.removeItem(SKEY); } catch (e) {}
    try { realLS.removeItem(SKEY); } catch (e) {}
  }

  function api(path, opts) {
    opts = opts || {};
    var headers = Object.assign({}, opts.headers || {});
    var t = getToken();
    if (t) headers['Authorization'] = 'Bearer ' + t;
    opts.headers = headers;
    return fetch(API_BASE + path, opts).then(function (r) {
      if (r.status === 401) {
        // session is gone — wipe and force re-login
        clearLocalSession();
        if (window.Auth && typeof window.Auth.showLogin === 'function') {
          // Clear cache so app shows nothing stale behind login overlay
          Object.keys(cache).forEach(function (k) { delete cache[k]; });
          try { window.Auth.showLogin('เซสชันหมดอายุ — กรุณาเข้าระบบใหม่'); } catch (e) {}
        }
        var err = new Error('unauthorized');
        err.status = 401;
        throw err;
      }
      if (!r.ok && r.status !== 404) {
        var e2 = new Error(path + ' -> HTTP ' + r.status);
        e2.status = r.status;
        throw e2;
      }
      return r;
    });
  }

  function loadAllFromServer() {
    return api('/api/kvs').then(function (r) { return r.json(); }).then(function (map) {
      // replace cache
      Object.keys(cache).forEach(function (k) { delete cache[k]; });
      Object.keys(map).forEach(function (k) { cache[k] = map[k].value; });
      serverReachable = true;
      return map;
    });
  }

  function putKey(k, v) {
    return api('/api/kv/' + encodeURIComponent(k), {
      method: 'PUT',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: v == null ? '' : String(v)
    });
  }

  function deleteKey(k) {
    return api('/api/kv/' + encodeURIComponent(k), { method: 'DELETE' });
  }

  function scheduleFlush(k) {
    if (LOCAL_ONLY[k]) return;
    // We still queue flushes even if not yet "reachable" — they may succeed after login.
    if (pendingTimers[k]) clearTimeout(pendingTimers[k]);
    pendingTimers[k] = setTimeout(function () {
      pendingTimers[k] = 0;
      if (!getToken()) return; // can't write without auth — drop silently
      var v = cache[k];
      var p = (v == null) ? deleteKey(k) : putKey(k, v);
      p.catch(function (e) {
        if (e && e.status !== 401) console.warn('[store] flush failed for', k, e.message || e);
      });
    }, DEBOUNCE_MS);
  }

  // ── Shim that mimics the Storage API ──────────────────────────────
  var shim = {
    getItem: function (k) {
      if (LOCAL_ONLY[k]) return realLS.getItem(k);
      return Object.prototype.hasOwnProperty.call(cache, k) ? cache[k] : null;
    },
    setItem: function (k, v) {
      if (LOCAL_ONLY[k]) { realLS.setItem(k, v); return; }
      cache[k] = String(v);
      scheduleFlush(k);
    },
    removeItem: function (k) {
      if (LOCAL_ONLY[k]) { realLS.removeItem(k); return; }
      delete cache[k];
      scheduleFlush(k);
    },
    clear: function () {
      Object.keys(cache).forEach(function (k) {
        delete cache[k];
        scheduleFlush(k);
      });
    },
    key: function (i) { return Object.keys(cache)[i] || null; },
    get length() { return Object.keys(cache).length; }
  };

  function installShim() {
    try {
      Object.defineProperty(window, 'localStorage', {
        configurable: true,
        value: shim
      });
    } catch (e) {
      console.error('[store] cannot override localStorage:', e);
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false; // preserve order
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('failed to load ' + src)); };
      document.head.appendChild(s);
    });
  }

  function bootApp() {
    return loadScript('js/auth.js').then(function () { return loadScript('js/app.js'); });
  }

  // ── Public Store API (used by auth.js / app.js after login) ──────
  window.Store = {
    refresh: function () { return loadAllFromServer(); },
    hasToken: function () { return !!getToken(); },
    isReachable: function () { return serverReachable; },
    clearSession: clearLocalSession,
    fetch: function (path, opts) { return api(path, opts); }
  };

  // ── Boot ─────────────────────────────────────────────────────────
  // Always install the shim first so auth.js / app.js can use localStorage.
  installShim();

  var hasToken = !!getToken();

  function continueBoot() {
    return bootApp().catch(function (e) {
      console.error('[store] fatal:', e);
      alert('โหลดระบบล้มเหลว: ' + (e && e.message || e));
    });
  }

  if (hasToken) {
    // Try to populate cache before loading app code so first paint has data.
    loadAllFromServer()
      .catch(function (e) {
        if (e && e.status === 401) {
          console.info('[store] token rejected — falling back to login screen');
        } else {
          console.warn('[store] failed to fetch from server:', e && e.message);
          serverReachable = false;
        }
      })
      .then(continueBoot);
  } else {
    // No token yet — auth.js will render the login screen and call Store.refresh() afterwards.
    // Probe health endpoint so we can still set serverReachable for UI.
    fetch(API_BASE + '/api/health').then(function (r) {
      serverReachable = !!(r && r.ok);
    }).catch(function () { serverReachable = false; }).then(continueBoot);
  }
})();
