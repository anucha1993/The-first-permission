# Deploy Thefirst Permission V1 บน Plesk

คู่มือนี้สรุปขั้นตอนการ deploy โปรเจกต์นี้ขึ้น Plesk (Windows หรือ Linux) แบบ production พร้อม HTTPS

---

## 1) สิ่งที่ต้องเตรียม

- Plesk ที่ติดตั้งส่วนเสริม **Node.js** แล้ว
- Node.js เวอร์ชัน **18 ขึ้นไป** (โปรเจกต์ทดสอบกับ Node 24)
- โดเมน/ซับโดเมนพร้อม **Let's Encrypt SSL** เปิดใช้งานแล้ว

## 2) อัปโหลดโค้ด

โครงสร้างที่ต้องอัปโหลด (ใช้ Plesk File Manager / Git / FTP ก็ได้):

```
<plesk-app-root>/
├── index.html
├── css/
├── js/
└── server/
    ├── server.js
    ├── package.json
    ├── package-lock.json
    └── .env            ← สร้างจาก .env.example
```

> ❌ **อย่าอัปโหลด**: `node_modules/`, `data/`, `permission-backup-*.json`, `permission-รายชื่อ.xlsx`, `permission-workflow-demo.html`, `ระบบจัดการสิทธิ์-audit_*.html`

## 3) ตั้งค่า Node.js ใน Plesk

ในหน้า Domains → เลือกโดเมน → **Node.js**

| Field | Value |
|---|---|
| Node.js version | 18.x ขึ้นไป |
| Document Root | `httpdocs` (หรือ path ที่ Plesk กำหนด) |
| **Application Root** | path ของโฟลเดอร์ `server/` |
| **Application Startup File** | `server.js` |
| Application Mode | `production` |
| Application URL | `https://your-domain.com/` |

## 4) Environment Variables

เพิ่ม "Custom environment variables" ในหน้า Node.js settings (หรือสร้างไฟล์ `server/.env`):

```bash
NODE_ENV=production
PORT=6500
HOST=127.0.0.1
TRUST_PROXY=loopback
SEED_DEFAULTS=0
# DATA_DIR=/var/www/vhosts/your-domain.com/permission-data   # (แนะนำ — ดู §7)
```

## 5) ติดตั้ง dependencies

ในหน้า Node.js ของ Plesk กดปุ่ม **"NPM install"** หนึ่งครั้ง — Plesk จะรัน `npm install --production` ใน `server/`

ถ้าใช้ SSH:
```bash
cd /var/www/vhosts/your-domain.com/server
npm install --production
```

## 6) Bootstrap บัญชี IT admin ครั้งแรก

เนื่องจาก `SEED_DEFAULTS=0` บน production จะไม่สร้างบัญชี default ให้  
ให้ทำครั้งเดียวเพื่อสร้าง admin คนแรก:

1. ตั้ง `SEED_DEFAULTS=1` ใน env แล้ว restart app
2. Login ด้วย `it.admin / 1234`
3. เข้าแท็บ **"ผู้ใช้งาน"** เปลี่ยน password ของ `it.admin` ทันที (สร้าง user IT ตัวเองด้วยถ้าต้องการ)
4. ลบบัญชี default ที่ไม่ใช้ (`somchai`, `preecha`, `sudarat`)
5. กลับมาตั้ง `SEED_DEFAULTS=0` แล้ว restart อีกครั้ง

> ⚠️ ห้ามทิ้ง `SEED_DEFAULTS=1` ค้างไว้ — เพราะหาก DB หายและถูก seed ซ้ำจะมี backdoor `it.admin / 1234`

## 7) เก็บฐานข้อมูลให้ปลอดภัย (แนะนำ)

โดย default DB จะอยู่ที่ `server/data/permission.db` — ซึ่งอยู่ใต้ Application Root  
ถ้าตั้งค่า Plesk ผิด อาจถูก expose ผ่าน HTTP ได้ ทางที่ปลอดภัยกว่า:

```bash
mkdir -p /var/www/vhosts/your-domain.com/permission-data
chown <plesk-user>:psacln /var/www/vhosts/your-domain.com/permission-data
chmod 750 /var/www/vhosts/your-domain.com/permission-data
```

แล้วใน env:
```
DATA_DIR=/var/www/vhosts/your-domain.com/permission-data
```

> Server โค้ดจะอ่าน `DATA_DIR` แล้วเก็บ `permission.db`, `permission.db-wal`, `permission.db-shm` ไว้ที่นั่นแทน

## 8) HTTPS / SSL

- เปิด **Let's Encrypt** ใน Plesk ให้โดเมน (ฟรี + ต่ออายุอัตโนมัติ)
- เปิด **"Permanent SEO-safe 301 redirect from HTTP to HTTPS"**
- Plesk จะตั้ง nginx/Apache reverse-proxy → forward HTTPS ไปยัง Node app บน `127.0.0.1:6500` อัตโนมัติ

## 9) ทดสอบ

```bash
# health check (ผ่าน Plesk proxy)
curl https://your-domain.com/api/health

# ไฟล์ sensitive ต้องไม่โหลดได้
curl -I https://your-domain.com/server/server.js          # → 200 index.html (SPA fallback) — ไม่ใช่ source!
curl -I https://your-domain.com/server/data/permission.db # → 200 index.html — ไม่ใช่ DB file!
curl -I https://your-domain.com/permission-backup-2026-06-19.json  # → ต้องไม่ได้ JSON ของจริง
```

ถ้าผลตรงตามนี้ = static whitelist ทำงานถูกต้อง ✅

## 10) สำรองข้อมูล (Backup)

SQLite เก็บใน 3 ไฟล์: `permission.db`, `permission.db-wal`, `permission.db-shm`  
ตั้ง Scheduled Task ของ Plesk ให้ rsync/zip ทุกวัน เช่น:

```bash
# linux cron (Plesk Scheduled Tasks)
DATE=$(date +%Y%m%d-%H%M)
cd /var/www/vhosts/your-domain.com/permission-data
tar czf /backup/permission-$DATE.tgz permission.db permission.db-wal permission.db-shm
find /backup -name "permission-*.tgz" -mtime +30 -delete
```

## 11) อัปเดตเวอร์ชันใหม่

```bash
# 1) สำรอง DB ก่อนเสมอ
cp /var/www/vhosts/your-domain.com/permission-data/permission.db /backup/permission-prev.db

# 2) อัปเดตโค้ด (Git pull หรืออัปไฟล์ใหม่)
# 3) ถ้ามี dependency ใหม่:
cd server && npm install --production

# 4) Restart app ผ่านปุ่ม "Restart App" ในหน้า Plesk Node.js
```

---

## ตรวจสอบความปลอดภัยก่อน go-live

- [ ] `NODE_ENV=production` ✅
- [ ] `SEED_DEFAULTS=0` ✅
- [ ] เปลี่ยน password `it.admin` แล้ว ✅
- [ ] ลบบัญชี default ที่ไม่ใช้ ✅
- [ ] HTTPS เปิดและบังคับ redirect ✅
- [ ] `TRUST_PROXY=loopback` ✅
- [ ] `HOST=127.0.0.1` (ไม่ใช่ `0.0.0.0`) ✅
- [ ] DB อยู่นอก Document Root ✅
- [ ] เปิด scheduled backup ✅
