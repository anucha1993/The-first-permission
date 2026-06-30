# Thefirst Permission V1 — Server

Node.js + Express + SQLite backend ที่ทำหน้าที่:
1. เสิร์ฟ static frontend (index.html, css, js) จาก root project
2. ให้ REST API สำหรับเก็บข้อมูล (Key-Value) แทน localStorage

ทำให้ทุกเครื่องใน LAN เข้ามาใช้ระบบเดียวกัน เห็นข้อมูลตรงกัน

---

## ติดตั้งครั้งแรก (บน server ของ IT)

### 1) ติดตั้ง Node.js
ดาวน์โหลด LTS จาก https://nodejs.org/ (เวอร์ชัน 18+ ขึ้นไป)

ตรวจสอบ:
```powershell
node -v
npm -v
```

### 2) ติดตั้ง dependency

```powershell
cd "D:\IT_SUPPORT\IT ( ฝ่ายไอที ) - ISO\2026\The first permission\server"
npm install
```

> `better-sqlite3` ใช้ native build — อาจขอ Visual Studio Build Tools ตอน install
> ถ้ามีปัญหาให้รัน `npm install --build-from-source` หรือใช้ Node 18 LTS

### 3) เริ่มต้น server

```powershell
npm start
```

ค่าเริ่มต้น: `http://0.0.0.0:3100/` (เข้าได้ทุก IP ใน LAN)

จะเห็น log:
```
Thefirst Permission V1 server
  serving:  D:\IT_SUPPORT\...\The first permission
  database: D:\IT_SUPPORT\...\The first permission\server\data\permission.db
  listen:   http://0.0.0.0:3100/  (LAN: http://<server-ip>:3100/)
```

### 4) ให้พนักงานเข้าใช้

หา IP ของเครื่อง server:
```powershell
ipconfig | findstr IPv4
```

ส่ง URL ให้พนักงาน เช่น `http://192.168.1.50:3100/`

> ถ้า Windows Firewall บล็อก: เปิด inbound TCP port 3100

---

## เปลี่ยนพอร์ต

```powershell
$env:PORT = 8080
npm start
```

## ตั้งให้รันตอนเปิดเครื่อง (Windows)

ใช้ **NSSM** (Non-Sucking Service Manager):
```powershell
nssm install ThefirstPermission "C:\Program Files\nodejs\node.exe" "server.js"
nssm set ThefirstPermission AppDirectory "D:\IT_SUPPORT\IT ( ฝ่ายไอที ) - ISO\2026\The first permission\server"
nssm start ThefirstPermission
```

หรือใช้ **PM2**:
```powershell
npm install -g pm2
pm2 start server.js --name thefirst-permission
pm2 save
pm2 startup
```

---

## ฐานข้อมูล

ไฟล์: `server/data/permission.db` (SQLite)

โครงสร้าง: ตารางเดียว `kv (key TEXT PK, value TEXT, updated_at TEXT)`

คีย์ที่ระบบเก็บ:
- `perm_requests_v1` — รายการคำขอ
- `perm_requests_v1_upd` — timestamp อัปเดต
- `perm_groups_v2` — Permission Group matrix
- `perm_users_v1` — ผู้ใช้ระบบ (พร้อม PBKDF2 hash)
- `perm_reviews_v1` — รอบ Review
- `perm_history_v1` — ประวัติการแก้ไข

### Backup
```powershell
Copy-Item .\data\permission.db ".\data\backup-$(Get-Date -Format yyyyMMdd-HHmm).db"
```

### Restore
```powershell
Stop-Service ThefirstPermission   # หรือ pm2 stop thefirst-permission
Copy-Item .\data\backup-XXX.db .\data\permission.db -Force
Start-Service ThefirstPermission
```

---

## Auto-migrate จาก localStorage

ครั้งแรกที่เปิดเว็บ ถ้า server ยังว่าง แต่ browser มีข้อมูลเก่าใน localStorage
→ ระบบจะ upload ขึ้น server ให้อัตโนมัติ (ดู log ใน DevTools Console)

ถ้าอยากนำเข้าจากไฟล์ JSON ที่ backup ไว้ (เช่น `permission-backup-2026-06-19.json`):
1. เปิด `http://<server-ip>:3000/` ในเครื่องที่ยังไม่มีข้อมูล
2. กดปุ่ม "นำเข้าข้อมูล" ที่ footer → เลือกไฟล์ JSON
3. ข้อมูลจะถูก import เข้า localStorage shim → sync ขึ้น server ทันที

---

## API (สำหรับ debug / integration)

| Method | Path | คำอธิบาย |
|---|---|---|
| GET | `/api/health` | health check |
| GET | `/api/kvs` | ดึงข้อมูลทั้งหมด |
| GET | `/api/kv/:key` | ดึงคีย์เดียว |
| PUT | `/api/kv/:key` | upsert (body = ค่า) |
| DELETE | `/api/kv/:key` | ลบ |

ตัวอย่าง:
```powershell
curl http://localhost:3100/api/health
curl http://localhost:3100/api/kvs
```
