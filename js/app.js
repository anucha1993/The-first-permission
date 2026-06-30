
(function(){
  "use strict";
  var KEY="perm_requests_v1";
  var GKEY="perm_groups_v2";
  var RKEY="perm_reviews_v1";
  var HKEY="perm_history_v1";
  var DEFAULT_GROUPS={"url": "https://docs.google.com/spreadsheets/d/1fgchpLt1K7yOHoZymtcmV6oyR_20Xzoi/edit?gid=14746860#gid=14746860", "at": "2026-06-15T03:56:44.282198", "title": "ฟอร์มทบทวนสิทธิ (Review Access Right) - Permission group", "legend": ["- (non) = ไม่มี", "F (full) = สามารถ อ่าน,เขียน,ลบ ได้", "W (write) = สามารถ เขียน ข้อมูลได้", "R (read) = สามารถ อ่าน ข้อมูลได้"], "cols": ["No", "Name", "Date", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย", "เข้าพื้นที่ระบบเครือข่ายย่อย", "ระบบ  Network", "ระบบ Security", "ระบบ Backup & Restore", "ระบบ Firewall", "ระบบกล้องวงจรปิด", "source code", "โปรแกรม MS Word", "โปรแกรม MS Excel", "โปรแกรม MS PowerPoint", "ระบบติดตามใบงาน Tracking MOU The first", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour", "โปรแกรม Express A และ I", "โปรแกรม B-plus HRM", "Source Code", "ฐานข้อมูล SQL,Mysql", "Zoho CRM", "MAC 5", "VPN Connect", "การใช้งานอินเตอร์เน็ต", "Human Resource Management", "ISO@Thefirstgoodman", "ISO-ALL", "IT_SUPPORT", "Marketing", "ThefirstHR", "Account_Sub", "Accounts", "Documents", "MKT", "Sales", "Subcontrack", "Thefirst_Purchase", "Thefirst_Rayong", "V.D Worker", "ใบรับ-ส่งเอกสารปี 2568", "ประสานงานฝ่ายขาย_TFG", "ฝ่ายประสานงานต่างประเทศ", "NB-Sales", "info@thefirstgoodman.com", "account@thefirstgoodman.com", "sales@thefirstgoodman.com", "thefirstgoodman@gmail.com", "subcontract@thefirstgoodman.com", "info@thefirsthr.com", "thefirst.hrmanagement@gmail.com", "thaifirsthouse@gmail.com", "v.d.workergroup@gmail.com", "thefirst.it.help@gmail.com"], "rows": [{"No": "1.0", "Name": "ITC_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "F", "เข้าพื้นที่ระบบเครือข่ายย่อย": "F", "ระบบ  Network": "F", "ระบบ Security": "F", "ระบบ Backup & Restore": "F", "ระบบ Firewall": "F", "ระบบกล้องวงจรปิด": "F", "source code": "F", "โปรแกรม MS Word": "F", "โปรแกรม MS Excel": "F", "โปรแกรม MS PowerPoint": "F", "ระบบติดตามใบงาน Tracking MOU The first": "F", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "F", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "F", "ฐานข้อมูล SQL,Mysql": "F", "Zoho CRM": "F", "MAC 5": "F", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "F", "IT_SUPPORT": "F", "Marketing": "R", "ThefirstHR": "F", "Account_Sub": "", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "R", "Thefirst_Purchase": "R", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "F"}, {"No": "2.0", "Name": "ITC_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "F", "เข้าพื้นที่ระบบเครือข่ายย่อย": "F", "ระบบ  Network": "F", "ระบบ Security": "F", "ระบบ Backup & Restore": "F", "ระบบ Firewall": "F", "ระบบกล้องวงจรปิด": "F", "source code": "F", "โปรแกรม MS Word": "F", "โปรแกรม MS Excel": "F", "โปรแกรม MS PowerPoint": "F", "ระบบติดตามใบงาน Tracking MOU The first": "F", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "F", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "F", "ฐานข้อมูล SQL,Mysql": "F", "Zoho CRM": "R,W", "MAC 5": "F", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "R,W", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "-", "MKT": "R", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "-", "ฝ่ายประสานงานต่างประเทศ": "-", "NB-Sales": "", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "F"}, {"No": "3.0", "Name": "ACC_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "R,W", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "R,W", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R,W", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "R", "Account_Sub": "-", "Accounts": "F", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "F", "Thefirst_Purchase": "R", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "F", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "F", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "F", "thaifirsthouse@gmail.com": "F", "v.d.workergroup@gmail.com": "F", "thefirst.it.help@gmail.com": "-"}, {"No": "4.0", "Name": "ACC_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "R,W", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "R,W", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "R,W", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "R,W", "Thefirst_Purchase": "R", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "F", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "F", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "F", "thaifirsthouse@gmail.com": "F", "v.d.workergroup@gmail.com": "F", "thefirst.it.help@gmail.com": "-"}, {"No": "5.0", "Name": "ACS_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "R,W", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R,W", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "R", "Account_Sub": "F", "Accounts": "F", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "F", "Thefirst_Purchase": "R", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "F", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "F", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "F", "thaifirsthouse@gmail.com": "F", "v.d.workergroup@gmail.com": "F", "thefirst.it.help@gmail.com": "-"}, {"No": "6.0", "Name": "ACS_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "R,W", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "F", "Accounts": "R,W", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "R,W", "Thefirst_Purchase": "R", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "F", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "F", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "F", "thaifirsthouse@gmail.com": "F", "v.d.workergroup@gmail.com": "F", "thefirst.it.help@gmail.com": "-"}, {"No": "7.0", "Name": "DOC_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "F", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "R", "Documents": "F", "MKT": "R", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "F", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "8.0", "Name": "DOC_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R,W", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "R", "Documents": "R,W", "MKT": "R", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R,W", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "9.0", "Name": "HR_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "R,W", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "F", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "10.0", "Name": "HR_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "R,W", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "R,W", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "11.0", "Name": "HRM_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "F", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "", "info@thefirstgoodman.com": "-", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "-", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "F", "thefirst.hrmanagement@gmail.com": "F", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "12.0", "Name": "HRM_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "R,W", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "", "info@thefirstgoodman.com": "-", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "-", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "F", "thefirst.hrmanagement@gmail.com": "F", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "13.0", "Name": "ISO_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "F", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "14.0", "Name": "ISO_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R,W", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "15.0", "Name": "MKT_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "F", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "F", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "16.0", "Name": "MKT_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R,W", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "17.0", "Name": "PUR_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "F", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "18.0", "Name": "PUR_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "R", "Subcontrack": "-", "Thefirst_Purchase": "F", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R", "ประสานงานฝ่ายขาย_TFG": "R", "ฝ่ายประสานงานต่างประเทศ": "R", "NB-Sales": "R", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "19.0", "Name": "SAL_head", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R,W", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "F", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "F", "ประสานงานฝ่ายขาย_TFG": "F", "ฝ่ายประสานงานต่างประเทศ": "F", "NB-Sales": "F", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "F", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "20.0", "Name": "SAL_staff", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "R,W", "ISO-ALL": "R", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R", "MKT": "R", "Sales": "R,W", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "R,W", "ประสานงานฝ่ายขาย_TFG": "R,W", "ฝ่ายประสานงานต่างประเทศ": "R,W", "NB-Sales": "R,W", "info@thefirstgoodman.com": "F", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "F", "thefirstgoodman@gmail.com": "F", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "21.0", "Name": "everyone", "Date": "25/08/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "R,W", "โปรแกรม MS Excel": "R,W", "โปรแกรม MS PowerPoint": "R,W", "ระบบติดตามใบงาน Tracking MOU The first": "R,W", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "R,W", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "R,W", "MAC 5": "-", "VPN Connect": "R", "การใช้งานอินเตอร์เน็ต": "R", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "-", "MKT": "R", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "R,W", "V.D Worker": "R,W", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "-", "ฝ่ายประสานงานต่างประเทศ": "-", "NB-Sales": "-", "info@thefirstgoodman.com": "-", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "-", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "22.0", "Name": "ayutthaya", "Date": "22/12/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "-", "โปรแกรม MS Excel": "-", "โปรแกรม MS PowerPoint": "-", "ระบบติดตามใบงาน Tracking MOU The first": "-", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "-", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "-", "MAC 5": "-", "VPN Connect": "-", "การใช้งานอินเตอร์เน็ต": "-", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R,W", "MKT": "-", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "-", "V.D Worker": "-", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "-", "ฝ่ายประสานงานต่างประเทศ": "-", "NB-Sales": "-", "info@thefirstgoodman.com": "-", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "-", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "23.0", "Name": "measot", "Date": "22/12/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "-", "โปรแกรม MS Excel": "-", "โปรแกรม MS PowerPoint": "-", "ระบบติดตามใบงาน Tracking MOU The first": "-", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "-", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "-", "MAC 5": "-", "VPN Connect": "-", "การใช้งานอินเตอร์เน็ต": "-", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R,W", "MKT": "-", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "-", "V.D Worker": "-", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "-", "ฝ่ายประสานงานต่างประเทศ": "-", "NB-Sales": "-", "info@thefirstgoodman.com": "-", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "-", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "24.0", "Name": "phetburi", "Date": "22/12/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "-", "โปรแกรม MS Excel": "-", "โปรแกรม MS PowerPoint": "-", "ระบบติดตามใบงาน Tracking MOU The first": "-", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "-", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "-", "MAC 5": "-", "VPN Connect": "-", "การใช้งานอินเตอร์เน็ต": "-", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R,W", "MKT": "-", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "-", "V.D Worker": "-", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "-", "ฝ่ายประสานงานต่างประเทศ": "-", "NB-Sales": "-", "info@thefirstgoodman.com": "-", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "-", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "25.0", "Name": "rayong", "Date": "22/12/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "-", "โปรแกรม MS Excel": "-", "โปรแกรม MS PowerPoint": "-", "ระบบติดตามใบงาน Tracking MOU The first": "-", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "-", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "-", "MAC 5": "-", "VPN Connect": "-", "การใช้งานอินเตอร์เน็ต": "-", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R,W", "MKT": "-", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "-", "V.D Worker": "-", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "-", "ฝ่ายประสานงานต่างประเทศ": "-", "NB-Sales": "-", "info@thefirstgoodman.com": "-", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "-", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}, {"No": "26.0", "Name": "thefirst-hrm", "Date": "22/12/2025", "เข้าถึงพื้นที่ห้องควบคุมแม่ข่าย": "-", "เข้าพื้นที่ระบบเครือข่ายย่อย": "-", "ระบบ  Network": "-", "ระบบ Security": "-", "ระบบ Backup & Restore": "-", "ระบบ Firewall": "-", "ระบบกล้องวงจรปิด": "-", "source code": "", "โปรแกรม MS Word": "-", "โปรแกรม MS Excel": "-", "โปรแกรม MS PowerPoint": "-", "ระบบติดตามใบงาน Tracking MOU The first": "-", "ระบบจัดเก็บข้อมูลคนต่างด้าว Labour": "-", "โปรแกรม Express A และ I": "-", "โปรแกรม B-plus HRM": "-", "Source Code": "-", "ฐานข้อมูล SQL,Mysql": "-", "Zoho CRM": "-", "MAC 5": "-", "VPN Connect": "-", "การใช้งานอินเตอร์เน็ต": "-", "Human Resource Management": "-", "ISO@Thefirstgoodman": "-", "ISO-ALL": "-", "IT_SUPPORT": "-", "Marketing": "-", "ThefirstHR": "-", "Account_Sub": "-", "Accounts": "-", "Documents": "R,W", "MKT": "-", "Sales": "-", "Subcontrack": "-", "Thefirst_Purchase": "-", "Thefirst_Rayong": "-", "V.D Worker": "-", "ใบรับ-ส่งเอกสารปี 2568": "-", "ประสานงานฝ่ายขาย_TFG": "-", "ฝ่ายประสานงานต่างประเทศ": "-", "NB-Sales": "-", "info@thefirstgoodman.com": "-", "account@thefirstgoodman.com": "-", "sales@thefirstgoodman.com": "-", "thefirstgoodman@gmail.com": "-", "subcontract@thefirstgoodman.com": "-", "info@thefirsthr.com": "-", "thefirst.hrmanagement@gmail.com": "-", "thaifirsthouse@gmail.com": "-", "v.d.workergroup@gmail.com": "-", "thefirst.it.help@gmail.com": "-"}]};
  var DEFAULT_SHEET="https://docs.google.com/spreadsheets/d/1fgchpLt1K7yOHoZymtcmV6oyR_20Xzoi/edit?gid=14746860#gid=14746860";
  var ACTIONS={
    add:{label:"เพิ่มสิทธิ์",glyph:"+",cls:"act-add"},
    remove:{label:"ถอนสิทธิ์",glyph:"–",cls:"act-remove"},
    redefine:{label:"กำหนดใหม่",glyph:"⟳",cls:"act-redefine"}
  };
  var COLS={
    requesterName:["ชื่อผู้ร้องขอ","ผู้ร้องขอ","ชื่อ","requestername","name"],
    nickname:["ชื่อเล่น","nickname"],
    position:["ตำแหน่ง","position"],
    userAD:["hostname","เลขคอม","คอมพิวเตอร์","userad","user_ad"],
    adName:["user ad","ad name","adname","ad user","ชื่อ ad","ชื่อผู้ใช้ ad"],
    department:["แผนก/ฝ่าย","แผนก","ฝ่าย","department"],
    employeeCode:["รหัสพนักงาน","รหัส","employeecode","empcode"],
    approverName:["ผู้อนุมัติ","approver","approvername"],
    newApprover:["ผู้อนุมัติใหม่","newapprover"],
    permission:["permission","สิทธิ์","สิทธิ"],
    action:["การกระทำ","action","ชนิด"],
    date:["วันที่","date"]
  };

  // ── utils ───────────────────────────────────────────────
  function todayISO(){return new Date().toISOString().slice(0,10);}
  function toISO(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
  function fmtDate(iso){if(!iso)return"—";var p=iso.split("-");return p[2]+"/"+p[1]+"/"+p[0];}
  function fmtDateTime(iso){try{var d=new Date(iso);return toISO(d)+" "+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");}catch(e){return"";}}
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
  function pad4(n){return String(n).padStart(4,"0");}
  function blankItem(){return{permission:"",action:"add",date:todayISO()};}

  function normalizeAction(v){
    var s=String(v||"").toLowerCase();
    if(s.indexOf("ถอน")>=0||s.indexOf("ลบ")>=0||s.indexOf("remove")>=0||s.indexOf("revoke")>=0)return"remove";
    if(s.indexOf("กำหนด")>=0||s.indexOf("ใหม่")>=0||s.indexOf("redefine")>=0||s.indexOf("reset")>=0||s.indexOf("new")>=0)return"redefine";
    return"add";
  }
  function parseDate(v){
    if(v===""||v==null)return todayISO();
    if(v instanceof Date&&!isNaN(v))return toISO(v);
    if(typeof v==="number"){var d=new Date(Math.round((v-25569)*86400*1000));return isNaN(d)?todayISO():toISO(d);}
    var s=String(v).trim(),m;
    m=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(m)return m[1]+"-"+m[2].padStart(2,"0")+"-"+m[3].padStart(2,"0");
    m=s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/);if(m)return m[3]+"-"+m[2].padStart(2,"0")+"-"+m[1].padStart(2,"0");
    var dd=new Date(s);return isNaN(dd)?todayISO():toISO(dd);
  }
  function pick(row,keys){
    var lower={},k;
    for(k in row)if(Object.prototype.hasOwnProperty.call(row,k))lower[String(k).trim().toLowerCase()]=row[k];
    for(var i=0;i<keys.length;i++){var v=lower[keys[i].trim().toLowerCase()];if(v!==undefined&&v!==null&&String(v).trim()!=="")return v;}
    return"";
  }

  // ── state ───────────────────────────────────────────────
  var requests=load();
  var reqUpdated=loadReqUpdated();
  var view="dashboard";
  var editingId=null;
  var forceBlank=false;
  var groups=loadGroups();
  var groupView="easy";
  var groupSel=null;
  var geShowAll=false;
  var geMode="perms";

  // ── auth integration ───────────────────────────
  var session=(window.Auth&&window.Auth.session())||null;
  function isIT(){return !!(session&&session.role==="it");}
  function isUser(){return !!(session&&session.role==="user");}
  var ALLOWED_USER_VIEWS={form:1, review:1};

  // ── review / history state ─────────────────────
  var reviews = loadReviews();
  var history = loadHistory();
  var reviewSel = null;

  // ── pagination state + helpers ─────────────────
  var PAGE_SIZE = 20;
  var pages = { list:1, report:1, reviewIT:1, reviewUser:1, users:1, groupUsers:1, auditlog:1, userperm:1, upGrpActive:1, upGrpRemoved:1 };
  var auditQuery = '';
  var auditTotal = null;
  var userPermSel = null;   // canonical user key currently being viewed
  var userPermQ = "";       // search query in user-permission view
  var groupUsersShow = "active"; // "active" | "removed" | "all" — filter in group's "ผู้ใช้" tab
  function paginate(arr, scope){
    var total = arr.length;
    var pg = Math.max(1, Math.ceil(total/PAGE_SIZE));
    if(pages[scope] > pg) pages[scope] = pg;
    if(pages[scope] < 1) pages[scope] = 1;
    var p = pages[scope], start = (p-1)*PAGE_SIZE;
    return { rows: arr.slice(start, start+PAGE_SIZE), page:p, pages:pg, total:total, start:start };
  }
  function pagerHTML(scope, p){
    if(p.total<=PAGE_SIZE) return '<div class="pager"><span class="pg-info">'+p.total+' รายการ</span></div>';
    function btn(num,label,disabled,on){
      return '<button class="pg-btn'+(on?' on':'')+'" data-pg="'+num+'" data-scope="'+scope+'"'+(disabled?' disabled':'')+'>'+label+'</button>';
    }
    var btns=[ btn(1,'«',p.page<=1,false), btn(p.page-1,'‹',p.page<=1,false) ];
    var lo=Math.max(1,p.page-2), hi=Math.min(p.pages,p.page+2);
    if(lo>1) btns.push('<span class="pg-gap">…</span>');
    for(var i=lo;i<=hi;i++) btns.push(btn(i,String(i),false,i===p.page));
    if(hi<p.pages) btns.push('<span class="pg-gap">…</span>');
    btns.push(btn(p.page+1,'›',p.page>=p.pages,false));
    btns.push(btn(p.pages,'»',p.page>=p.pages,false));
    var from = p.start+1, to = Math.min(p.start+PAGE_SIZE, p.total);
    return '<div class="pager">'+btns.join('')+
      '<span class="pg-info">'+from+'–'+to+' จาก '+p.total+' · หน้า '+p.page+'/'+p.pages+'</span></div>';
  }

  function loadGroups(){
    var r=null;
    try{var s=localStorage.getItem(GKEY);if(s)r=JSON.parse(s);}catch(e){}
    if(!r) r=DEFAULT_GROUPS?JSON.parse(JSON.stringify(DEFAULT_GROUPS)):{url:"",at:"",cols:[],rows:[]};
    if(!r.categories||typeof r.categories!=="object") r.categories={};
    if(!Array.isArray(r.catOrder)) r.catOrder=[];
    return r;
  }
  function saveGroups(){try{localStorage.setItem(GKEY,JSON.stringify(groups));}catch(e){toast("บันทึกกลุ่มสิทธิ์ไม่สำเร็จ");}}

  function load(){try{var r=localStorage.getItem(KEY);return r?JSON.parse(r):[];}catch(e){return[];}}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(requests));reqUpdated=new Date().toISOString();localStorage.setItem(KEY+"_upd",reqUpdated);}catch(e){toast("บันทึกไม่สำเร็จ (พื้นที่เต็ม?)");}}
  function loadReqUpdated(){try{return localStorage.getItem(KEY+"_upd")||"";}catch(e){return"";}}
  function lastReqUpdate(){
    if(reqUpdated)return reqUpdated;
    var m="";requests.forEach(function(r){var t=r.updatedAt||r.createdAt||"";if(t>m)m=t;});return m;
  }
  function fmtUpd(){var u=lastReqUpdate();return u?fmtDateTime(u):"—";}
  function updatedLineHTML(){return '<div class="upd-line no-print">อัพเดทล่าสุด: '+fmtUpd()+'</div>';}
  function nextNo(){return requests.reduce(function(m,r){return Math.max(m,r.no||0);},0)+1;}
  function norm(s){return String(s||"").trim().toLowerCase();}
  function datePart(s){return String(s||"").slice(0,10);}
  function findPerson(name,ad){
    for(var i=0;i<requests.length;i++){
      var r=requests[i];
      if(norm(r.requesterName)!==norm(name))continue;
      var x=norm(r.userAD),y=norm(ad);
      if(x&&y){if(x===y)return r;continue;}
      return r;
    }
    return null;
  }
  function mergePersonInto(target,src){
    ["nickname","position","userAD","adName","department","employeeCode","approverName","newApprover","note"].forEach(function(f){
      if((!target[f]||String(target[f]).trim()==="")&&src[f])target[f]=src[f];
    });
    var changed=false,maxDate="";
    (src.items||[]).forEach(function(ni){
      var hit=null;
      for(var i=0;i<target.items.length;i++){if(norm(target.items[i].permission)===norm(ni.permission)){hit=target.items[i];break;}}
      if(hit){hit.action=ni.action;hit.date=ni.date||hit.date;changed=true;}
      else{target.items.push({permission:ni.permission,action:ni.action,date:ni.date||todayISO()});changed=true;}
      if((ni.date||"")>maxDate)maxDate=ni.date||"";
    });
    if(changed){var stamp=maxDate||todayISO();if(datePart(target.updatedAt)<stamp)target.updatedAt=stamp;}
    return changed;
  }
  function flatRows(){
    var out=[];
    requests.forEach(function(r){
      (r.items||[]).forEach(function(it){
        out.push({no:r.no,requesterName:r.requesterName,nickname:r.nickname,position:r.position,userAD:r.userAD,adName:r.adName,
          department:r.department,employeeCode:r.employeeCode,approverName:r.approverName,newApprover:r.newApprover,
          permission:it.permission,action:it.action,date:it.date});
      });
    });
    return out.sort(function(a,b){return(b.date||"").localeCompare(a.date||"");});
  }

  var EXAMPLE={requesterName:"ศุภณัฐ พิมพบุตร",nickname:"ณัฐ",position:"พนักงาน",userAD:"PC-TFG090",adName:"supanat.p",department:"ไอที",employeeCode:"6803002",approverName:"ศุภณัฐ พิมพบุตร",newApprover:"",note:"",items:[{permission:"Acs_staff",action:"redefine",date:"2025-10-06"}]};
  var BLANK={requesterName:"",nickname:"",position:"",userAD:"",adName:"",department:"",employeeCode:"",approverName:"",newApprover:"",note:"",items:[blankItem()]};

  var content=document.getElementById("content");

  // delegated pager click handler (one-time)
  content.addEventListener("click",function(e){
    var b=e.target.closest(".pg-btn[data-scope]");
    if(!b||b.disabled)return;
    var scope=b.getAttribute("data-scope");
    var pg=parseInt(b.getAttribute("data-pg"),10)||1;
    if(pages[scope]===pg)return;
    pages[scope]=pg;
    if(scope==="list"){var lq=document.getElementById("lq");renderStack(lq?lq.value:"");}
    else if(scope==="report"){updateTable();}
    else if(scope==="auditlog"){ renderAuditLog(); }
    else if(scope==="userperm" || scope==="upGrpActive" || scope==="upGrpRemoved"){ render(); }
    else { render(); }
  });

  // ── toast ───────────────────────────────────────────────
  var toastTimer;
  function toast(msg){
    var t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");
    clearTimeout(toastTimer);toastTimer=setTimeout(function(){t.classList.remove("show");},2600);
  }

  // ── navigation ──────────────────────────────────────────
  function setView(v){
    if(isUser() && !ALLOWED_USER_VIEWS[v]) v="form";
    view=v;render();
  }
  function render(){
    applyRole();
    content.className="content"+(view==="groups"?" wide":"");
    document.getElementById("cReq").textContent=requests.length;
    document.getElementById("cRow").textContent=flatRows().length;
    document.getElementById("cGrp").textContent=groups.rows.length;
    var cu=document.getElementById("cUsr");
    if(cu) cu.textContent=(window.Auth&&window.Auth.list)?window.Auth.list().length:0;
    var crv=document.getElementById("cRev");
    if(crv) crv.textContent=reviewPendingCount();
    var cup=document.getElementById("cUp");
    if(cup) cup.textContent=collectUsers().length;
    document.getElementById("tabForm").textContent=editingId?"แก้ไขคำขอ":"คำขอใหม่";
    var tabs=document.querySelectorAll(".tab");
    tabs.forEach(function(b){b.classList.toggle("on",b.getAttribute("data-view")===view);});
    if(view==="groups")renderGroups();
    else if(view==="form")renderForm();
    else if(view==="list")renderList();
    else if(view==="users")renderUsers();
    else if(view==="review")renderReview();
    else if(view==="auditlog")renderAuditLog();
    else if(view==="userperm")renderUserPerm();
    else if(view==="dashboard")renderDashboard();
    else renderReport();
  }
  function applyRole(){
    var tabs=document.querySelectorAll("#tabs .tab");
    tabs.forEach(function(b){
      var v=b.getAttribute("data-view");
      var allowed = !session || isIT() || ALLOWED_USER_VIEWS[v];
      b.style.display = allowed ? "" : "none";
    });
    var ft=document.querySelector(".footer");
    if(ft) ft.style.display = isUser() ? "none" : "";
    if(isUser() && !ALLOWED_USER_VIEWS[view]) view="form";
    renderMastheadUser();
  }
  function renderMastheadUser(){
    var slot=document.getElementById("mUser");
    if(!slot) return;
    if(!session){ slot.innerHTML=""; return; }
    var roleLabel = isIT()
      ? "ผู้ดูแลระบบ (IT)"
      : "ผู้ใช้" + (session.department ? " · "+esc(session.department) : "");
    slot.innerHTML =
      '<div class="m-info">'+
        '<div class="m-name">'+esc(session.name||session.username)+'</div>'+
        '<div class="m-role">'+roleLabel+'</div>'+
      '</div>'+
      '<button class="logout" id="logoutBtn" type="button">ออกจากระบบ</button>';
    var lb=document.getElementById("logoutBtn");
    if(lb) lb.onclick=function(){
      if(window.Auth && window.Auth.logout) window.Auth.logout();
    };
  }
  document.getElementById("tabs").addEventListener("click",function(e){
    var b=e.target.closest(".tab");if(!b)return;
    var v=b.getAttribute("data-view");
    if(v==="form") editingId=null;
    if(v==="review") reviewSel=null;
    if(v==="userperm") userPermSel=null;
    setView(v);
  });

  // ── FORM ────────────────────────────────────────────────
  function fieldHTML(label,id,val,mono,ph){
    return '<label class="field"><span class="f-label">'+esc(label)+'</span>'+
      '<input id="'+id+'" class="f-input'+(mono?" mono":"")+'" value="'+esc(val)+'" placeholder="'+esc(ph||"")+'"></label>';
  }
  function areaFieldHTML(label,id,val,ph){
    return '<label class="field"><span class="f-label">'+esc(label)+'</span>'+
      '<textarea id="'+id+'" class="f-input f-area" placeholder="'+esc(ph||"")+'" rows="3">'+esc(val||"")+'</textarea></label>';
  }
  function apprOptionsHTML(currentName){
    var users = (window.Auth && window.Auth.list) ? window.Auth.list() : [];
    var names = {};
    users.forEach(function(u){ if(u && u.name) names[u.name] = 1; });
    var opts = '<option value="">— เลือกผู้อนุมัติ —</option>';
    if (currentName && !names[currentName]) {
      opts += '<option value="'+esc(currentName)+'" selected>'+esc(currentName)+' (ไม่อยู่ในระบบผู้ใช้)</option>';
    }
    users.slice().sort(function(a,b){
      // IT ก่อน แล้วเรียงตามชื่อ
      if((a.role==='it')!==(b.role==='it')) return a.role==='it' ? -1 : 1;
      return String(a.name||'').localeCompare(String(b.name||''),'th');
    }).forEach(function(u){
      var label = u.name + (u.department?' · '+u.department:'') + ' ['+(u.role==='it'?'IT':'User')+']';
      var sel = (u.name === currentName) ? ' selected' : '';
      opts += '<option value="'+esc(u.name)+'"'+sel+'>'+esc(label)+'</option>';
    });
    return opts;
  }
  function rowHTML(item){
    var a=(item&&item.action)||"add";
    var segs=Object.keys(ACTIONS).map(function(k){
      var info=ACTIONS[k];
      return '<button type="button" class="seg-btn '+info.cls+(k===a?" on":"")+'" data-set="'+k+'"><b>'+info.glyph+'</b> '+info.label+'</button>';
    }).join("");
    return '<div class="row" data-act="'+a+'">'+
      '<span class="row-no mono"></span>'+
      '<input class="f-input mono perm" list="permOptions" placeholder="เลือก/พิมพ์กลุ่มสิทธิ์ เช่น ITC_head" value="'+esc(item?item.permission:"")+'">'+
      '<div class="seg">'+segs+'</div>'+
      '<input type="date" class="f-input mono pdate" value="'+esc((item&&item.date)||todayISO())+'">'+
      '<button type="button" class="row-del" title="ลบแถว">×</button></div>';
  }
  function renumber(){
    var rows=content.querySelectorAll("#rows .row");
    rows.forEach(function(r,i){r.querySelector(".row-no").textContent=i+1;});
  }
  function groupNames(){
    if(!groups.cols.length)return[];
    var mc=groupCols(groups.cols);
    return groups.rows.map(function(r){return String(r[mc.nameCol]||"");}).filter(Boolean);
  }
  function renderForm(){
    var editing=editingId?requests.filter(function(r){return r.id===editingId;})[0]:null;
    var f=editing?editing:(forceBlank?BLANK:(requests.length===0&&!isUser()?EXAMPLE:BLANK));
    forceBlank=false;
    // pre-fill submitter info when logged-in role is User
    if(!editing && isUser() && session){
      f=Object.assign({},f,{
        requesterName:f.requesterName||session.name||"",
        department:f.department||session.department||""
      });
    }
    var opts=groupNames().map(function(n){return '<option value="'+esc(n)+'">';}).join("");
    content.innerHTML=
      '<section class="card">'+
      '<datalist id="permOptions">'+opts+'</datalist>'+
      '<div class="card-head"><h2>'+(editing?"แก้ไขคำขอ":"บันทึกคำขอใหม่")+'</h2>'+
      '<p>กรอกข้อมูลผู้ร้องขอ ผู้อนุมัติ และรายการสิทธิ์ที่ต้องการเพิ่ม ถอน หรือกำหนดใหม่</p></div>'+
      '<div class="sec-label">ข้อมูลผู้ร้องขอ</div>'+
      '<div class="grid">'+
        fieldHTML("ชื่อผู้ร้องขอ","f_name",f.requesterName,false,"ชื่อ–นามสกุล")+
        fieldHTML("ชื่อเล่น","f_nick",f.nickname)+
        fieldHTML("ตำแหน่ง","f_pos",f.position)+
        fieldHTML("Hostname (เลขคอม)","f_ad",f.userAD,true,"เช่น PC-TFG090")+
        fieldHTML("User AD (ชื่อผู้ใช้)","f_adname",f.adName,true,"เช่น supanat.p")+
        fieldHTML("แผนก / ฝ่าย","f_dept",f.department)+
        fieldHTML("รหัสพนักงาน","f_emp",f.employeeCode,true)+
      '</div>'+
      '<div class="sec-label">ข้อมูลผู้อนุมัติ</div>'+
      '<div class="grid">'+
        '<label class="field"><span class="f-label">ชื่อผู้อนุมัติ</span>'+
          '<select id="f_appr" class="f-input f-sel">'+apprOptionsHTML(f.approverName||"")+'</select>'+
        '</label>'+
      '</div>'+
      '<div class="sec-label">รายการสิทธิ์<button class="btn-ghost" id="addRow">+ เพิ่มแถว</button></div>'+
      '<div class="rows"><div class="row-head"><span>No</span><span>Permission</span><span>การกระทำ</span><span>วันที่</span><span></span></div>'+
      '<div id="rows"></div></div>'+
      '<div class="sec-label">หมายเหตุ</div>'+
      '<div class="grid grid-full">'+
        areaFieldHTML("หมายเหตุเพิ่มเติม","f_note",f.note||"","เช่น เหตุผลในการขอสิทธิ์ / อ้างอิงตั๋ว / ตำแหน่งใหม่ ฯลฯ")+
      '</div>'+
      '<div class="actions"><button class="btn-ghost" id="clearForm">ล้างฟอร์ม</button>'+
      '<button class="btn-primary" id="saveForm">'+(editing?"บันทึกการแก้ไข":"บันทึกคำขอ")+'</button></div>'+
      '</section>';
    var items=(f.items&&f.items.length)?f.items:[blankItem()];
    document.getElementById("rows").innerHTML=items.map(rowHTML).join("");
    renumber();
    wireForm();
  }
  function wireForm(){
    document.getElementById("addRow").onclick=function(){
      document.getElementById("rows").insertAdjacentHTML("beforeend",rowHTML(blankItem()));renumber();
    };
    document.getElementById("rows").addEventListener("click",function(e){
      var seg=e.target.closest(".seg-btn");
      if(seg){
        var row=seg.closest(".row");row.setAttribute("data-act",seg.getAttribute("data-set"));
        row.querySelectorAll(".seg-btn").forEach(function(b){b.classList.toggle("on",b===seg);});
        return;
      }
      var del=e.target.closest(".row-del");
      if(del){
        var rows=content.querySelectorAll("#rows .row");
        if(rows.length>1){del.closest(".row").remove();renumber();}
      }
    });
    document.getElementById("clearForm").onclick=function(){editingId=null;forceBlank=true;renderForm();};
    document.getElementById("saveForm").onclick=submitForm;
  }
  function readForm(){
    var get=function(id){return (document.getElementById(id).value||"").trim();};
    var rows=[].slice.call(content.querySelectorAll("#rows .row")).map(function(r){
      return{permission:(r.querySelector(".perm").value||"").trim(),action:r.getAttribute("data-act"),date:r.querySelector(".pdate").value||todayISO()};
    }).filter(function(x){return x.permission!=="";});
    return{
      requesterName:get("f_name"),nickname:get("f_nick"),position:get("f_pos"),userAD:get("f_ad"),adName:get("f_adname"),
      department:get("f_dept"),employeeCode:get("f_emp"),approverName:get("f_appr"),newApprover:"",note:get("f_note"),items:rows
    };
  }
  function submitForm(){
    var data=readForm();
    if(!data.requesterName){toast("กรุณากรอกชื่อผู้ร้องขอ");return;}
    if(data.items.length===0){toast("กรุณากรอกอย่างน้อย 1 สิทธิ์");return;}
    var submittedBy = session ? {username:session.username,name:session.name,department:session.department,role:session.role,at:new Date().toISOString()} : null;
    if(editingId){
      requests=requests.map(function(r){return r.id===editingId?Object.assign({},r,data,{updatedAt:new Date().toISOString(),lastEditBy:submittedBy}):r;});
      save();editingId=null;toast("แก้ไขคำขอเรียบร้อย");
    }else{
      var existing=findPerson(data.requesterName,data.userAD);
      if(existing){
        mergePersonInto(existing,data);
        if(submittedBy) existing.lastEditBy=submittedBy;
        save();
        toast("รวมเข้ากับ "+data.requesterName+" — ตอนนี้มี "+existing.items.length+" สิทธิ์");
      }else{
        var rec=Object.assign({id:"req_"+Date.now(),no:nextNo(),createdAt:new Date().toISOString(),submittedBy:submittedBy},data);
        requests.unshift(rec);save();toast("บันทึกคำขอ #"+pad4(rec.no)+" แล้ว");
      }
    }
    if(isUser()){
      // User stays on form; clear inputs for next submission
      editingId=null; forceBlank=true; render();
    }else{
      setView("list");
    }
  }

  // ── LIST ────────────────────────────────────────────────
  function importBarHTML(){
    return '<div class="importbar no-print"><div class="ib-text"><b>นำเข้าจาก Excel / CSV</b>'+
      '<span>คอลัมน์: ชื่อผู้ร้องขอ · Hostname · User AD · Permission · การกระทำ (เพิ่ม/ถอน/กำหนดใหม่) · วันที่ — ชื่อซ้ำจะรวมเข้าคนเดิม (1 คน 1 ใบ)</span></div>'+
      '<div class="ib-btns"><button class="btn-ghost sm" id="dlTemplate">ดาวน์โหลดเทมเพลต</button>'+
      '<button class="btn-primary sm" id="pickFile">เลือกไฟล์</button>'+
      '<input type="file" id="impFile" accept=".xlsx,.xls,.csv" hidden></div></div>';
  }
  function reqLatestDate(r){
    return (r.items||[]).reduce(function(m,it){return (it.date||"")>m?(it.date||""):m;},"");
  }
  function reqCardHTML(r){
    var meta=[r.userAD,(r.adName?"AD: "+r.adName:""),r.department,r.position,r.employeeCode].filter(Boolean).join(" · ");
    var upd=fmtUpdShort(r.updatedAt);
    var perms=(r.items||[]).map(function(it){
      var info=ACTIONS[it.action]||ACTIONS.add;
      return '<li><span class="chip '+info.cls+'"><b>'+info.glyph+'</b> '+info.label+'</span>'+
        '<span class="perm-name mono perm-link" data-perm="'+esc(it.permission)+'">'+esc(it.permission)+'</span>'+
        '<span class="perm-dates"><span class="pd"><span class="pd-l">วันที่</span> '+fmtDate(it.date)+'</span>'+
        (upd?'<span class="pd pd-upd"><span class="pd-l">อัพเดท</span> '+upd+'</span>':'')+'</span></li>';
    }).join("");
    return '<article class="req"><div class="req-top">'+
      '<div class="req-id mono">#'+pad4(r.no)+'</div>'+
      '<div class="req-who"><div class="req-name">'+esc(r.requesterName)+(r.nickname?'<span class="req-nick"> ('+esc(r.nickname)+')</span>':'')+'</div>'+
      '<div class="req-meta mono">'+esc(meta)+'</div></div>'+
      '<div class="req-acts no-print"><button class="btn-ghost sm" data-edit="'+r.id+'">แก้ไข</button>'+
      '<button class="btn-ghost sm danger" data-del="'+r.id+'">ลบ</button></div></div>'+
      (r.approverName?'<div class="req-appr">ผู้ขอสิทธิ์: '+esc(r.approverName)+'</div>':'')+
      '<ul class="perms">'+perms+'</ul>'+
      (r.note?'<div class="req-note"><b>หมายเหตุ:</b> '+esc(r.note)+'</div>':'')+
      '</article>';
  }
  function sortedFiltered(q){
    var ql=String(q||"").trim().toLowerCase();
    var arr=requests.filter(function(r){
      if(!ql)return true;
      var hay=[r.requesterName,r.nickname,r.position,r.userAD,r.adName,r.department,r.employeeCode,r.approverName]
        .concat((r.items||[]).map(function(it){return it.permission;})).join(" ").toLowerCase();
      return hay.indexOf(ql)>=0;
    });
    arr.sort(function(a,b){
      var da=reqLatestDate(a),db=reqLatestDate(b);
      if(db!==da)return db<da?-1:1;
      return (b.no||0)-(a.no||0);
    });
    return arr;
  }
  function renderStack(q){
    var arr=sortedFiltered(q);
    var p=paginate(arr,'list');
    var st=document.getElementById("reqStack");
    st.innerHTML=arr.length?(p.rows.map(reqCardHTML).join("")+pagerHTML('list',p)):'<div class="empty"><p>ไม่พบคำขอที่ตรงกับการค้นหา</p></div>';
    var lc=document.getElementById("lcount");if(lc)lc.textContent=arr.length+" / "+requests.length+" คำขอ";
  }
  function renderList(){
    var html=importBarHTML();
    if(requests.length===0){
      html+='<div class="empty"><p>ยังไม่มีคำขอในระบบ — สร้างใหม่ หรือนำเข้าจาก Excel</p>'+
        '<button class="btn-primary" id="goNew">สร้างคำขอแรก</button></div>';
      content.innerHTML='<div id="listRoot">'+html+'</div>';
      wireList();return;
    }
    html+=updatedLineHTML();
    html+='<div class="list-search no-print"><input class="f-input" id="lq" placeholder="ค้นหา: ชื่อ, Hostname, User AD, แผนก, สิทธิ์, ผู้ขอสิทธิ์…"><span class="list-count" id="lcount"></span></div>';
    html+='<div class="stack" id="reqStack"></div>';
    content.innerHTML='<div id="listRoot">'+html+'</div>';
    renderStack("");
    wireList();
  }
  function wireList(){
    var goNew=document.getElementById("goNew");if(goNew)goNew.onclick=function(){editingId=null;setView("form");};
    document.getElementById("dlTemplate").onclick=downloadTemplate;
    var inp=document.getElementById("impFile");
    document.getElementById("pickFile").onclick=function(){inp.click();};
    inp.onchange=function(e){var f=e.target.files[0];if(f)importFile(f);e.target.value="";};
    var lq=document.getElementById("lq");
    if(lq)lq.addEventListener("input",function(){ pages.list=1; renderStack(lq.value);});
    document.getElementById("listRoot").addEventListener("click",function(e){
      var pl=e.target.closest("[data-perm]");if(pl){gotoGroup(pl.getAttribute("data-perm"));return;}
      var ed=e.target.closest("[data-edit]");if(ed){editingId=ed.getAttribute("data-edit");setView("form");return;}
      var dl=e.target.closest("[data-del]");if(dl){
        if(confirm("ลบคำขอนี้? การลบไม่สามารถย้อนกลับได้")){
          requests=requests.filter(function(r){return r.id!==dl.getAttribute("data-del");});save();toast("ลบคำขอแล้ว");render();
        }
      }
    });
  }

  // ── IMPORT ──────────────────────────────────────────────
  function importFile(file){
    file.arrayBuffer().then(function(buf){
      var wb=XLSX.read(new Uint8Array(buf),{type:"array",cellDates:true});
      var ws=wb.Sheets[wb.SheetNames[0]];
      var json=XLSX.utils.sheet_to_json(ws,{defval:""});
      if(!json.length){toast("ไม่พบข้อมูลในไฟล์");return;}
      var grouped={},order=[];
      json.forEach(function(row){
        var rname=String(pick(row,COLS.requesterName)).trim();
        var perm=String(pick(row,COLS.permission)).trim();
        if(!rname&&!perm)return;
        var userAD=String(pick(row,COLS.userAD)).trim();
        var key=rname+"|"+userAD;
        if(!grouped[key]){
          grouped[key]={id:"req_"+Date.now()+"_"+order.length,requesterName:rname,
            nickname:String(pick(row,COLS.nickname)).trim(),position:String(pick(row,COLS.position)).trim(),
            userAD:userAD,adName:String(pick(row,COLS.adName)).trim(),department:String(pick(row,COLS.department)).trim(),
            employeeCode:String(pick(row,COLS.employeeCode)).trim(),approverName:String(pick(row,COLS.approverName)).trim(),
            newApprover:String(pick(row,COLS.newApprover)).trim(),items:[],createdAt:new Date().toISOString(),imported:true};
          order.push(key);
        }
        if(perm)grouped[key].items.push({permission:perm,action:normalizeAction(pick(row,COLS.action)),date:parseDate(pick(row,COLS.date))});
      });
      var recs=order.map(function(k){return grouped[k];}).filter(function(r){return r.items.length;});
      if(!recs.length){toast("ไม่พบรายการสิทธิ์ที่นำเข้าได้ — ตรวจสอบหัวคอลัมน์");return;}
      var newOnes=[],mergedCount=0,lines=0;
      recs.forEach(function(rec){
        lines+=rec.items.length;
        var ex=findPerson(rec.requesterName,rec.userAD);
        if(ex)mergePersonInto(ex,rec),mergedCount++;
        else newOnes.push(rec);
      });
      newOnes.forEach(function(rec){rec.no=nextNo();requests.unshift(rec);});
      save();
      toast("นำเข้า: ใหม่ "+newOnes.length+" คน · รวมเข้าคนเดิม "+mergedCount+" คน ("+lines+" สิทธิ์)");
      setView("list");
    }).catch(function(){toast("อ่านไฟล์ไม่สำเร็จ รองรับ .xlsx, .xls, .csv");});
  }
  function downloadTemplate(){
    var sample=[
      {"ชื่อผู้ร้องขอ":"ศุภณัฐ พิมพบุตร","ชื่อเล่น":"ณัฐ","ตำแหน่ง":"พนักงาน","Hostname":"PC-TFG090","User AD":"supanat.p","แผนก/ฝ่าย":"ไอที","รหัสพนักงาน":"6803002","ผู้อนุมัติ":"ศุภณัฐ","Permission":"ITC_staff","การกระทำ":"กำหนดใหม่","วันที่":"01/06/2026"},
      {"ชื่อผู้ร้องขอ":"สมหญิง ใจดี","ชื่อเล่น":"หญิง","ตำแหน่ง":"พนักงาน","Hostname":"PC-TFG091","User AD":"somying.j","แผนก/ฝ่าย":"บุคคล","รหัสพนักงาน":"6701045","ผู้อนุมัติ":"ศุภณัฐ","Permission":"hr_staff","การกระทำ":"เพิ่ม","วันที่":"02/06/2026"},
      {"ชื่อผู้ร้องขอ":"ธนากร แสนสุข","ชื่อเล่น":"กร","ตำแหน่ง":"พนักงาน","Hostname":"PC-TFG092","User AD":"thanakorn.s","แผนก/ฝ่าย":"บัญชี","รหัสพนักงาน":"6605120","ผู้อนุมัติ":"ศุภณัฐ","Permission":"acc_staff","การกระทำ":"ถอน","วันที่":"03/06/2026"}
    ];
    var hdr=["ชื่อผู้ร้องขอ","ชื่อเล่น","ตำแหน่ง","Hostname","User AD","แผนก/ฝ่าย","รหัสพนักงาน","ผู้อนุมัติ","Permission","การกระทำ","วันที่"];
    var ws=XLSX.utils.json_to_sheet(sample,{header:hdr});
    ws["!cols"]=[{wch:20},{wch:10},{wch:12},{wch:13},{wch:14},{wch:16},{wch:12},{wch:14},{wch:14},{wch:12},{wch:12}];
    var wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,"ข้อมูลสิทธิ์");
    XLSX.writeFile(wb,"permission-template.xlsx");
  }

  // ── PERMISSION GROUP ────────────────────────────────────
  function fixVal(col,v){
    var s=v==null?"":String(v);
    if(/date|วันที่/i.test(col)&&/^\d{4,5}$/.test(s.trim())){
      var n=parseInt(s,10);
      if(n>20000&&n<80000){var d=new Date(Math.round((n-25569)*86400*1000));if(!isNaN(d))return fmtDate(toISO(d));}
    }
    return s;
  }
  // หาแถวหัวคอลัมน์เอง: แถวที่มีจำนวนช่องไม่ว่างมากที่สุดใน 15 แถวแรก (ข้ามแถวชื่อฟอร์ม/ว่าง)
  function ingestAOA(aoa){
    var scan=Math.min(aoa.length,15),best=0,bestN=1;
    for(var i=0;i<scan;i++){
      var n=(aoa[i]||[]).filter(function(v){return v!=null&&String(v).trim()!=="";}).length;
      if(n>bestN){bestN=n;best=i;}
    }
    var hdr=aoa[best]||[],idx=[],cols=[],seen={};
    hdr.forEach(function(v,i){
      var s=v==null?"":String(v).trim();
      if(s===""&&best>0)return; // ข้ามคอลัมน์ที่ไม่มีหัว (กรณีมีแถวหัวจริง)
      var name=s||("คอลัมน์ "+(i+1));
      if(seen[name]){seen[name]++;name=name+" ("+seen[name]+")";}else seen[name]=1;
      idx.push(i);cols.push(name);
    });
    var rows=[],title=(best>0&&aoa[0]&&aoa[0][0])?String(aoa[0][0]).trim():"";
    for(var r=best+1;r<aoa.length;r++){
      var arr=aoa[r];if(!arr)continue;
      if(!idx.some(function(i){return arr[i]!=null&&String(arr[i]).trim()!=="";}))continue;
      var name2=String(arr[idx[1]!=null?idx[1]:0]||"");
      if(name2.indexOf("=")>=0){continue;} // ข้ามแถวคำอธิบายรหัส (เก็บแยกเป็น legend ด้านล่าง)
      var obj={};cols.forEach(function(c,k){obj[c]=fixVal(c,arr[idx[k]]);});
      rows.push(obj);
    }
    var legend=[];
    for(var r2=best+1;r2<aoa.length;r2++){var a=aoa[r2];if(!a)continue;var nm=String(a[idx[1]!=null?idx[1]:0]||"").trim();if(nm.indexOf("=")>=0)legend.push(nm);}
    return{cols:cols,rows:rows,title:title,legend:legend};
  }
  function candidateUrls(link){
    link=String(link).trim();
    if(/output=csv|format=csv|\/gviz\//.test(link))return[link];
    var idm=link.match(/\/d\/(?:e\/)?([a-zA-Z0-9\-_]+)/);
    if(!idm)return[];
    var id=idm[1],gidm=link.match(/[?#&]gid=(\d+)/),gid=gidm?gidm[1]:"0";
    return[
      "https://docs.google.com/spreadsheets/d/"+id+"/gviz/tq?tqx=out:csv&gid="+gid,
      "https://docs.google.com/spreadsheets/d/"+id+"/export?format=csv&gid="+gid
    ];
  }
  function cellClass(v){
    var s=String(v).trim().toUpperCase().replace(/\s/g,"");
    if(s==="F")return"cell-f";
    if(s==="R")return"cell-r";
    if(s==="W")return"cell-w";
    if(s==="R,W"||s==="W,R")return"cell-rw";
    if(s===""||s==="-")return"cell-none";
    return"";
  }
  function grpTableHTML(cols,rows,q){
    if(!cols.length)return'<div class="empty"><p>ยังไม่มีข้อมูล Permission group<br>โหลดจาก Google Sheet (ตั้งค่าแชร์เป็นสาธารณะก่อน) หรืออัปโหลดไฟล์ Excel/CSV</p></div>';
    var ql=String(q||"").toLowerCase();
    var fr=rows.filter(function(r){if(!ql)return true;return cols.some(function(c){return String(r[c]==null?"":r[c]).toLowerCase().indexOf(ql)>=0;});});
    var thead="<tr>"+cols.map(function(c){return"<th>"+esc(c)+"</th>";}).join("")+"</tr>";
    var tbody=fr.length?fr.map(function(r){
      return"<tr>"+cols.map(function(c){var v=r[c]==null?"":r[c];var cc=cellClass(v);return'<td'+(cc?' class="'+cc+'"':'')+'>'+esc(v===""||String(v).trim()==="-"?"–":v)+"</td>";}).join("")+"</tr>";
    }).join(""):'<tr><td class="td-empty" colspan="'+cols.length+'">ไม่พบรายการ</td></tr>';
    return'<table class="audit matrix"><thead>'+thead+"</thead><tbody>"+tbody+"</tbody></table>";
  }
  function legendHTML(legend){
    if(!legend||!legend.length)return"";
    return'<div class="grp-legend"><b>คำอธิบายรหัส</b> '+legend.map(function(t){return esc(t);}).join(" · ")+'</div>';
  }
  function accessBucket(v){
    var s=String(v).trim().toUpperCase().replace(/\s/g,"");
    if(s==="F")return"F";
    if(s==="R,W"||s==="W,R")return"RW";
    if(s==="W")return"W";
    if(s==="R")return"R";
    if(s===""||s==="-")return null;
    return"OTHER";
  }
  function groupCols(cols){
    var noCol=null,nameCol=null,dateCol=null;
    cols.forEach(function(c){
      if(noCol===null&&/^no\.?$/i.test(String(c).trim()))noCol=c;
      else if(nameCol===null&&/name|ชื่อ/i.test(c))nameCol=c;
      else if(dateCol===null&&/date|วันที่/i.test(c))dateCol=c;
    });
    if(nameCol===null)nameCol=cols[1]||cols[0];
    var sys=cols.filter(function(c){return c!==noCol&&c!==nameCol&&c!==dateCol;});
    return{noCol:noCol,nameCol:nameCol,dateCol:dateCol,sys:sys};
  }
  function findRow(name,mc){
    if(!mc)return null;
    for(var i=0;i<groups.rows.length;i++)if(String(groups.rows[i][mc.nameCol]||"")===name)return groups.rows[i];
    return null;
  }

  // ── Permission group CRUD (IT only) ─────────────────────
  var UNCAT = "ไม่ระบุหมวด";
  function ensureGroupCols(){
    if(!groups.cols.length){
      groups.cols=["No","Name","Date"];
      groups.rows=[];
    }
  }
  function nextRowNo(mc){
    var max=0;
    groups.rows.forEach(function(r){
      var n=parseInt(String(r[mc.noCol||"No"]||"").replace(/\.0$/,""),10);
      if(!isNaN(n)&&n>max)max=n;
    });
    return max+1;
  }
  function addGroupRow(name){
    ensureGroupCols();
    var mc=groupCols(groups.cols);
    var nm=String(name||"").trim();
    if(!nm){toast("กรุณาใส่ชื่อกลุ่ม");return false;}
    if(findRow(nm,mc)){toast("มีกลุ่มชื่อนี้แล้ว");return false;}
    var row={};
    groups.cols.forEach(function(c){row[c]="";});
    if(mc.noCol) row[mc.noCol]=String(nextRowNo(mc));
    row[mc.nameCol]=nm;
    if(mc.dateCol) row[mc.dateCol]=fmtDate(toISO(new Date()));
    groups.rows.push(row);
    groups.at=new Date().toISOString();
    saveGroups();
    groupSel=nm;
    return true;
  }
  function renameGroupRow(oldName,newName){
    var mc=groupCols(groups.cols);if(!mc.nameCol)return false;
    var nn=String(newName||"").trim();if(!nn||nn===oldName)return false;
    if(findRow(nn,mc)){toast("ชื่อนี้มีอยู่แล้ว");return false;}
    var r=findRow(oldName,mc);if(!r)return false;
    r[mc.nameCol]=nn;
    groups.at=new Date().toISOString();
    if(groupSel===oldName)groupSel=nn;
    saveGroups();
    return true;
  }
  function deleteGroupRow(name){
    var mc=groupCols(groups.cols);if(!mc.nameCol)return false;
    for(var i=0;i<groups.rows.length;i++){
      if(String(groups.rows[i][mc.nameCol]||"")===name){
        groups.rows.splice(i,1);break;
      }
    }
    if(groupSel===name) groupSel=groups.rows.length?String(groups.rows[0][mc.nameCol]||""):null;
    groups.at=new Date().toISOString();
    saveGroups();
    return true;
  }
  function addSysColumn(name,category){
    ensureGroupCols();
    var nm=String(name||"").trim();if(!nm){toast("กรุณาใส่ชื่อสิทธิ์ย่อย");return false;}
    if(groups.cols.indexOf(nm)>=0){toast("มีสิทธิ์ย่อยชื่อนี้แล้ว");return false;}
    groups.cols.push(nm);
    groups.rows.forEach(function(r){if(r[nm]==null)r[nm]="";});
    if(category){
      groups.categories[nm]=category;
      if(category!==UNCAT && groups.catOrder.indexOf(category)<0) groups.catOrder.push(category);
    }
    groups.at=new Date().toISOString();
    saveGroups();
    return true;
  }
  function renameSysColumn(oldName,newName){
    var nn=String(newName||"").trim();if(!nn||nn===oldName)return false;
    if(groups.cols.indexOf(nn)>=0){toast("ชื่อนี้มีอยู่แล้ว");return false;}
    var i=groups.cols.indexOf(oldName);if(i<0)return false;
    groups.cols[i]=nn;
    groups.rows.forEach(function(r){if(oldName in r){r[nn]=r[oldName];delete r[oldName];}});
    if(groups.categories[oldName]!==undefined){groups.categories[nn]=groups.categories[oldName];delete groups.categories[oldName];}
    groups.at=new Date().toISOString();
    saveGroups();
    return true;
  }
  function deleteSysColumn(name){
    var i=groups.cols.indexOf(name);if(i<0)return false;
    groups.cols.splice(i,1);
    groups.rows.forEach(function(r){delete r[name];});
    delete groups.categories[name];
    groups.at=new Date().toISOString();
    saveGroups();
    return true;
  }
  function setSysCategory(name,cat){
    if(!cat||cat===UNCAT){delete groups.categories[name];}
    else{
      groups.categories[name]=cat;
      if(groups.catOrder.indexOf(cat)<0) groups.catOrder.push(cat);
    }
    groups.at=new Date().toISOString();
    saveGroups();
  }
  function addCategory(label){
    var l=String(label||"").trim();if(!l||l===UNCAT)return false;
    if(groups.catOrder.indexOf(l)>=0){toast("มีหมวดนี้แล้ว");return false;}
    groups.catOrder.push(l);
    groups.at=new Date().toISOString();
    saveGroups();
    return true;
  }
  function renameCategory(oldL,newL){
    var nn=String(newL||"").trim();if(!nn||nn===oldL)return false;
    if(groups.catOrder.indexOf(nn)>=0){toast("หมวดนี้มีอยู่แล้ว");return false;}
    var i=groups.catOrder.indexOf(oldL);if(i<0)return false;
    groups.catOrder[i]=nn;
    Object.keys(groups.categories).forEach(function(k){if(groups.categories[k]===oldL)groups.categories[k]=nn;});
    groups.at=new Date().toISOString();
    saveGroups();
    return true;
  }
  function deleteCategory(label){
    var i=groups.catOrder.indexOf(label);if(i<0)return false;
    groups.catOrder.splice(i,1);
    Object.keys(groups.categories).forEach(function(k){if(groups.categories[k]===label)delete groups.categories[k];});
    groups.at=new Date().toISOString();
    saveGroups();
    return true;
  }
  function sysByCategory(mc){
    var bucket={};var order=[];
    function bk(cat){if(!bucket[cat]){bucket[cat]=[];order.push(cat);}return bucket[cat];}
    groups.catOrder.forEach(function(c){bk(c);});
    mc.sys.forEach(function(c){
      var cat=groups.categories[c]||UNCAT;
      bk(cat).push(c);
    });
    if(bucket[UNCAT]) {
      // move uncategorized to end
      var ui=order.indexOf(UNCAT);
      if(ui>=0 && ui<order.length-1){order.splice(ui,1);order.push(UNCAT);}
    }
    return order.map(function(c){return{cat:c,sys:bucket[c]};});
  }
  function allCategoriesForSelect(){
    var list=groups.catOrder.slice();
    if(list.indexOf(UNCAT)<0) list.push(UNCAT);
    return list;
  }
  function easyListHTML(rows,mc,q,sel){
    var ql=String(q||"").toLowerCase();
    var out=rows.map(function(r){return r;}).filter(function(r){return !ql||String(r[mc.nameCol]||"").toLowerCase().indexOf(ql)>=0;});
    if(!out.length)return'<div class="ge-empty">ไม่พบกลุ่ม</div>';
    return out.map(function(r){
      var nm=String(r[mc.nameCol]||"");
      var no=mc.noCol?String(r[mc.noCol]||"").replace(/\.0$/,""):"";
      var cnt=usersForGroup(r,mc).length;
      return'<button class="ge-item'+(nm===sel?" on":"")+'" data-g="'+esc(nm)+'">'+
        (no?'<span class="ge-no">'+esc(no)+'</span>':'')+
        '<span class="ge-nm">'+esc(nm)+'</span>'+
        '<span class="ge-cnt" title="จำนวนคนที่ถือสิทธิ์กลุ่มนี้">'+cnt+'</span></button>';
    }).join("");
  }
  function fmtUpdShort(iso){if(!iso)return"";try{var d=new Date(iso);if(isNaN(d))return"";return fmtDate(toISO(d));}catch(e){return"";}}

  // ── Effective-permission computation (event sourcing) ───
  // Canonical user identity. Prefer AD username (most stable), then hostname+name combo.
  function userKey(r){
    var ad=String((r&&r.adName)||"").trim().toLowerCase();
    if(ad) return "ad:"+ad;
    var ec=String((r&&r.employeeCode)||"").trim().toLowerCase();
    if(ec) return "ec:"+ec;
    var nm=String((r&&r.requesterName)||"").trim().toLowerCase();
    var ua=String((r&&r.userAD)||"").trim().toLowerCase();
    return "u:"+nm+"|"+ua;
  }
  function collectUsers(){
    var map={}, order=[];
    requests.forEach(function(r){
      var k=userKey(r);
      if(!map[k]){
        order.push(k);
        map[k]={key:k,name:r.requesterName||"",nickname:r.nickname||"",adName:r.adName||"",userAD:r.userAD||"",dept:r.department||"",position:r.position||"",employeeCode:r.employeeCode||"",events:0,latestDate:""};
      }
      var u=map[k];
      if(!u.name && r.requesterName) u.name=r.requesterName;
      if(r.adName) u.adName=r.adName;
      if(r.userAD) u.userAD=r.userAD;
      if(r.department) u.dept=r.department;
      if(r.nickname) u.nickname=r.nickname;
      if(r.position) u.position=r.position;
      if(r.employeeCode) u.employeeCode=r.employeeCode;
      (r.items||[]).forEach(function(it){
        u.events++;
        var d=it.date||"";
        if(d>u.latestDate) u.latestDate=d;
      });
    });
    return order.map(function(k){return map[k];});
  }
  function sortEvents(a,b){
    if((a.date||"")!==(b.date||"")) return (a.date||"")<(b.date||"")?-1:1;
    return (a.createdAt||"")<(b.createdAt||"")?-1:1;
  }
  // Returns array of {permission, events:[...], lastAction, lastDate, active, firstAddDate}
  function userTimeline(key){
    var perGroup={};
    requests.forEach(function(r){
      if(userKey(r)!==key) return;
      (r.items||[]).forEach(function(it){
        var p=String(it.permission||"(ไม่ระบุ)").trim();
        if(!perGroup[p]) perGroup[p]=[];
        perGroup[p].push({action:it.action||"add", date:it.date||"", reqId:r.id, reqNo:r.no||0, createdAt:r.createdAt||"", reqUpdatedAt:r.updatedAt||""});
      });
    });
    var result=[];
    Object.keys(perGroup).forEach(function(g){
      var evs=perGroup[g].sort(sortEvents);
      var last=evs[evs.length-1];
      var firstAdd="";
      for(var i=0;i<evs.length;i++){ if(evs[i].action==="add"){ firstAdd=evs[i].date||""; break; } }
      result.push({
        permission:g, events:evs,
        lastAction:last.action, lastDate:last.date,
        active:last.action!=="remove",
        firstAddDate:firstAdd
      });
    });
    result.sort(function(a,b){
      if(a.active!==b.active) return a.active?-1:1;
      return (b.lastDate||"").localeCompare(a.lastDate||"");
    });
    return result;
  }

  function usersForGroup(row,mc){
    // Primary match: request item.permission === group Name (case-insensitive trim).
    // Fallback: if the data uses a system-column header as permission, match via
    // any system column where this group has F/RW/R access.
    var groupKey=row&&mc?String(row[mc.nameCol]||"").trim().toLowerCase():"";
    var sysSet={};
    if(row&&mc&&mc.sys){
      mc.sys.forEach(function(c){
        if(accessBucket(row[c])) sysSet[String(c).trim().toLowerCase()]=c;
      });
    }
    var map={},order=[];
    requests.forEach(function(r){
      (r.items||[]).forEach(function(it){
        var p=String(it.permission||"").trim().toLowerCase();
        var matchedSys=null;
        if(groupKey && p===groupKey){ matchedSys="(ชื่อกลุ่ม)"; }
        else if(sysSet[p]){ matchedSys=sysSet[p]; }
        if(!matchedSys) return;
        var key=userKey(r);
        var cur=map[key];
        if(!cur){
          order.push(key);
          cur=map[key]={ukey:key, name:r.requesterName,nickname:r.nickname,userAD:r.userAD,adName:r.adName,dept:r.department,events:[],systems:{}};
        } else {
          if(r.requesterName) cur.name=r.requesterName;
          if(r.nickname) cur.nickname=r.nickname;
          if(r.userAD) cur.userAD=r.userAD;
          if(r.adName) cur.adName=r.adName;
          if(r.department) cur.dept=r.department;
        }
        cur.events.push({action:it.action||"add",date:it.date||"",createdAt:r.createdAt||"",reqUpdatedAt:r.updatedAt||""});
        cur.systems[matchedSys]=1;
      });
    });
    return order.map(function(k){
      var u=map[k];
      u.events.sort(sortEvents);
      var last=u.events[u.events.length-1];
      u.action=last.action;
      u.date=last.date||"";
      u.upd=last.reqUpdatedAt||last.createdAt||"";
      u.active=last.action!=="remove";
      u.systemsList=Object.keys(u.systems);
      return u;
    }).sort(function(a,b){
      if(a.active!==b.active) return a.active?-1:1;
      return (b.date||"").localeCompare(a.date||"");
    });
  }
  function usersPanelHTML(row,mc){
    var name=row&&mc?String(row[mc.nameCol]||""):"";
    var us=usersForGroup(row,mc);
    if(!us.length)return'<div class="ge-placeholder">ยังไม่มีผู้ใช้ที่ถือสิทธิ์กลุ่ม “'+esc(name)+'”<br><span class="ge-hint">เมื่อมีคำขอที่ Permission = '+esc(name)+' ระบบจะแสดงรายชื่อให้อัตโนมัติ</span></div>';
    var active=us.filter(function(u){return u.active;});
    var removed=us.filter(function(u){return !u.active;});
    var show=groupUsersShow;
    var tabs=
      '<div class="up-statbar">'+
        '<button class="up-stat'+(show==="active"?" on":"")+'" data-up-show="active"><span class="dot ok"></span>ใช้งานอยู่ <b>'+active.length+'</b></button>'+
        '<button class="up-stat'+(show==="removed"?" on":"")+'" data-up-show="removed"><span class="dot bad"></span>ถูกถอนแล้ว <b>'+removed.length+'</b></button>'+
        '<button class="up-stat'+(show==="all"?" on":"")+'" data-up-show="all">ทั้งหมด <b>'+us.length+'</b></button>'+
      '</div>';
    var list = show==="active"?active : show==="removed"?removed : us;
    var pUs=paginate(list, show==="removed"?'upGrpRemoved':'upGrpActive');
    if(!list.length){
      return tabs+'<div class="ge-placeholder">'+(show==="active"?'ไม่มีผู้ใช้ที่ถือสิทธิ์อยู่ในปัจจุบัน':'ไม่มีผู้ใช้ที่ถูกถอนสิทธิ์')+'</div>';
    }
    var body='<table class="user-tb"><thead><tr><th>สถานะ</th><th>ชื่อผู้ใช้</th><th>แผนก</th><th>Hostname</th><th>User AD</th><th>เหตุการณ์ล่าสุด</th><th>วันที่</th><th>จำนวน Event</th><th></th></tr></thead><tbody>'+
      pUs.rows.map(function(u){
        var info=ACTIONS[u.action]||ACTIONS.add;
        var stat=u.active
          ? '<span class="stat-pill ok">● ใช้งาน</span>'
          : '<span class="stat-pill bad">● ถอนแล้ว</span>';
        return'<tr class="'+(u.active?"":"row-removed")+'">'+
          '<td>'+stat+'</td>'+
          '<td>'+esc(u.name)+(u.nickname?' <span class="u-nick">('+esc(u.nickname)+')</span>':'')+'</td>'+
          '<td>'+esc(u.dept||"")+'</td>'+
          '<td class="mono">'+esc(u.userAD||"")+'</td>'+
          '<td class="mono">'+esc(u.adName||"")+'</td>'+
          '<td><span class="chip '+info.cls+'"><b>'+info.glyph+'</b> '+info.label+'</span></td>'+
          '<td class="mono">'+fmtDate(u.date)+'</td>'+
          '<td class="num">'+u.events.length+'</td>'+
          '<td><button class="btn-ghost sm" data-user-tl="'+esc(u.ukey)+'">ดู Timeline</button></td>'+
        '</tr>';
      }).join("")+'</tbody></table>'+pagerHTML(show==="removed"?'upGrpRemoved':'upGrpActive', pUs);
    return tabs+body;
  }
  function levelOf(v){
    var b=accessBucket(v);
    if(b==="F")return"F";
    if(b==="RW"||b==="W")return"RW";
    if(b==="R")return"R";
    return"";
  }
  function codeForLevel(lvl){return lvl==="F"?"F":(lvl==="RW"?"R,W":(lvl==="R"?"R":"-"));}
  function easyDetailHTML(row,mc){
    if(!row)return'<div class="ge-placeholder">เลือกกลุ่มทางซ้ายเพื่อดูสิทธิ์'+(isIT()?' หรือกด <b>+ เพิ่มกลุ่ม</b> ที่แถบทางซ้ายเพื่อสร้างกลุ่มใหม่':'')+'</div>';
    var rawName=String(row[mc.nameCol]||"");
    var total=mc.sys.reduce(function(s,c){return s+(accessBucket(row[c])?1:0);},0);
    var userCount=usersForGroup(row,mc).length;
    var date=mc.dateCol?esc(String(row[mc.dateCol]||"")):"";
    var grpActs = isIT() ?
      '<div class="ge-dacts">'+
        '<button class="btn-ghost sm" data-act="grp-rename">เปลี่ยนชื่อกลุ่ม</button>'+
        '<button class="btn-ghost sm danger" data-act="grp-delete">ลบกลุ่ม</button>'+
      '</div>' : '';
    var html='<div class="ge-dhead"><div class="ge-dname mono">'+esc(rawName)+'</div>'+
      '<div class="ge-dmeta">'+(date?"วันที่ "+date+" · ":"")+"เข้าถึง "+total+" จาก "+mc.sys.length+" ระบบ</div>"+
      grpActs+'</div>'+
      '<div class="ge-modetabs"><button class="mt'+(geMode==="perms"?" on":"")+'" data-mode="perms">สิทธิ์โฟลเดอร์</button>'+
      '<button class="mt'+(geMode==="users"?" on":"")+'" data-mode="users">ผู้ใช้ ('+userCount+')</button></div>';
    if(geMode==="users")return html+usersPanelHTML(row,mc);

    var itActs = isIT() ?
      '<div class="ge-act-grp">'+
        '<button class="btn-ghost sm" data-act="add-cat">+ เพิ่มหมวด</button>'+
        '<button class="btn-ghost sm" data-act="add-sys">+ เพิ่มสิทธิ์ย่อย</button>'+
      '</div>' : '';
    html+='<div class="ge-toolbar"><div class="ge-toggle"><button class="tg'+(geShowAll?"":" on")+'" data-show="some">เฉพาะที่มีสิทธิ์</button>'+
      '<button class="tg'+(geShowAll?" on":"")+'" data-show="all">ทุกโฟลเดอร์</button></div>'+
      itActs+
      '<span class="ge-hint">คลิกช่องเพื่อกำหนดสิทธิ์ (บันทึกอัตโนมัติ)</span></div>';

    var grouped = sysByCategory(mc).map(function(g){
      return {cat:g.cat, sys: geShowAll ? g.sys : g.sys.filter(function(c){return accessBucket(row[c]);})};
    });
    // Hide empty categories in non-IT mode; for IT, also hide empty ones unless cat is in catOrder (so they can still edit them)
    var visible = grouped.filter(function(g){
      if(g.sys.length) return true;
      return isIT() && groups.catOrder.indexOf(g.cat)>=0;
    });
    if(!visible.length){
      html+='<div class="ge-placeholder">กลุ่มนี้ยังไม่มีสิทธิ์ — กด "ทุกโฟลเดอร์" เพื่อกำหนดเพิ่ม'+(isIT()?' หรือ <b>+ เพิ่มสิทธิ์ย่อย</b>':'')+'</div>';
      return html;
    }
    var catOpts = allCategoriesForSelect();
    var extraTh = isIT() ? '<th>หมวด</th><th></th>' : '';
    var colgroup = '<colgroup>'+
      '<col class="cg-name">'+
      '<col class="cg-perm"><col class="cg-perm"><col class="cg-perm">'+
      (isIT() ? '<col class="cg-cat"><col class="cg-acts">' : '')+
    '</colgroup>';
    html += visible.map(function(g){
      var canMutateCat = isIT() && g.cat !== UNCAT;
      var catActions = canMutateCat ?
        '<button class="ico" data-act="cat-rename" data-cat="'+esc(g.cat)+'" title="เปลี่ยนชื่อหมวด">✎</button>'+
        '<button class="ico" data-act="cat-delete" data-cat="'+esc(g.cat)+'" title="ลบหมวด">×</button>' : '';
      var rowsHTML = g.sys.length ? g.sys.map(function(c){
        var lvl=levelOf(row[c]);
        var cb=function(L){return '<input type="checkbox" data-level="'+L+'"'+(lvl===L?" checked":"")+'>';};
        var catSel = isIT() ?
          '<td><select class="cat-sel" data-act="sys-cat" data-sys="'+esc(c)+'">'+
            catOpts.map(function(co){return '<option value="'+esc(co)+'"'+(co===(groups.categories[c]||UNCAT)?" selected":"")+'>'+esc(co)+'</option>';}).join('')+
          '</select></td>' : '';
        var rowActs = isIT() ?
          '<td class="ge-rowacts">'+
            '<button class="ico" data-act="sys-rename" data-sys="'+esc(c)+'" title="แก้ชื่อสิทธิ์ย่อย">✎</button>'+
            '<button class="ico" data-act="sys-delete" data-sys="'+esc(c)+'" title="ลบสิทธิ์ย่อย">×</button>'+
          '</td>' : '';
        return '<tr data-sys="'+esc(c)+'"><td>'+esc(c)+'</td>'+
          '<td>'+cb("F")+'</td><td>'+cb("RW")+'</td><td>'+cb("R")+'</td>'+
          catSel+rowActs+'</tr>';
      }).join("") :
        '<tr><td colspan="'+(isIT()?6:4)+'" class="td-empty">หมวดนี้ยังไม่มีสิทธิ์ย่อย</td></tr>';
      return '<div class="ge-catgrp">'+
        '<div class="ge-cathead"><span class="ge-catname">'+esc(g.cat)+'</span>'+
          '<span class="ge-catcount">('+g.sys.length+')</span>'+
          (canMutateCat?'<span class="ge-catacts">'+catActions+'</span>':'')+
        '</div>'+
        '<table class="perm-cb">'+colgroup+'<thead><tr>'+
          '<th>ระบบ / โฟลเดอร์</th><th>Full Control</th><th>Read &amp; execute</th><th>Read</th>'+
          extraTh+
        '</tr></thead><tbody>'+rowsHTML+'</tbody></table>'+
      '</div>';
    }).join("");
    html+='<div class="ge-note">การจับคู่: Full Control = F · Read &amp; execute = R,W · Read = R</div>';
    return html;
  }
  function renderGroups(){
    var g=groups;
    var mc=g.cols.length?groupCols(g.cols):null;
    if(mc&&(groupSel===null||!findRow(groupSel,mc)))groupSel=g.rows.length?String(g.rows[0][mc.nameCol]||""):null;
    var toggle='<div class="ge-toggle"><button id="vEasy" class="tg'+(groupView==="easy"?" on":"")+'">อ่านง่าย</button>'+
      '<button id="vMatrix" class="tg'+(groupView==="matrix"?" on":"")+'">ตารางเต็ม</button></div>';
    var printBtn=(g.cols.length&&groupView==="matrix")?'<button class="btn-ghost sm" id="grpPrint">พิมพ์ตาราง (แนวนอน)</button>':"";
    var head=
      '<div class="importbar no-print"><div class="ib-text"><b>Permission group</b>'+
      '<span>'+(g.title?esc(g.title):"รายการกลุ่มสิทธิ์")+'</span></div>'+
      '<div class="ib-btns">'+toggle+printBtn+'<button class="btn-ghost sm" id="grpUploadBtn">อัปโหลดไฟล์</button>'+
      '<input type="file" id="grpFile" accept=".xlsx,.xls,.csv" hidden></div></div>'+
      (g.at?'<div class="gs-info no-print">อัปเดตล่าสุด: '+fmtDateTime(g.at)+' · '+g.rows.length+' กลุ่ม · '+(mc?mc.sys.length:0)+' ระบบ</div>':"");
    var body;
    if(!g.cols.length){
      body='<div class="empty"><p>ยังไม่มีข้อมูล Permission group<br>อัปโหลดไฟล์ Excel/CSV เพื่อเริ่มต้น</p></div>';
    }else if(groupView==="matrix"){
      body='<div class="gs-search no-print"><input class="f-input" id="gsq" placeholder="ค้นหาในตาราง…"></div>'+
        '<div class="print-only print-head"><div class="ph-title">'+esc(g.title||"Permission group")+'</div></div>'+
        '<div class="tablewrap matrix-wrap" id="grpTable"></div>'+legendHTML(g.legend);
    }else{
      var addBtn = isIT() ? '<button class="btn-primary sm" id="geAddGrp" type="button">+ เพิ่มกลุ่ม</button>' : '';
      body='<div class="grp-easy"><div class="ge-side">'+
        '<div class="ge-sidebar-top"><input class="f-input" id="geq" placeholder="ค้นหากลุ่ม…">'+addBtn+'</div>'+
        '<div class="ge-list" id="geList"></div></div><div class="ge-detail" id="geDetail"></div></div>';
    }
    content.innerHTML=head+body;
    if(groupView==="matrix"&&g.cols.length)document.getElementById("grpTable").innerHTML=grpTableHTML(g.cols,g.rows,"");
    if(groupView==="easy"&&g.cols.length){
      document.getElementById("geList").innerHTML=easyListHTML(g.rows,mc,"",groupSel);
      document.getElementById("geDetail").innerHTML=easyDetailHTML(findRow(groupSel,mc),mc);
    }
    wireGroups();
  }
  function wireGroups(){
    var gf=document.getElementById("grpFile");
    document.getElementById("grpUploadBtn").onclick=function(){gf.click();};
    gf.onchange=function(e){var f=e.target.files[0];if(f)uploadGroupFile(f);e.target.value="";};
    var ve=document.getElementById("vEasy"),vm=document.getElementById("vMatrix");
    if(ve)ve.onclick=function(){groupView="easy";render();};
    if(vm)vm.onclick=function(){groupView="matrix";render();};
    var gp=document.getElementById("grpPrint");if(gp)gp.onclick=printGroups;
    var q=document.getElementById("gsq");
    if(q)q.addEventListener("input",function(){document.getElementById("grpTable").innerHTML=grpTableHTML(groups.cols,groups.rows,q.value);});
    if(groups.cols.length&&groupView==="easy"){
      var mc=groupCols(groups.cols);
      var geq=document.getElementById("geq");
      if(geq)geq.addEventListener("input",function(){document.getElementById("geList").innerHTML=easyListHTML(groups.rows,mc,geq.value,groupSel);});
      var geAddGrp=document.getElementById("geAddGrp");
      if(geAddGrp) geAddGrp.onclick=function(){
        if(!isIT()) return;
        var nm = prompt("ชื่อกลุ่มใหม่:");
        if(nm===null) return;
        if(addGroupRow(nm)){ toast("เพิ่มกลุ่ม “"+nm.trim()+"” แล้ว"); render(); }
      };
      var geList=document.getElementById("geList");
      if(geList)geList.addEventListener("click",function(e){var b=e.target.closest(".ge-item");if(!b)return;
        groupSel=b.getAttribute("data-g");
        pages.groupUsers=1;
        geList.querySelectorAll(".ge-item").forEach(function(x){x.classList.toggle("on",x===b);});
        document.getElementById("geDetail").innerHTML=easyDetailHTML(findRow(groupSel,mc),mc);});
      var geDetail=document.getElementById("geDetail");
      if(geDetail){
        geDetail.addEventListener("click",function(e){
          var tlBtn=e.target.closest("[data-user-tl]");
          if(tlBtn){
            userPermSel=tlBtn.getAttribute("data-user-tl");
            setView("userperm");
            return;
          }
          var statBtn=e.target.closest("[data-up-show]");
          if(statBtn){
            groupUsersShow=statBtn.getAttribute("data-up-show");
            pages.upGrpActive=1; pages.upGrpRemoved=1;
            geDetail.innerHTML=easyDetailHTML(findRow(groupSel,mc),mc);
            return;
          }
          var actEl=e.target.closest("[data-act]");
          if(actEl){
            if(!isIT()) return;
            var act=actEl.getAttribute("data-act");
            handleGroupCrud(act, actEl, mc);
            return;
          }
          var md=e.target.closest("[data-mode]");
          if(md){geMode=md.getAttribute("data-mode");pages.groupUsers=1;geDetail.innerHTML=easyDetailHTML(findRow(groupSel,mc),mc);return;}
          var tg=e.target.closest("[data-show]");if(!tg)return;
          geShowAll=tg.getAttribute("data-show")==="all";
          geDetail.innerHTML=easyDetailHTML(findRow(groupSel,mc),mc);
        });
        geDetail.addEventListener("change",function(e){
          var sel=e.target.closest('select[data-act="sys-cat"]');
          if(sel){
            if(!isIT()) return;
            var sysName=sel.getAttribute("data-sys");
            setSysCategory(sysName, sel.value);
            toast("ย้าย “"+sysName+"” → "+sel.value);
            geDetail.innerHTML=easyDetailHTML(findRow(groupSel,mc),mc);
            return;
          }
          var cb=e.target.closest('input[type="checkbox"]');if(!cb)return;
          var tr=cb.closest("tr[data-sys]");if(!tr)return;
          var row=findRow(groupSel,mc);if(!row)return;
          var sys=tr.getAttribute("data-sys"),lvl=cb.getAttribute("data-level");
          row[sys]=cb.checked?codeForLevel(lvl):"-";
          saveGroups();
          geDetail.innerHTML=easyDetailHTML(row,mc);
          geList.innerHTML=easyListHTML(groups.rows,mc,document.getElementById("geq")?document.getElementById("geq").value:"",groupSel);
        });
      }
    }
  }
  function handleGroupCrud(act, el, mc){
    var geDetail=document.getElementById("geDetail");
    var geList=document.getElementById("geList");
    var refresh=function(){
      if(geList) geList.innerHTML = easyListHTML(groups.rows, groupCols(groups.cols), document.getElementById("geq")?document.getElementById("geq").value:"", groupSel);
      if(geDetail) geDetail.innerHTML = easyDetailHTML(findRow(groupSel, groupCols(groups.cols)), groupCols(groups.cols));
    };
    if(act==="grp-rename"){
      if(!groupSel) return;
      var nn = prompt("เปลี่ยนชื่อกลุ่ม:", groupSel);
      if(nn===null) return;
      if(renameGroupRow(groupSel, nn)){ toast("เปลี่ยนชื่อกลุ่มแล้ว"); refresh(); }
    } else if(act==="grp-delete"){
      if(!groupSel) return;
      if(!confirm('ลบกลุ่ม "'+groupSel+'" ? การกระทำนี้ลบเฉพาะกลุ่มในตาราง Permission group (ไม่กระทบคำขอเก่า)')) return;
      var oldName=groupSel;
      deleteGroupRow(oldName);
      toast("ลบกลุ่ม “"+oldName+"” แล้ว");
      render();
    } else if(act==="add-cat"){
      var cl = prompt("ชื่อหมวดใหม่ (เช่น Network, File Server, Security):");
      if(cl===null) return;
      if(addCategory(cl)){ toast("เพิ่มหมวด “"+cl.trim()+"”"); refresh(); }
    } else if(act==="cat-rename"){
      var oc = el.getAttribute("data-cat");
      var nc = prompt("เปลี่ยนชื่อหมวด:", oc);
      if(nc===null) return;
      if(renameCategory(oc, nc)){ toast("เปลี่ยนชื่อหมวดแล้ว"); refresh(); }
    } else if(act==="cat-delete"){
      var dc = el.getAttribute("data-cat");
      if(!confirm('ลบหมวด "'+dc+'" ? สิทธิ์ย่อยในหมวดนี้จะกลายเป็น "ไม่ระบุหมวด"')) return;
      deleteCategory(dc);
      toast("ลบหมวด “"+dc+"” แล้ว");
      refresh();
    } else if(act==="add-sys"){
      var sn = prompt("ชื่อสิทธิ์ย่อยใหม่ (เช่น Folder \\\\srv\\Finance):");
      if(sn===null) return;
      var cats = allCategoriesForSelect();
      var listTxt = cats.map(function(c,i){return (i+1)+". "+c;}).join("\n");
      var pick = prompt("เลือกหมวด (ใส่หมายเลข หรือพิมพ์ชื่อใหม่):\n"+listTxt, "1");
      if(pick===null) return;
      var pickCat;
      var num = parseInt(pick,10);
      if(!isNaN(num) && num>=1 && num<=cats.length) pickCat = cats[num-1];
      else pickCat = String(pick).trim() || UNCAT;
      if(addSysColumn(sn, pickCat)){ toast("เพิ่มสิทธิ์ย่อย “"+sn.trim()+"” → "+pickCat); refresh(); }
    } else if(act==="sys-rename"){
      var os = el.getAttribute("data-sys");
      var ns = prompt("เปลี่ยนชื่อสิทธิ์ย่อย:", os);
      if(ns===null) return;
      if(renameSysColumn(os, ns)){ toast("เปลี่ยนชื่อแล้ว"); refresh(); }
    } else if(act==="sys-delete"){
      var ds = el.getAttribute("data-sys");
      if(!confirm('ลบสิทธิ์ย่อย "'+ds+'" จากทุกกลุ่ม?')) return;
      deleteSysColumn(ds);
      toast("ลบสิทธิ์ย่อย “"+ds+"” แล้ว");
      refresh();
    }
  }
  function printGroups(){
    var st=document.createElement("style");st.id="pgstyle";st.textContent="@page{size:A4 landscape;margin:8mm}";
    document.head.appendChild(st);document.body.classList.add("print-groups");
    var done=function(){document.body.classList.remove("print-groups");var e=document.getElementById("pgstyle");if(e)e.remove();window.removeEventListener("afterprint",done);};
    window.addEventListener("afterprint",done);window.print();setTimeout(done,1000);
  }
  function loadFromSheet(link){
    var urls=candidateUrls(link);
    if(!urls.length){toast("ลิงก์ Google Sheet ไม่ถูกต้อง");return;}
    toast("กำลังโหลดจาก Google Sheet…");
    tryFetch(urls,0,link);
  }
  function tryFetch(urls,i,link){
    if(i>=urls.length){toast("โหลดไม่สำเร็จ — ลองใช้ปุ่มอัปโหลดไฟล์แทน (ดูคำแนะนำ)");return;}
    fetch(urls[i]).then(function(r){if(!r.ok)throw 0;return r.text();}).then(function(csv){
      if(/^\s*</.test(csv))throw 0;
      var wb=XLSX.read(csv,{type:"string"}),ws=wb.Sheets[wb.SheetNames[0]];
      var aoa=XLSX.utils.sheet_to_json(ws,{header:1,defval:"",raw:false});
      var d=ingestAOA(aoa);
      if(!d.rows.length)throw 0;
      groups={url:link,at:new Date().toISOString(),title:d.title,legend:d.legend,cols:d.cols,rows:d.rows};saveGroups();
      toast("โหลดสำเร็จ "+d.rows.length+" กลุ่ม");render();
    }).catch(function(){tryFetch(urls,i+1,link);});
  }
  function uploadGroupFile(file){
    file.arrayBuffer().then(function(buf){
      var wb=XLSX.read(new Uint8Array(buf),{type:"array",cellDates:true}),ws=wb.Sheets[wb.SheetNames[0]];
      var aoa=XLSX.utils.sheet_to_json(ws,{header:1,defval:"",raw:false});
      var d=ingestAOA(aoa);
      if(!d.rows.length){toast("ไฟล์ไม่มีข้อมูล");return;}
      groups={url:groups.url||"",at:new Date().toISOString(),title:d.title,legend:d.legend,cols:d.cols,rows:d.rows};saveGroups();
      toast("อัปโหลดสำเร็จ "+d.rows.length+" กลุ่ม");render();
    }).catch(function(){toast("อ่านไฟล์ไม่สำเร็จ รองรับ .xlsx, .xls, .csv");});
  }

  // ── REPORT ──────────────────────────────────────────────
  function renderReport(){
    var rows=flatRows();
    content.innerHTML=
      updatedLineHTML()+
      '<div class="cards no-print">'+
        statHTML(requests.length,"คำขอทั้งหมด","")+
        statHTML(rows.length,"รายการสิทธิ์","")+
        statHTML(countAct(rows,"add"),"เพิ่มสิทธิ์","act-add")+
        statHTML(countAct(rows,"remove"),"ถอนสิทธิ์","act-remove")+
        statHTML(countAct(rows,"redefine"),"กำหนดใหม่","act-redefine")+
      '</div>'+
      '<div class="filters no-print">'+
        '<input class="f-input" id="fq" placeholder="ค้นหา: ชื่อ, Hostname, User AD, สิทธิ์, แผนก…">'+
        '<select class="f-input" id="fact"><option value="all">ทุกการกระทำ</option><option value="add">เพิ่มสิทธิ์</option><option value="remove">ถอนสิทธิ์</option><option value="redefine">กำหนดใหม่</option></select>'+
        '<label class="rng">จาก <input type="date" class="f-input" id="ffrom"></label>'+
        '<label class="rng">ถึง <input type="date" class="f-input" id="fto"></label>'+
        '<button class="btn-ghost" id="csvBtn">ดาวน์โหลด CSV</button>'+
        '<button class="btn-ghost" id="previewBtn">ดูตัวอย่าง (Preview)</button>'+
        '<button class="btn-primary" id="printBtn">พิมพ์ / PDF</button>'+
      '</div>'+
      '<div class="print-only print-head"><div class="ph-title">รายงานการขอเพิ่ม–ถอนสิทธิ์การใช้งานระบบสารสนเทศ</div>'+
      '<div class="ph-sub">ออกรายงานวันที่ '+fmtDate(todayISO())+' · จำนวน <span id="pCount">'+rows.length+'</span> รายการ</div></div>'+
      '<div class="tablewrap"><table class="audit"><thead><tr>'+
      '<th>คำขอ</th><th>ผู้ร้องขอ</th><th>Hostname</th><th>User AD</th><th>แผนก</th><th>Permission</th><th>การกระทำ</th><th>วันที่</th><th>ผู้อนุมัติ</th>'+
      '</tr></thead><tbody id="auditBody"></tbody></table></div>'+
      '<div id="auditPager" class="no-print"></div>';
    wireReport();
    updateTable();
  }
  function statHTML(n,label,cls){return '<div class="stat '+cls+'"><div class="stat-n">'+n+'</div><div class="stat-l">'+label+'</div></div>';}
  function countAct(rows,a){return rows.filter(function(r){return r.action===a;}).length;}
  function currentFiltered(){
    var rows=flatRows();
    var q=(document.getElementById("fq").value||"").trim().toLowerCase();
    var act=document.getElementById("fact").value;
    var from=document.getElementById("ffrom").value;
    var to=document.getElementById("fto").value;
    return rows.filter(function(r){
      if(act!=="all"&&r.action!==act)return false;
      if(from&&(r.date||"")<from)return false;
      if(to&&(r.date||"")>to)return false;
      if(q){var hay=[r.requesterName,r.userAD,r.adName,r.permission,r.department,r.employeeCode].join(" ").toLowerCase();if(hay.indexOf(q)<0)return false;}
      return true;
    });
  }
  function updateTable(){
    var rows=currentFiltered(),tb=document.getElementById("auditBody");
    var p=paginate(rows,'report');
    if(!rows.length){tb.innerHTML='<tr><td colspan="9" class="td-empty">ไม่พบรายการตามเงื่อนไข</td></tr>';}
    else{
      tb.innerHTML=p.rows.map(function(r){
        var info=ACTIONS[r.action]||ACTIONS.add;
        return '<tr><td class="mono">#'+pad4(r.no)+'</td>'+
          '<td><span class="name-link" data-person="'+esc(r.requesterName)+'" data-ad="'+esc(r.userAD||"")+'">'+esc(r.requesterName)+'</span>'+(r.nickname?' ('+esc(r.nickname)+')':'')+'</td>'+
          '<td class="mono">'+esc(r.userAD)+'</td><td class="mono">'+esc(r.adName)+'</td><td>'+esc(r.department)+'</td>'+
          '<td class="mono"><span class="perm-link" data-perm="'+esc(r.permission)+'">'+esc(r.permission)+'</span></td>'+
          '<td><span class="chip '+info.cls+'"><b>'+info.glyph+'</b> '+info.label+'</span></td>'+
          '<td class="mono">'+fmtDate(r.date)+'</td>'+
          '<td>'+esc(r.approverName)+'</td></tr>';
      }).join("");
    }
    var pg=document.getElementById("auditPager"); if(pg) pg.innerHTML=rows.length?pagerHTML('report',p):"";
    var pc=document.getElementById("pCount");if(pc)pc.textContent=rows.length;
  }
  function wireReport(){
    ["fq","fact","ffrom","fto"].forEach(function(id){
      var el=document.getElementById(id);
      el.addEventListener("input",function(){ pages.report=1; updateTable(); });
      el.addEventListener("change",function(){ pages.report=1; updateTable(); });
    });
    document.getElementById("csvBtn").onclick=exportCSV;
    document.getElementById("previewBtn").onclick=openPreview;
    document.getElementById("printBtn").onclick=function(){window.print();};
    document.getElementById("auditBody").addEventListener("click",function(e){
      var nl=e.target.closest("[data-person]");if(nl){openPerson(nl.getAttribute("data-person"),nl.getAttribute("data-ad"));return;}
      var pl=e.target.closest("[data-perm]");if(pl)gotoGroup(pl.getAttribute("data-perm"));
    });
  }
  function personPerms(name,ad){
    var map={},order=[];
    requests.forEach(function(r){
      if(String(r.requesterName||"")!==name)return;
      if(String(r.userAD||"")!==String(ad||""))return;
      (r.items||[]).forEach(function(it){
        var k=String(it.permission||"").toLowerCase();if(!k)return;
        var cur=map[k];
        if(!cur){order.push(k);map[k]={permission:it.permission,action:it.action,date:it.date||"",upd:r.updatedAt||""};}
        else if((it.date||"")>=cur.date){cur.action=it.action;cur.date=it.date||"";cur.upd=r.updatedAt||"";}
      });
    });
    return order.map(function(k){return map[k];}).sort(function(a,b){return (b.date||"").localeCompare(a.date||"");});
  }
  function openPerson(name,ad){
    var perms=personPerms(name,ad),info={dept:"",nickname:"",userAD:ad||"",adName:""};
    for(var i=0;i<requests.length;i++){var r=requests[i];if(String(r.requesterName||"")===name&&String(r.userAD||"")===String(ad||"")){info.dept=r.department||"";info.nickname=r.nickname||"";info.userAD=r.userAD||"";info.adName=r.adName||"";break;}}
    document.getElementById("pmTitle").textContent=name+(info.nickname?" ("+info.nickname+")":"");
    var rowsH=perms.length?perms.map(function(p){var inf=ACTIONS[p.action]||ACTIONS.add;var ud=fmtUpdShort(p.upd);
      return'<tr><td><span class="perm-link mono" data-perm="'+esc(p.permission)+'">'+esc(p.permission)+'</span></td>'+
        '<td><span class="chip '+inf.cls+'"><b>'+inf.glyph+'</b> '+inf.label+'</span></td>'+
        '<td class="mono">'+fmtDate(p.date)+'</td><td class="mono'+(ud?" u-upd":"")+'">'+(ud||"—")+'</td></tr>';
    }).join(""):'<tr><td colspan="4" class="td-empty">ยังไม่มีสิทธิ์</td></tr>';
    document.getElementById("pmBody").innerHTML=
      '<div class="pm-meta">'+esc([info.dept,(info.userAD?"Hostname "+info.userAD:""),(info.adName?"AD "+info.adName:"")].filter(Boolean).join(" · "))+'</div>'+
      '<div class="pm-count">ถือ '+perms.length+' สิทธิ์</div>'+
      '<table class="user-tb"><thead><tr><th>Permission</th><th>การกระทำ</th><th>วันที่</th><th>วันที่อัพเดท</th></tr></thead><tbody>'+rowsH+'</tbody></table>';
    document.getElementById("personModal").classList.add("show");
  }
  function closePerson(){document.getElementById("personModal").classList.remove("show");}
  document.getElementById("pmClose").onclick=closePerson;
  document.getElementById("personModal").addEventListener("click",function(e){
    if(e.target.id==="personModal"){closePerson();return;}
    var pl=e.target.closest("[data-perm]");if(pl){closePerson();gotoGroup(pl.getAttribute("data-perm"));}
  });
  function resolveGroupName(name,mc){
    if(!mc)return null;
    var t=String(name||"").trim().toLowerCase();
    if(!t)return null;
    for(var i=0;i<groups.rows.length;i++){
      var n=String(groups.rows[i][mc.nameCol]||"");
      if(n.trim().toLowerCase()===t)return n;
    }
    return null;
  }
  function gotoGroup(name){
    view="groups";groupView="easy";
    var mc=groups.cols.length?groupCols(groups.cols):null;
    var canon=resolveGroupName(name,mc);
    if(canon)groupSel=canon;
    else toast("ไม่พบกลุ่ม “"+name+"” ใน Permission group");
    render();
  }

  // ── AUDIT LOG (server-side) ─────────────────────────────
  var AUDIT_LABELS = {
    'auth.login':         {th:'เข้าระบบสำเร็จ',          cls:'act-add'},
    'auth.logout':        {th:'ออกจากระบบ',              cls:'act-redefine'},
    'auth.login_failed':  {th:'เข้าระบบไม่สำเร็จ',         cls:'act-remove'},
    'auth.login_blocked': {th:'ถูกล็อก (เกิน 5 ครั้ง)',    cls:'act-remove'},
    'kv.put':             {th:'บันทึกข้อมูล',              cls:'act-add'},
    'kv.delete':          {th:'ลบข้อมูล',                 cls:'act-remove'}
  };
  function actionBadge(a){
    var m = AUDIT_LABELS[a] || {th:a, cls:''};
    return '<span class="chip '+m.cls+'">'+esc(m.th)+'</span>';
  }
  function fmtAuditDetail(d){
    if(!d) return '';
    try {
      var o = (typeof d === 'string') ? JSON.parse(d) : d;
      if(o && typeof o === 'object'){
        return Object.keys(o).map(function(k){ return esc(k)+': '+esc(String(o[k])); }).join(' · ');
      }
    } catch(e){}
    return esc(String(d));
  }
  function renderAuditLog(){
    if(!isIT()){ view="form"; render(); return; }
    var offset = (pages.auditlog-1) * PAGE_SIZE;
    var url = '/api/audit?limit='+PAGE_SIZE+'&offset='+offset
            + (auditQuery ? '&q='+encodeURIComponent(auditQuery) : '');

    content.innerHTML =
      '<div class="page-head"><h2>Audit Log ระบบ</h2>'+
        '<p>บันทึกเหตุการณ์ทั้งหมดที่ฝั่ง server (login / logout / บันทึกข้อมูล / ลบข้อมูล / ล็อกบัญชี)</p>'+
      '</div>'+
      '<div class="toolbar">'+
        '<input id="auditQ" class="f-input" type="search" placeholder="ค้นหา: ชื่อผู้ใช้ / action / target / IP / detail" value="'+esc(auditQuery)+'" style="max-width:420px;">'+
        '<button class="btn-ghost" id="auditReload" type="button">รีเฟรช</button>'+
        '<span class="f-note" id="auditStatus" style="margin-left:auto;">กำลังโหลด…</span>'+
      '</div>'+
      '<div class="tablewrap"><table class="audit"><thead><tr>'+
        '<th style="width:170px;">เวลา</th>'+
        '<th style="width:130px;">IP</th>'+
        '<th style="width:140px;">ผู้ใช้</th>'+
        '<th style="width:70px;">Role</th>'+
        '<th style="width:170px;">การกระทำ</th>'+
        '<th style="width:200px;">เป้าหมาย</th>'+
        '<th>รายละเอียด</th>'+
      '</tr></thead><tbody id="auditBody"><tr><td colspan="7" class="td-empty">กำลังโหลด…</td></tr></tbody></table></div>'+
      '<div id="auditPager"></div>';

    var qEl = document.getElementById("auditQ");
    if(qEl){
      var qTimer;
      qEl.addEventListener("input", function(){
        clearTimeout(qTimer);
        qTimer = setTimeout(function(){
          auditQuery = qEl.value.trim();
          pages.auditlog = 1;
          renderAuditLog();
        }, 250);
      });
    }
    var rl = document.getElementById("auditReload");
    if(rl) rl.onclick = function(){ renderAuditLog(); };

    var fetcher = (window.Store && window.Store.fetch) ? window.Store.fetch : fetch;
    fetcher(url).then(function(r){ return r.json(); }).then(function(data){
      auditTotal = data.total || 0;
      var rows = data.rows || [];
      var body = document.getElementById("auditBody");
      var pager = document.getElementById("auditPager");
      var status = document.getElementById("auditStatus");
      if(!body) return;
      if(!rows.length){
        body.innerHTML = '<tr><td colspan="7" class="td-empty">'+(auditQuery?'ไม่พบรายการที่ตรงกับการค้นหา':'ยังไม่มีบันทึก')+'</td></tr>';
      } else {
        body.innerHTML = rows.map(function(r){
          return '<tr>'+
            '<td class="mono">'+esc(fmtDateTime(r.at))+'</td>'+
            '<td class="mono">'+esc(r.ip||'-')+'</td>'+
            '<td>'+esc(r.username||'-')+'</td>'+
            '<td>'+esc(r.role||'-')+'</td>'+
            '<td>'+actionBadge(r.action)+'</td>'+
            '<td class="mono">'+esc(r.target||'')+'</td>'+
            '<td class="audit-detail">'+fmtAuditDetail(r.detail)+'</td>'+
          '</tr>';
        }).join('');
      }
      if(pager){
        var pageInfo = {
          page: pages.auditlog,
          pages: Math.max(1, Math.ceil(auditTotal/PAGE_SIZE)),
          total: auditTotal,
          start: offset
        };
        pager.innerHTML = auditTotal ? pagerHTML('auditlog', pageInfo) : '';
      }
      if(status) status.textContent = 'ทั้งหมด '+auditTotal+' รายการ';
      var cAud = document.getElementById("cAud");
      if(cAud) cAud.textContent = auditTotal;
    }).catch(function(e){
      var body = document.getElementById("auditBody");
      if(body) body.innerHTML = '<tr><td colspan="7" class="td-empty">โหลดไม่สำเร็จ: '+esc(e&&e.message||e)+'</td></tr>';
      var status = document.getElementById("auditStatus");
      if(status) status.textContent = 'ผิดพลาด';
    });
  }

  function exportCSV(){
    var rows=currentFiltered();
    var head=["เลขที่คำขอ","ชื่อผู้ร้องขอ","ชื่อเล่น","ตำแหน่ง","Hostname","User AD","แผนก/ฝ่าย","รหัสพนักงาน","ผู้อนุมัติ","Permission","การกระทำ","วันที่"];
    var q=function(v){return '"'+String(v==null?"":v).replace(/"/g,'""')+'"';};
    var lines=rows.map(function(r){
      var info=ACTIONS[r.action]||ACTIONS.add;
      return[pad4(r.no),r.requesterName,r.nickname,r.position,r.userAD,r.adName,r.department,r.employeeCode,r.approverName,r.permission,info.label,fmtDate(r.date)].map(q).join(",");
    });
    var csv="\ufeff"+[head.map(q).join(",")].concat(lines).join("\r\n");
    var blob=new Blob([csv],{type:"text/csv;charset=utf-8;"});
    var url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download="audit-permissions-"+todayISO()+".csv";a.click();URL.revokeObjectURL(url);
  }

  // ── PREVIEW (on-screen report) ──────────────────────────
  function previewRowsHTML(rows){
    if(!rows.length)return'<tr><td colspan="9" class="td-empty">ไม่พบรายการตามเงื่อนไข</td></tr>';
    return rows.map(function(r){
      var info=ACTIONS[r.action]||ACTIONS.add;
      return'<tr><td class="mono">#'+pad4(r.no)+'</td>'+
        '<td>'+esc(r.requesterName)+(r.nickname?' ('+esc(r.nickname)+')':'')+'</td>'+
        '<td class="mono">'+esc(r.userAD)+'</td><td class="mono">'+esc(r.adName)+'</td><td>'+esc(r.department)+'</td>'+
        '<td class="mono">'+esc(r.permission)+'</td>'+
        '<td><span class="chip '+info.cls+'"><b>'+info.glyph+'</b> '+info.label+'</span></td>'+
        '<td class="mono">'+fmtDate(r.date)+'</td>'+
        '<td>'+esc(r.approverName)+'</td></tr>';
    }).join("");
  }
  function openPreview(){
    var rows=currentFiltered();
    var chip=function(n,label,cls){return'<span class="pv-chip '+cls+'"><b>'+n+'</b> '+label+'</span>';};
    document.getElementById("pvPage").innerHTML=
      '<div class="pv-doc">'+
      '<div class="pv-head"><div class="pv-crest">AC</div><div>'+
      '<div class="pv-org">เอกสารขอเพิ่ม–ถอนสิทธิ์การใช้งานระบบสารสนเทศ</div>'+
      '<div class="pv-sub">รายงานสำหรับตรวจสอบ · Access Permission Audit Report</div></div></div>'+
      '<div class="pv-meta">ออกรายงานวันที่ '+fmtDate(todayISO())+' · จำนวน '+rows.length+' รายการ</div>'+
      '<div class="pv-chips">'+
        chip(rows.length,"รายการสิทธิ์","")+
        chip(countAct(rows,"add"),"เพิ่มสิทธิ์","act-add")+
        chip(countAct(rows,"remove"),"ถอนสิทธิ์","act-remove")+
        chip(countAct(rows,"redefine"),"กำหนดใหม่","act-redefine")+
      '</div>'+
      '<table class="audit"><thead><tr><th>คำขอ</th><th>ผู้ร้องขอ</th><th>Hostname</th><th>User AD</th><th>แผนก</th><th>Permission</th><th>การกระทำ</th><th>วันที่</th><th>ผู้อนุมัติ</th></tr></thead>'+
      '<tbody>'+previewRowsHTML(rows)+'</tbody></table>'+
      '<div class="pv-foot">ผู้ออกรายงาน ......................................   ผู้ตรวจสอบ ......................................</div>'+
      '</div>';
    document.getElementById("previewOverlay").classList.add("show");
  }
  document.getElementById("pvClose").onclick=function(){document.getElementById("previewOverlay").classList.remove("show");};
  document.getElementById("pvPrint").onclick=function(){document.getElementById("previewOverlay").classList.remove("show");window.print();};
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){document.getElementById("previewOverlay").classList.remove("show");document.getElementById("personModal").classList.remove("show");}});

  // ── REVIEW (permission re-audit) + HISTORY ─────────────
  function loadReviews(){try{var r=localStorage.getItem(RKEY);return r?JSON.parse(r):[];}catch(e){return[];}}
  function saveReviews(){try{localStorage.setItem(RKEY,JSON.stringify(reviews));}catch(e){toast("บันทึกรอบทบทวนไม่สำเร็จ");}}
  function loadHistory(){try{var r=localStorage.getItem(HKEY);return r?JSON.parse(r):[];}catch(e){return[];}}
  function saveHistory(){try{localStorage.setItem(HKEY,JSON.stringify(history));}catch(e){}}
  function logHistory(entry){
    history.unshift(Object.assign({
      id:"h_"+Date.now()+"_"+Math.floor(Math.random()*1000),
      at:new Date().toISOString()
    }, entry));
    saveHistory();
  }
  function reviewPendingCount(){
    if(!session) return 0;
    if(isUser()) return reviews.filter(function(r){
      return r.assignedTo && r.assignedTo.username===session.username && r.status==="pending";
    }).length;
    if(isIT()) return reviews.filter(function(r){
      return r.status==="pending" || r.status==="submitted";
    }).length;
    return 0;
  }
  function reviewStatusBadge(s,changed){
    if(s==="pending")   return '<span class="u-badge user">รอผู้ใช้</span>';
    if(s==="submitted") return '<span class="u-badge it">รอ IT ปรับปรุง'+(changed?' ('+changed+')':'')+'</span>';
    if(s==="applied")   return '<span class="u-badge">ปรับปรุงแล้ว</span>';
    if(s==="approved")  return '<span class="u-badge user">อนุมัติแล้ว</span>';
    return esc(s||"");
  }
  function findReview(id){ return reviews.filter(function(r){return r.id===id;})[0]||null; }
  function getDecision(rv, requestId, idx){
    return (rv.decisions||[]).filter(function(d){return d.requestId===requestId && d.idx===idx;})[0]||null;
  }
  function snapItemCount(rv){
    return (rv.snapshot||[]).reduce(function(s,p){return s+(p.items?p.items.length:0);},0);
  }

  function renderReview(){
    if(reviewSel){ renderReviewDetail(reviewSel); return; }
    if(isIT())   renderReviewIT();
    else if(isUser()) renderReviewUser();
    else content.innerHTML='<section class="card"><p class="empty">กรุณาเข้าสู่ระบบ</p></section>';
  }

  function renderReviewIT(){
    var allRows = reviews.slice().sort(function(a,b){return (b.createdAt||"").localeCompare(a.createdAt||"");});
    var p = paginate(allRows, 'reviewIT');
    var html = p.rows.map(function(rv,i){
      var changedCount = (rv.decisions||[]).filter(function(d){return d.action!=="keep";}).length;
      return '<tr>'+
        '<td class="u-no">'+(p.start+i+1)+'</td>'+
        '<td>'+esc(rv.title)+'<div class="rv-sub">สร้าง '+fmtDateTime(rv.createdAt)+'</div></td>'+
        '<td>'+esc((rv.assignedTo&&rv.assignedTo.name)||"—")+'<div class="rv-sub">'+esc((rv.assignedTo&&rv.assignedTo.department)||"")+'</div></td>'+
        '<td class="num">'+snapItemCount(rv)+'</td>'+
        '<td class="num">'+esc(rv.dueDate||"—")+'</td>'+
        '<td>'+reviewStatusBadge(rv.status,changedCount)+'</td>'+
        '<td class="u-actions">'+
          '<button class="btn-ghost sm" data-rv-open="'+esc(rv.id)+'">ดู</button> '+
          '<button class="btn-ghost sm danger" data-rv-del="'+esc(rv.id)+'">ลบ</button>'+
        '</td>'+
      '</tr>';
    }).join("");

    content.innerHTML =
      '<section class="card">'+
        '<div class="card-head"><h2>ทบทวนสิทธิ์ประจำงวด</h2>'+
        '<p>สร้างรอบทบทวนเพื่อให้หัวหน้า/ผู้จัดการแต่ละแผนกตรวจสอบและยืนยันสิทธิ์ของพนักงาน</p></div>'+
        '<div class="u-toolbar">'+
          '<div style="display:flex;gap:8px">'+
            '<button class="btn-primary sm" id="rvAddBtn">+ สร้างรอบทบทวน</button>'+
            '<button class="btn-ghost sm" id="rvHistBtn">ประวัติการแก้ไขสิทธิ์ ('+history.length+')</button>'+
          '</div>'+
          '<div class="u-count">ทั้งหมด '+allRows.length+' รอบ</div>'+
        '</div>'+
        (allRows.length
          ? '<table class="utbl"><thead><tr>'+
              '<th class="u-no">#</th><th>หัวเรื่อง</th><th>ผู้ทบทวน</th><th>จำนวนสิทธิ์</th><th>กำหนดส่ง</th><th>สถานะ</th><th class="u-actions">จัดการ</th>'+
            '</tr></thead><tbody>'+html+'</tbody></table>'+pagerHTML('reviewIT',p)
          : '<p class="empty">ยังไม่มีรอบทบทวน — กด "สร้างรอบทบทวน" เพื่อเริ่ม</p>')+
      '</section>';

    document.getElementById("rvAddBtn").onclick = openReviewCreator;
    document.getElementById("rvHistBtn").onclick = renderHistoryModal;
    Array.prototype.forEach.call(content.querySelectorAll("[data-rv-open]"),function(b){
      b.onclick=function(){ reviewSel=b.getAttribute("data-rv-open"); render(); };
    });
    Array.prototype.forEach.call(content.querySelectorAll("[data-rv-del]"),function(b){
      b.onclick=function(){
        var id=b.getAttribute("data-rv-del");
        if(!confirm("ลบรอบทบทวนนี้? (ประวัติที่บันทึกแล้วจะคงอยู่)")) return;
        reviews=reviews.filter(function(r){return r.id!==id;});
        saveReviews(); toast("ลบรอบทบทวนแล้ว"); render();
      };
    });
  }

  function renderReviewUser(){
    var mine = reviews
      .filter(function(r){return r.assignedTo && r.assignedTo.username===session.username;})
      .sort(function(a,b){
        // pending ขึ้นก่อน, แล้วเรียงตามวันสร้างใหม่สุด
        if((a.status==="pending")!==(b.status==="pending")) return a.status==="pending"?-1:1;
        return (b.createdAt||"").localeCompare(a.createdAt||"");
      });
    var p = paginate(mine, 'reviewUser');
    var rows = p.rows.map(function(rv,i){
      return '<tr>'+
        '<td class="u-no">'+(p.start+i+1)+'</td>'+
        '<td>'+esc(rv.title)+'<div class="rv-sub">สร้าง '+fmtDateTime(rv.createdAt)+'</div></td>'+
        '<td class="num">'+snapItemCount(rv)+'</td>'+
        '<td class="num">'+esc(rv.dueDate||"—")+'</td>'+
        '<td>'+reviewStatusBadge(rv.status)+'</td>'+
        '<td class="u-actions"><button class="'+(rv.status==="pending"?"btn-primary":"btn-ghost")+' sm" data-rv-open="'+esc(rv.id)+'">'+(rv.status==="pending"?"ทบทวน":"ดู")+'</button></td>'+
      '</tr>';
    }).join("");
    content.innerHTML =
      '<section class="card">'+
        '<div class="card-head"><h2>รายการทบทวนสิทธิ์ของฉัน</h2>'+
        '<p>ตรวจสอบสิทธิ์ของพนักงานในความรับผิดชอบ — ติ๊ก "ถูกต้อง" หรือ "ขอแก้ไข" ในแต่ละรายการ</p></div>'+
        (mine.length
          ? '<table class="utbl"><thead><tr>'+
              '<th class="u-no">#</th><th>หัวเรื่อง</th><th>จำนวนสิทธิ์</th><th>กำหนดส่ง</th><th>สถานะ</th><th></th>'+
            '</tr></thead><tbody>'+rows+'</tbody></table>'+pagerHTML('reviewUser',p)
          : '<p class="empty">ยังไม่มีรายการให้ทบทวน</p>')+
      '</section>';
    Array.prototype.forEach.call(content.querySelectorAll("[data-rv-open]"),function(b){
      b.onclick=function(){ reviewSel=b.getAttribute("data-rv-open"); render(); };
    });
  }

  function openReviewCreator(){
    var allUsers = (window.Auth && window.Auth.list) ? window.Auth.list() : [];
    // จัดกลุ่มสิทธิ์ตาม "แผนก"
    var NO_DEPT = "(ไม่ระบุแผนก)";
    var deptMap = {};
    requests.forEach(function(r){
      if(!r.items || !r.items.length) return;
      var dept = (r.department||"").trim() || NO_DEPT;
      if(!deptMap[dept]) deptMap[dept] = {
        dept:dept, requestIds:[], people:{}, itemCount:0
      };
      deptMap[dept].requestIds.push(r.id);
      deptMap[dept].itemCount += r.items.length;
      var pkey = norm(r.requesterName)+"|"+norm(r.userAD);
      deptMap[dept].people[pkey] = r.requesterName||"(ไม่ระบุชื่อ)";
    });
    var depts = Object.keys(deptMap).map(function(k){
      var d = deptMap[k];
      d.personCount = Object.keys(d.people).length;
      return d;
    }).sort(function(a,b){return a.dept.localeCompare(b.dept);});

    var userOpts = allUsers.map(function(u){
      return '<option value="'+esc(u.username)+'" data-dept="'+esc(u.department||"")+'">'+
        esc(u.name)+(u.department?' · '+esc(u.department):'')+' ['+(u.role==="it"?"IT":"User")+']'+
      '</option>';
    }).join("");

    var deptRows = depts.map(function(d,i){
      return '<label class="rv-pcheck">'+
        '<input type="checkbox" data-dx="'+i+'" data-dept="'+esc(d.dept)+'">'+
        '<span><b>'+esc(d.dept)+'</b>'+
        ' <em>('+d.personCount+' คน · '+d.itemCount+' สิทธิ์)</em></span>'+
      '</label>';
    }).join("");

    var formHTML =
      '<div class="u-form" id="rvForm">'+
        '<h3>สร้างรอบทบทวนสิทธิ์</h3>'+
        '<div class="grid">'+
          '<label class="field"><span class="f-label">หัวเรื่อง</span>'+
            '<input id="rv_title" class="f-input" value="ทบทวนสิทธิ์ '+(new Date().getFullYear()+543)+' รอบที่ 1"></label>'+
          '<label class="field"><span class="f-label">ผู้ทบทวน (Role User)</span>'+
            '<select id="rv_who" class="f-input">'+userOpts+'</select></label>'+
          '<label class="field"><span class="f-label">กำหนดส่ง</span>'+
            '<input id="rv_due" type="date" class="f-input"></label>'+
        '</div>'+
        '<div class="sec-label" style="margin-top:14px">แผนกที่ต้องการให้ทบทวนสิทธิ์ '+
          '<button class="btn-ghost sm" id="rv_pall" type="button">เลือกทั้งหมด</button></div>'+
        '<div class="u-hint">ระบบจะรวมสิทธิ์ของทุกคนในแผนกที่เลือกอัตโนมัติ</div>'+
        '<div class="rv-plist" id="rv_plist">'+(deptRows||'<p class="empty" style="margin:0">ไม่มีคำขอในระบบ</p>')+'</div>'+
        '<div class="u-actions-row">'+
          '<button class="btn-ghost" id="rvCancel">ยกเลิก</button>'+
          '<button class="btn-primary" id="rvSubmit">สร้างและส่งให้ผู้ทบทวน</button>'+
        '</div>'+
      '</div>';

    var card = content.querySelector(".card");
    card.insertAdjacentHTML("afterbegin", formHTML);

    function autoselectByDept(){
      var sel = document.getElementById("rv_who");
      var opt = sel.options[sel.selectedIndex];
      var dept = opt ? opt.getAttribute("data-dept") : "";
      Array.prototype.forEach.call(document.querySelectorAll("#rv_plist [data-dx]"), function(cb){
        cb.checked = !!(dept && cb.getAttribute("data-dept")===dept);
      });
    }
    var sel = document.getElementById("rv_who");
    sel.onchange = autoselectByDept;
    if(sel.value) autoselectByDept();

    document.getElementById("rv_pall").onclick=function(){
      var boxes = document.querySelectorAll("#rv_plist [data-dx]");
      var allOn = Array.prototype.every.call(boxes,function(c){return c.checked;});
      Array.prototype.forEach.call(boxes,function(c){c.checked=!allOn;});
    };
    document.getElementById("rvCancel").onclick = function(){ render(); };
    document.getElementById("rvSubmit").onclick = function(){
      var title=(document.getElementById("rv_title").value||"").trim();
      var who=document.getElementById("rv_who").value;
      var due=document.getElementById("rv_due").value;
      var picks=[];
      Array.prototype.forEach.call(document.querySelectorAll("#rv_plist [data-dx]:checked"), function(cb){
        picks.push(depts[+cb.getAttribute("data-dx")]);
      });
      if(!title){toast("กรุณาระบุหัวเรื่อง");return;}
      if(!who){toast("กรุณาเลือกผู้ทบทวน");return;}
      if(picks.length===0){toast("กรุณาเลือกแผนกอย่างน้อย 1 แผนก");return;}
      var reviewer = allUsers.filter(function(x){return x.username===who;})[0];
      if(!reviewer){toast("ไม่พบผู้ทบทวน");return;}
      var snapshot=[];
      var deptList=[];
      picks.forEach(function(d){
        deptList.push(d.dept);
        // จัดกลุ่ม events ตาม "ผู้ใช้สิทธิ์" ภายในแผนกนี้
        var userMap = {};
        d.requestIds.forEach(function(rid){
          var req = requests.filter(function(r){return r.id===rid;})[0];
          if(!req || !req.items || !req.items.length) return;
          var pkey = norm(req.requesterName)+"|"+norm(req.userAD);
          if(!userMap[pkey]) userMap[pkey] = {
            requesterName: req.requesterName||"",
            department: req.department||d.dept,
            latestReq: req,
            events: []
          };
          if((req.createdAt||"") > (userMap[pkey].latestReq.createdAt||"")){
            userMap[pkey].latestReq = req;
          }
          req.items.forEach(function(it){
            userMap[pkey].events.push({
              permission: it.permission, action: it.action, date: it.date,
              reqId: req.id, reqCreatedAt: req.createdAt||""
            });
          });
        });
        Object.keys(userMap).forEach(function(pkey){
          var u = userMap[pkey];
          // เรียงเหตุการณ์เก่า→ใหม่ แล้วประมวลผล add/redefine/remove เพื่อหาสิทธิ์ที่ "ยังถืออยู่จริง"
          var evs = u.events.slice().sort(function(a,b){
            var da=(a.date||"")+"|"+(a.reqCreatedAt||"");
            var db=(b.date||"")+"|"+(b.reqCreatedAt||"");
            return da<db?-1:da>db?1:0;
          });
          var cur = {};
          evs.forEach(function(e){
            var k = norm(e.permission); if(!k) return;
            if(e.action==="remove"){ delete cur[k]; }
            else { cur[k] = {permission:e.permission, action:e.action, date:e.date, sourceRequestId:e.reqId}; }
          });
          var items = Object.keys(cur).map(function(k){return cur[k];});
          if(items.length===0) return; // ผู้ใช้นี้ไม่มีสิทธิ์ที่ active อยู่ → ไม่ต้องทบทวน
          snapshot.push({
            requestId: "user:"+pkey+":"+u.latestReq.id,
            requestNo: u.latestReq.no,
            requesterName: u.requesterName,
            department: u.department,
            items: items
          });
        });
      });
      if(snapshot.length===0){toast("ไม่พบสิทธิ์ในแผนกที่เลือก");return;}
      var rec={
        id:"rev_"+Date.now(),
        createdAt:new Date().toISOString(),
        createdBy:{username:session.username,name:session.name},
        title:title, dueDate:due||"",
        assignedTo:{username:reviewer.username,name:reviewer.name,department:reviewer.department||""},
        scopeDepts: deptList,
        snapshot:snapshot, decisions:[], status:"pending"
      };
      reviews.unshift(rec); saveReviews();
      toast("สร้างรอบทบทวน \""+title+"\" — "+picks.length+" แผนก · "+snapshot.length+" คน — ส่งไปยัง "+reviewer.name);
      render();
    };
  }

  function renderReviewDetail(id){
    var rv = findReview(id);
    if(!rv){ reviewSel=null; render(); return; }
    var role = session ? session.role : "";

    // flatten snapshot into rows
    var snapRows=[];
    (rv.snapshot||[]).forEach(function(p){
      (p.items||[]).forEach(function(it, idx){
        var d = getDecision(rv, p.requestId, idx) || {action:"keep"};
        snapRows.push({p:p, it:it, idx:idx, d:d});
      });
    });

    var canEdit = (role==="user" && rv.status==="pending" && session.username===rv.assignedTo.username);

    var detailHTML = snapRows.map(function(r,i){
      var did = r.p.requestId+"::"+r.idx;
      var actionVal = r.d.action || "keep";
      var newP = r.d.newPermission||"";
      var newA = r.d.newAction||r.it.action;
      var note = r.d.note||"";
      var actionCell;
      if(canEdit){
        actionCell = '<div class="rv-seg" data-did="'+esc(did)+'">'+
          ['keep','remove','change'].map(function(a){
            var labels={keep:"ถูกต้อง",remove:"ขอถอนสิทธิ์",change:"ขอแก้ไข"};
            return '<button type="button" class="rv-segb'+(actionVal===a?" on":"")+'" data-a="'+a+'">'+labels[a]+'</button>';
          }).join("")+
        '</div>'+
        '<div class="rv-change" data-did="'+esc(did)+'" style="display:'+(actionVal==="change"?"flex":"none")+'">'+
          '<input class="f-input rv-np" placeholder="สิทธิ์ใหม่ (เช่น Acs_admin)" value="'+esc(newP)+'">'+
          '<select class="f-input rv-na">'+
            ['เพิ่ม','ถอน','กำหนดใหม่'].map(function(x){return '<option value="'+x+'"'+(newA===x?' selected':'')+'>'+x+'</option>';}).join("")+
          '</select>'+
        '</div>';
      } else {
        var labels={keep:"ถูกต้อง",remove:"ขอถอนสิทธิ์",change:"ขอแก้ไข"};
        var cls = actionVal==="keep" ? "user" : "it";
        actionCell = '<span class="u-badge '+cls+'">'+labels[actionVal]+'</span>'+
          (actionVal==="change" ? '<div class="rv-change-ro">→ '+esc(newP||"(ไม่ระบุ)")+' · '+esc(newA||"")+'</div>' : '');
      }
      var noteCell = canEdit
        ? '<input class="f-input rv-note" data-did="'+esc(did)+'" placeholder="หมายเหตุ" value="'+esc(note)+'">'
        : (note ? '<div class="rv-note-ro">'+esc(note)+'</div>' : '<span style="color:var(--soft)">—</span>');
      return '<tr>'+
        '<td class="u-no">'+(i+1)+'</td>'+
        '<td><b>'+esc(r.p.requesterName)+'</b><div class="rv-sub">#'+pad4(r.p.requestNo)+(r.p.department?' · '+esc(r.p.department):'')+'</div></td>'+
        '<td>'+esc(r.it.permission)+'</td>'+
        '<td>'+esc(r.it.action)+'</td>'+
        '<td>'+esc(r.it.date||"—")+'</td>'+
        '<td>'+actionCell+'</td>'+
        '<td>'+noteCell+'</td>'+
      '</tr>';
    }).join("");

    var actionBtns = '';
    if(canEdit){
      actionBtns =
        '<button class="btn-ghost" id="rvApproveAll">อนุมัติทั้งหมด (ไม่มีแก้ไข)</button> '+
        '<button class="btn-primary" id="rvSubmitChanges">ส่งผลการทบทวน</button>';
    }
    if(role==="it" && rv.status==="submitted"){
      var changed = (rv.decisions||[]).filter(function(d){return d.action!=="keep";}).length;
      actionBtns =
        '<button class="btn-primary" id="rvApply">ปรับปรุงสิทธิ์ตามผลทบทวน'+(changed?' ('+changed+' รายการ)':'')+'</button>';
    }

    var statusInfo = '<div class="rv-meta">'+
      '<div><b>ผู้ทบทวน:</b> '+esc(rv.assignedTo.name)+(rv.assignedTo.department?' · '+esc(rv.assignedTo.department):'')+'</div>'+
      '<div><b>สถานะ:</b> '+reviewStatusBadge(rv.status)+'</div>'+
      '<div><b>สร้างโดย:</b> '+esc((rv.createdBy&&rv.createdBy.name)||"—")+'</div>'+
      '<div><b>สร้าง:</b> '+fmtDateTime(rv.createdAt)+'</div>'+
      ((rv.scopeDepts&&rv.scopeDepts.length)?'<div><b>แผนกที่ทบทวน:</b> '+esc(rv.scopeDepts.join(", "))+'</div>':'')+
      (rv.submittedAt?'<div><b>ส่งกลับ:</b> '+fmtDateTime(rv.submittedAt)+'</div>':'')+
      (rv.appliedAt?'<div><b>ปรับปรุง:</b> '+fmtDateTime(rv.appliedAt)+'</div>':'')+
      (rv.dueDate?'<div><b>กำหนดส่ง:</b> '+esc(rv.dueDate)+'</div>':'')+
    '</div>';

    content.innerHTML =
      '<section class="card">'+
        '<div class="card-head" style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px">'+
          '<div><h2>'+esc(rv.title)+'</h2><p>รายการสิทธิ์ที่ต้องทบทวนทั้งหมด '+snapRows.length+' รายการ</p></div>'+
          '<button class="btn-ghost sm" id="rvBack">← กลับ</button>'+
        '</div>'+
        statusInfo+
        (snapRows.length
          ? '<table class="utbl rv-tbl"><thead><tr>'+
              '<th class="u-no">#</th><th>ผู้ใช้สิทธิ์</th><th>สิทธิ์</th><th>การกระทำเดิม</th><th>วันที่</th><th>ผลทบทวน</th><th>หมายเหตุ</th>'+
            '</tr></thead><tbody>'+detailHTML+'</tbody></table>'
          : '<p class="empty">ไม่มีรายการสิทธิ์ใน snapshot</p>')+
        (actionBtns ? '<div class="u-actions-row">'+actionBtns+'</div>' : '')+
      '</section>';

    document.getElementById("rvBack").onclick=function(){ reviewSel=null; render(); };

    if(canEdit){
      Array.prototype.forEach.call(content.querySelectorAll(".rv-seg"), function(seg){
        seg.addEventListener("click", function(e){
          var b = e.target.closest(".rv-segb"); if(!b) return;
          seg.querySelectorAll(".rv-segb").forEach(function(x){x.classList.toggle("on",x===b);});
          var did = seg.getAttribute("data-did");
          var changeBox = content.querySelector('.rv-change[data-did="'+did.replace(/"/g,'\\"')+'"]');
          if(changeBox) changeBox.style.display = (b.getAttribute("data-a")==="change") ? "flex" : "none";
        });
      });

      function collectDecisions(){
        var decisions=[]; var anyChange=false;
        var trs = content.querySelectorAll(".rv-tbl tbody tr");
        for(var i=0;i<trs.length;i++){
          var r = snapRows[i];
          var seg = trs[i].querySelector(".rv-seg");
          var actBtn = seg ? seg.querySelector(".rv-segb.on") : null;
          var act = actBtn ? actBtn.getAttribute("data-a") : "keep";
          var noteEl = trs[i].querySelector(".rv-note");
          var d = {requestId:r.p.requestId, idx:r.idx, action:act, note:noteEl?(noteEl.value||"").trim():""};
          if(act==="change"){
            var box = trs[i].querySelector(".rv-change");
            d.newPermission = ((box.querySelector(".rv-np").value)||"").trim();
            d.newAction     = (box.querySelector(".rv-na").value)||"";
          }
          if(act!=="keep") anyChange=true;
          decisions.push(d);
        }
        return {decisions:decisions, anyChange:anyChange};
      }

      document.getElementById("rvApproveAll").onclick = function(){
        if(!confirm("ยืนยันว่าสิทธิ์ทั้งหมด "+snapRows.length+" รายการถูกต้อง?")) return;
        rv.decisions = snapRows.map(function(r){return {requestId:r.p.requestId, idx:r.idx, action:"keep"};});
        rv.status = "approved";
        rv.submittedAt = new Date().toISOString();
        saveReviews(); toast("อนุมัติเรียบร้อย"); reviewSel=null; render();
      };
      document.getElementById("rvSubmitChanges").onclick = function(){
        var res = collectDecisions();
        var changedN = res.decisions.filter(function(d){return d.action!=="keep";}).length;
        if(res.anyChange){
          if(changedN>0){
            // validate "change" rows have new permission
            for(var i=0;i<res.decisions.length;i++){
              var d=res.decisions[i];
              if(d.action==="change" && !d.newPermission){
                toast("กรุณาระบุ \"สิทธิ์ใหม่\" สำหรับรายการที่ขอแก้ไข");
                return;
              }
            }
          }
        }
        if(!confirm(res.anyChange
          ? "ส่งผลการทบทวน — มี "+changedN+" รายการขอแก้ไข?"
          : "ไม่มีการแก้ไข — บันทึกเป็น \"อนุมัติทั้งหมด\"?")) return;
        rv.decisions = res.decisions;
        rv.status = res.anyChange ? "submitted" : "approved";
        rv.submittedAt = new Date().toISOString();
        saveReviews();
        toast(res.anyChange ? "ส่งผลการทบทวนแล้ว ("+changedN+" รายการรอ IT)" : "อนุมัติเรียบร้อย");
        reviewSel=null; render();
      };
    }

    if(role==="it" && rv.status==="submitted"){
      document.getElementById("rvApply").onclick = function(){
        var changes = (rv.decisions||[]).filter(function(d){return d.action!=="keep";});
        if(changes.length===0){
          rv.status="applied"; rv.appliedAt=new Date().toISOString(); saveReviews();
          toast("ไม่มีรายการต้องปรับปรุง"); render(); return;
        }
        if(!confirm("ปรับปรุงสิทธิ์ทั้งหมด "+changes.length+" รายการตามผลทบทวน?\n(การกระทำนี้แก้ไขข้อมูลจริง — ระบบจะบันทึกประวัติให้)")) return;
        var applied=0, skipped=0;
        changes.forEach(function(d){
          // หา snapshot item ปัจจุบันก่อน เพื่อรู้ว่าสิทธิ์นี้ผูกกับ request ใด (sourceRequestId)
          var snap = (rv.snapshot.filter(function(p){return p.requestId===d.requestId;})[0]||{}).items||[];
          var snapItem = snap[d.idx];
          if(!snapItem){ skipped++; return; }
          var realReqId = snapItem.sourceRequestId || d.requestId; // fallback สำหรับ review เวอร์ชั่นเก่า
          var req = requests.filter(function(r){return r.id===realReqId;})[0];
          if(!req || !req.items){ skipped++; return; }
          var curIdx = -1;
          for(var i=0;i<req.items.length;i++){
            if(norm(req.items[i].permission)===norm(snapItem.permission)){ curIdx=i; break; }
          }
          if(curIdx<0){ skipped++; return; }
          var before = Object.assign({}, req.items[curIdx]);
          if(d.action==="remove"){
            req.items.splice(curIdx,1);
            logHistory({by:{username:session.username,name:session.name,role:"it"},source:"review",reviewId:rv.id,
              requestId:req.id, requestNo:req.no, requesterName:req.requesterName,
              changeType:"remove", before:before, after:null, note:d.note||""});
            applied++;
          } else if(d.action==="change"){
            req.items[curIdx].permission = d.newPermission || before.permission;
            req.items[curIdx].action     = d.newAction     || before.action;
            req.items[curIdx].date       = todayISO();
            logHistory({by:{username:session.username,name:session.name,role:"it"},source:"review",reviewId:rv.id,
              requestId:req.id, requestNo:req.no, requesterName:req.requesterName,
              changeType:"update", before:before, after:Object.assign({},req.items[curIdx]), note:d.note||""});
            applied++;
          }
          req.updatedAt = new Date().toISOString();
        });
        save();
        rv.status="applied"; rv.appliedAt=new Date().toISOString(); saveReviews();
        toast("ปรับปรุงสิทธิ์แล้ว "+applied+" รายการ"+(skipped?" (ข้าม "+skipped+")":""));
        render();
      };
    }
  }

  function renderHistoryModal(){
    var ov = document.getElementById("historyModal");
    if(!ov){
      ov = document.createElement("div");
      ov.id="historyModal"; ov.className="modal no-print";
      document.body.appendChild(ov);
    }
    var rows = history.slice(0,500).map(function(h){
      var changeLabel = h.changeType==="remove" ? '<span class="u-badge user">ถอน</span>' :
                        h.changeType==="update" ? '<span class="u-badge it">แก้ไข</span>' :
                        '<span class="u-badge">เพิ่ม</span>';
      var beforeStr = h.before ? esc(h.before.permission)+' · '+esc(h.before.action) : '—';
      var afterStr  = h.after  ? esc(h.after.permission) +' · '+esc(h.after.action)  : '<span style="color:var(--rem)">(ลบ)</span>';
      return '<tr>'+
        '<td class="u-user">'+fmtDateTime(h.at)+'</td>'+
        '<td>'+esc(h.requesterName||"—")+'<div class="rv-sub">#'+pad4(h.requestNo||0)+'</div></td>'+
        '<td>'+changeLabel+'</td>'+
        '<td>'+beforeStr+' → '+afterStr+'</td>'+
        '<td>'+esc((h.by&&h.by.name)||"—")+'<div class="rv-sub">'+esc(h.source||"")+'</div></td>'+
        '<td>'+esc(h.note||"")+'</td>'+
      '</tr>';
    }).join("");
    ov.innerHTML =
      '<div class="modal-box" style="max-width:980px">'+
        '<div class="modal-bar"><div class="modal-title">ประวัติการแก้ไขสิทธิ์ ('+history.length+')</div>'+
          '<button class="modal-x" id="histClose">✕</button></div>'+
        '<div class="modal-body">'+
          (rows
            ? '<table class="utbl"><thead><tr>'+
                '<th>เวลา</th><th>ผู้ใช้สิทธิ์</th><th>ประเภท</th><th>การเปลี่ยนแปลง</th><th>โดย</th><th>หมายเหตุ</th>'+
              '</tr></thead><tbody>'+rows+'</tbody></table>'
            : '<p class="empty">ยังไม่มีประวัติ</p>')+
        '</div>'+
      '</div>';
    ov.classList.add("show");
    document.getElementById("histClose").onclick = function(){ ov.classList.remove("show"); };
    ov.addEventListener("click", function(e){ if(e.target===ov) ov.classList.remove("show"); });
  }

  // ── DASHBOARD (analytics overview) ─────────────────────
  function renderDashboard(){
    if(!isIT()){ view="form"; render(); return; }

    // ── compute permission analytics client-side ──
    var users = collectUsers();
    var totalUsers = users.length;
    // Per-user effective state
    var totalActive = 0, totalRemoved = 0;
    users.forEach(function(u){
      var tl = userTimeline(u.key);
      tl.forEach(function(t){ if(t.active) totalActive++; else totalRemoved++; });
    });
    var totalEvents = requests.reduce(function(s,r){ return s + (r.items?r.items.length:0); }, 0);

    // Action breakdown
    var actionCnt = {add:0, remove:0, redefine:0};
    requests.forEach(function(r){ (r.items||[]).forEach(function(it){
      var a = it.action || 'add';
      if(actionCnt[a] === undefined) actionCnt[a] = 0;
      actionCnt[a]++;
    }); });

    // Top groups by active user count
    var groupActive = {};
    users.forEach(function(u){
      userTimeline(u.key).forEach(function(t){
        if(!t.active) return;
        groupActive[t.permission] = (groupActive[t.permission]||0) + 1;
      });
    });
    var topGroups = Object.keys(groupActive).map(function(k){return {name:k, count:groupActive[k]};})
      .sort(function(a,b){return b.count-a.count;}).slice(0,10);

    // Top departments
    var deptCnt = {};
    users.forEach(function(u){
      var d = u.dept || '(ไม่ระบุ)';
      deptCnt[d] = (deptCnt[d]||0) + 1;
    });
    var topDepts = Object.keys(deptCnt).map(function(k){return {name:k, count:deptCnt[k]};})
      .sort(function(a,b){return b.count-a.count;}).slice(0,8);

    // Activity per month (last 12 months)
    var monthCnt = {};
    requests.forEach(function(r){ (r.items||[]).forEach(function(it){
      var d = (it.date||"").slice(0,7);
      if(!d) return;
      monthCnt[d] = (monthCnt[d]||0) + 1;
    }); });
    var months = Object.keys(monthCnt).sort();
    if(months.length > 12) months = months.slice(-12);
    var monthSeries = months.map(function(m){return {label:m, count:monthCnt[m]};});

    // Recent activity feed (latest 12 events with user)
    var recentEvents = [];
    requests.forEach(function(r){ (r.items||[]).forEach(function(it){
      recentEvents.push({
        date: it.date||"",
        createdAt: r.createdAt||"",
        action: it.action||"add",
        permission: it.permission||"",
        userName: r.requesterName||"",
        userKey: userKey(r),
        reqNo: r.no
      });
    }); });
    recentEvents.sort(function(a,b){
      if((b.date||"")!==(a.date||"")) return (b.date||"").localeCompare(a.date||"");
      return (b.createdAt||"").localeCompare(a.createdAt||"");
    });
    recentEvents = recentEvents.slice(0,12);

    // Top users by active permission count
    var userActiveCnt = users.map(function(u){
      var tl=userTimeline(u.key);
      return {key:u.key, name:u.name||u.adName, dept:u.dept, count:tl.filter(function(t){return t.active;}).length};
    }).sort(function(a,b){return b.count-a.count;}).slice(0,10);

    // Orphan groups (no active users)
    var orphanCount = 0;
    if(groups.cols.length){
      var mc = groupCols(groups.cols);
      groups.rows.forEach(function(row){
        var nm = String(row[mc.nameCol]||"");
        if(!groupActive[nm]) orphanCount++;
      });
    }

    // KPI cards
    function kpi(label, value, sub, tone){
      return '<div class="kpi'+(tone?" kpi-"+tone:"")+'">'+
        '<div class="kpi-label">'+esc(label)+'</div>'+
        '<div class="kpi-value mono">'+esc(String(value))+'</div>'+
        (sub?'<div class="kpi-sub">'+sub+'</div>':'')+
      '</div>';
    }

    // Horizontal bar helper
    function hbar(items, total, opts){
      opts = opts || {};
      var max = items.reduce(function(m,x){return Math.max(m,x.count);}, 0) || 1;
      if(!items.length) return '<div class="empty soft">— ไม่มีข้อมูล —</div>';
      return '<ul class="hbar-list">'+items.map(function(x){
        var pct = Math.round(x.count*100/max);
        var pctTotal = total ? Math.round(x.count*100/total) : 0;
        var meta = total ? '<span class="hbar-pct mono">'+pctTotal+'%</span>' : '';
        return '<li class="hbar-row">'+
          '<div class="hbar-label" title="'+esc(x.name)+'">'+esc(x.name)+'</div>'+
          '<div class="hbar-track"><div class="hbar-fill'+(opts.cls?" "+opts.cls:"")+'" style="width:'+pct+'%"></div></div>'+
          '<div class="hbar-val mono">'+x.count+'</div>'+
          meta+
        '</li>';
      }).join("")+'</ul>';
    }

    // Vertical bar (timeline)
    function vbars(series, opts){
      opts = opts || {};
      if(!series.length) return '<div class="empty soft">— ไม่มีข้อมูล —</div>';
      var max = series.reduce(function(m,x){return Math.max(m,x.count);}, 0) || 1;
      return '<div class="vbar-wrap"><div class="vbar-chart">'+
        series.map(function(x){
          var h = Math.max(3, Math.round(x.count*100/max));
          return '<div class="vbar-col" title="'+esc(x.label)+': '+x.count+'">'+
            '<div class="vbar-val mono">'+x.count+'</div>'+
            '<div class="vbar-bar'+(opts.cls?" "+opts.cls:"")+'" style="height:'+h+'%"></div>'+
            '<div class="vbar-lbl mono">'+esc(x.label)+'</div>'+
          '</div>';
        }).join("")+
      '</div></div>';
    }

    // Pie chart (pure SVG) — items: [{name, count}, ...]
    var PIE_PALETTE = ['#1B6FBE','#0F7B43','#C02A3B','#B26A00','#7C3AED','#0EA5A8','#DB2777','#65A30D','#EA580C','#475569'];
    function pieSVG(items){
      var total = items.reduce(function(s,x){return s+x.count;}, 0);
      if(!total) return '<div class="empty soft">— ไม่มีข้อมูล —</div>';
      var size = 180, cx = size/2, cy = size/2, r = 78, ri = 38;
      var paths = '';
      var startA = -Math.PI/2;
      if(items.length === 1){
        // Single slice = donut ring
        paths = '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+PIE_PALETTE[0]+'"/>'+
                '<circle cx="'+cx+'" cy="'+cy+'" r="'+ri+'" fill="#fff"/>';
      } else {
        items.forEach(function(it, i){
          var frac = it.count/total;
          var endA = startA + frac*Math.PI*2;
          var large = frac > 0.5 ? 1 : 0;
          var x1o = cx + r*Math.cos(startA),  y1o = cy + r*Math.sin(startA);
          var x2o = cx + r*Math.cos(endA),    y2o = cy + r*Math.sin(endA);
          var x1i = cx + ri*Math.cos(endA),   y1i = cy + ri*Math.sin(endA);
          var x2i = cx + ri*Math.cos(startA), y2i = cy + ri*Math.sin(startA);
          var color = PIE_PALETTE[i % PIE_PALETTE.length];
          paths += '<path d="M '+x1o+' '+y1o+
                   ' A '+r+' '+r+' 0 '+large+' 1 '+x2o+' '+y2o+
                   ' L '+x1i+' '+y1i+
                   ' A '+ri+' '+ri+' 0 '+large+' 0 '+x2i+' '+y2i+
                   ' Z" fill="'+color+'" stroke="#fff" stroke-width="1.5"/>';
          startA = endA;
        });
      }
      // center label
      var center = '<text x="'+cx+'" y="'+(cy-2)+'" text-anchor="middle" font-size="10" fill="#5A6B82" font-family="IBM Plex Sans Thai,sans-serif">รวม</text>'+
                   '<text x="'+cx+'" y="'+(cy+13)+'" text-anchor="middle" font-size="16" fill="#1B2A41" font-weight="700" font-family="IBM Plex Mono,monospace">'+total+'</text>';
      var legend = items.map(function(it,i){
        var pct = Math.round(it.count*100/total);
        var color = PIE_PALETTE[i % PIE_PALETTE.length];
        return '<li><span class="pie-sw" style="background:'+color+'"></span>'+
          '<span class="pie-lbl perm-link" data-perm="'+esc(it.name)+'" title="'+esc(it.name)+'">'+esc(it.name)+'</span>'+
          '<span class="pie-val mono">'+it.count+'</span>'+
          '<span class="pie-pct mono">'+pct+'%</span></li>';
      }).join("");
      return '<div class="pie-wrap">'+
        '<svg viewBox="0 0 '+size+' '+size+'" class="pie-svg" preserveAspectRatio="xMidYMid meet">'+paths+center+'</svg>'+
        '<ul class="pie-legend">'+legend+'</ul>'+
      '</div>';
    }

    // Radar / spider chart (pure SVG) — items: [{name, count}, ...]
    function radarSVG(items){
      if(!items.length) return '<div class="empty soft">— ไม่มีข้อมูล —</div>';
      // need at least 3 axes for a polygon; if fewer, fall back to hbar
      if(items.length < 3) return hbar(items, items.reduce(function(s,x){return s+x.count;},0), {cls:"blue"});
      var size = 280, cx = size/2, cy = size/2, r = 90;
      var max = items.reduce(function(m,x){return Math.max(m,x.count);}, 0) || 1;
      var n = items.length;
      var axes = items.map(function(it,i){
        var angle = -Math.PI/2 + i*2*Math.PI/n;
        return {angle:angle, label:it.name, count:it.count};
      });
      // grid polygons (4 levels)
      var grid = '';
      for(var k=1; k<=4; k++){
        var gr = r * k/4;
        var pts = axes.map(function(a){
          return (cx + gr*Math.cos(a.angle)).toFixed(2)+','+(cy + gr*Math.sin(a.angle)).toFixed(2);
        }).join(' ');
        grid += '<polygon points="'+pts+'" fill="none" stroke="#D5DCE6" stroke-width="1" '+(k<4?'stroke-dasharray="2,3"':'')+'/>';
      }
      // spokes
      var spokes = axes.map(function(a){
        var x = cx + r*Math.cos(a.angle), y = cy + r*Math.sin(a.angle);
        return '<line x1="'+cx+'" y1="'+cy+'" x2="'+x.toFixed(2)+'" y2="'+y.toFixed(2)+'" stroke="#D5DCE6" stroke-width="1"/>';
      }).join("");
      // data polygon
      var dataPts = axes.map(function(a){
        var rr = (a.count/max)*r;
        return (cx + rr*Math.cos(a.angle)).toFixed(2)+','+(cy + rr*Math.sin(a.angle)).toFixed(2);
      }).join(' ');
      var dots = axes.map(function(a){
        var rr = (a.count/max)*r;
        return '<circle cx="'+(cx + rr*Math.cos(a.angle)).toFixed(2)+'" cy="'+(cy + rr*Math.sin(a.angle)).toFixed(2)+'" r="3.5" fill="#1B6FBE" stroke="#fff" stroke-width="1.5"/>';
      }).join("");
      // labels (slightly outside)
      var labels = axes.map(function(a){
        var lr = r + 14;
        var lx = cx + lr*Math.cos(a.angle);
        var ly = cy + lr*Math.sin(a.angle);
        var cosA = Math.cos(a.angle), sinA = Math.sin(a.angle);
        var anchor = 'middle';
        if(cosA > 0.3) anchor = 'start';
        else if(cosA < -0.3) anchor = 'end';
        var dy = sinA > 0.3 ? 10 : (sinA < -0.3 ? -2 : 4);
        var lbl = a.label.length > 13 ? a.label.slice(0,12)+'…' : a.label;
        return '<text x="'+lx.toFixed(2)+'" y="'+(ly+dy).toFixed(2)+'" text-anchor="'+anchor+'" font-size="10.5" fill="#1B2A41" font-family="IBM Plex Sans Thai,sans-serif">'+esc(lbl)+'</text>'+
          '<text x="'+lx.toFixed(2)+'" y="'+(ly+dy+12).toFixed(2)+'" text-anchor="'+anchor+'" font-size="10" fill="#5A6B82" font-weight="600" font-family="IBM Plex Mono,monospace">'+a.count+'</text>';
      }).join("");
      // max-value tick label on top axis
      var tickLbl = '<text x="'+(cx+3)+'" y="'+(cy-r+10)+'" font-size="9" fill="#9AA6B8" font-family="IBM Plex Mono,monospace">'+max+'</text>';
      return '<div class="radar-wrap"><svg viewBox="0 0 '+size+' '+size+'" class="radar-svg" preserveAspectRatio="xMidYMid meet">'+
        grid + spokes + tickLbl +
        '<polygon points="'+dataPts+'" fill="rgba(27,111,190,0.20)" stroke="#1B6FBE" stroke-width="2"/>'+
        dots + labels +
        '</svg></div>';
    }

    var activeTotal = totalActive + totalRemoved;
    var activePct = activeTotal ? Math.round(totalActive*100/activeTotal) : 0;
    var removedPct = 100 - activePct;

    content.innerHTML =
      '<section class="dash">'+
        '<div class="dash-head"><h2>Dashboard — ภาพรวมระบบ</h2>'+
          '<p>วิเคราะห์สถานะสิทธิ์ปัจจุบันและกิจกรรมระบบ — ข้อมูลคำนวณจาก timeline ของคำขอทั้งหมด</p>'+
          '<button class="btn-ghost sm" id="dashReload">รีเฟรช</button></div>'+

        // KPI row
        '<div class="kpi-row">'+
          kpi("คำขอทั้งหมด", requests.length, '<span class="mono">'+totalEvents+'</span> events', "blue")+
          kpi("ผู้ใช้ที่มีคำขอ", totalUsers, totalActive+' สิทธิ์ใช้งานอยู่', "green")+
          kpi("Permission groups", groups.rows.length, orphanCount+' กลุ่มไม่มีผู้ใช้', "yellow")+
          kpi("สิทธิ์ปัจจุบัน vs ถูกถอน", totalActive+' / '+totalRemoved,
            '<span class="kpi-bar"><span class="kb-ok" style="width:'+activePct+'%"></span><span class="kb-bad" style="width:'+removedPct+'%"></span></span>'+
            '<span class="kpi-bar-leg">ใช้งาน '+activePct+'% · ถอน '+removedPct+'%</span>', "purple")+
        '</div>'+

        // Top chart row — Pie + Radar side-by-side
        '<div class="dash-toprow">'+
          '<div class="dash-card"><div class="dc-head"><h3>Top 10 Permission groups</h3><span class="soft">เรียงตามจำนวนผู้ใช้ที่ถือสิทธิ์อยู่</span></div>'+
            pieSVG(topGroups)+
          '</div>'+
          '<div class="dash-card"><div class="dc-head"><h3>แผนกที่มีคำขอมากที่สุด</h3><span class="soft">Top '+topDepts.length+' / '+Object.keys(deptCnt).length+' แผนก</span></div>'+
            radarSVG(topDepts)+
          '</div>'+
        '</div>'+

        // Two-column grid
        '<div class="dash-grid">'+
          // LEFT column — permission analytics
          '<div class="dash-col">'+
            '<div class="dash-card"><div class="dc-head"><h3>การกระทำ (Actions)</h3><span class="soft">รวม '+totalEvents+' events</span></div>'+
              hbar([
                {name:"เพิ่มสิทธิ์ (add)",      count:actionCnt.add||0},
                {name:"ถอนสิทธิ์ (remove)",     count:actionCnt.remove||0},
                {name:"กำหนดใหม่ (redefine)",   count:actionCnt.redefine||0}
              ].filter(function(x){return x.count;}), totalEvents)+
            '</div>'+

            '<div class="dash-card"><div class="dc-head"><h3>กิจกรรมรายเดือน</h3><span class="soft">'+months.length+' เดือนล่าสุด</span></div>'+
              vbars(monthSeries)+
            '</div>'+
          '</div>'+

          // RIGHT column — audit log + user activity
          '<div class="dash-col">'+
            '<div class="dash-card" id="dashAuditCard">'+
              '<div class="dc-head"><h3>Audit Log (30 วันล่าสุด)</h3><span class="soft" id="dashAuditMeta">กำลังโหลด…</span></div>'+
              '<div id="dashAuditBody"><p class="empty soft">กำลังโหลด…</p></div>'+
            '</div>'+

            '<div class="dash-card"><div class="dc-head"><h3>Top 10 ผู้ใช้ที่มีสิทธิ์เยอะที่สุด</h3><span class="soft">นับเฉพาะสิทธิ์ที่ใช้งานอยู่</span></div>'+
              '<ul class="userlist">'+userActiveCnt.map(function(u){
                return '<li class="ul-row" data-up-key="'+esc(u.key)+'">'+
                  '<div class="ul-name">'+esc(u.name||"(ไม่ระบุ)")+'</div>'+
                  '<div class="ul-dept">'+esc(u.dept||"—")+'</div>'+
                  '<div class="ul-cnt mono"><span class="up-num ok">'+u.count+'</span></div>'+
                '</li>';
              }).join("")+'</ul>'+
            '</div>'+

            '<div class="dash-card"><div class="dc-head"><h3>กิจกรรมล่าสุด</h3><span class="soft">12 รายการล่าสุด</span></div>'+
              '<ul class="actfeed">'+recentEvents.map(function(e){
                var info = ACTIONS[e.action] || ACTIONS.add;
                return '<li class="af-row">'+
                  '<span class="af-dot '+info.cls+'">'+info.glyph+'</span>'+
                  '<div class="af-body">'+
                    '<div class="af-line"><b>'+esc(e.userName)+'</b> '+info.label+' '+
                      '<span class="perm-link mono" data-perm="'+esc(e.permission)+'">'+esc(e.permission)+'</span></div>'+
                    '<div class="af-meta mono">'+fmtDate(e.date)+' · คำขอ #'+pad4(e.reqNo||0)+'</div>'+
                  '</div>'+
                '</li>';
              }).join("")+'</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</section>';

    var rl = document.getElementById("dashReload");
    if(rl) rl.onclick = function(){ render(); };

    // Wire perm-link → group
    Array.prototype.forEach.call(content.querySelectorAll("[data-perm]"), function(el){
      el.onclick = function(){ gotoGroup(el.getAttribute("data-perm")); };
    });
    // Wire user-list → user-perm detail
    Array.prototype.forEach.call(content.querySelectorAll("[data-up-key]"), function(el){
      el.style.cursor = "pointer";
      el.onclick = function(){ userPermSel = el.getAttribute("data-up-key"); setView("userperm"); };
    });

    // Fetch audit stats asynchronously
    var fetcher = (window.Store && window.Store.fetch) ? window.Store.fetch : fetch;
    fetcher('/api/audit/stats').then(function(r){ return r.json(); }).then(function(d){
      var body = document.getElementById("dashAuditBody");
      var meta = document.getElementById("dashAuditMeta");
      if(!body) return;
      meta.textContent = 'รวม '+(d.total||0)+' events ตลอดประวัติ';
      var l30 = d.last30 || {};
      var loginTotal = (l30.loginSuccess||0) + (l30.loginFailed||0);
      var sucPct = loginTotal ? Math.round((l30.loginSuccess||0)*100/loginTotal) : 0;
      var failPct = loginTotal ? (100 - sucPct) : 0;

      var byActHTML = hbar((d.byAction||[]).slice(0,8).map(function(x){return {name:x.action, count:x.c};}), d.total||0);
      var topUserHTML = hbar((d.byUser||[]).map(function(x){return {name:x.username, count:x.c};}), d.total||0, {cls:"blue"});
      var dailyHTML = vbars((d.dailyTimeline||[]).map(function(x){return {label:x.day.slice(5), count:x.c};}), {cls:"green"});

      var failRows = (d.recentFailures||[]).map(function(f){
        return '<li class="fail-row">'+
          '<span class="fail-dot">!</span>'+
          '<div class="fail-body">'+
            '<div><b>'+esc(f.username||'(unknown)')+'</b> <span class="mono soft">'+esc(f.ip||'-')+'</span></div>'+
            '<div class="mono soft">'+esc(fmtDateTime(f.at))+(f.detail?' · '+esc(f.detail):'')+'</div>'+
          '</div>'+
        '</li>';
      }).join("");

      body.innerHTML =
        '<div class="login-stat">'+
          '<div class="ls-row"><div class="ls-lbl">เข้าระบบสำเร็จ</div>'+
            '<div class="ls-bar"><div class="lsb-ok" style="width:'+sucPct+'%"></div></div>'+
            '<div class="ls-num mono ok">'+(l30.loginSuccess||0)+'</div></div>'+
          '<div class="ls-row"><div class="ls-lbl">เข้าระบบล้มเหลว</div>'+
            '<div class="ls-bar"><div class="lsb-bad" style="width:'+failPct+'%"></div></div>'+
            '<div class="ls-num mono bad">'+(l30.loginFailed||0)+'</div></div>'+
          '<div class="ls-row"><div class="ls-lbl">บัญชีถูกล็อก</div>'+
            '<div class="ls-num mono'+((l30.lockouts||0)>0?' bad':'')+'">'+(l30.lockouts||0)+'</div></div>'+
        '</div>'+
        '<h4 class="sub-h">ประเภท event ทั้งหมด</h4>'+byActHTML+
        '<h4 class="sub-h">Top 10 ผู้ใช้ที่ใช้งานระบบ</h4>'+topUserHTML+
        '<h4 class="sub-h">กิจกรรมรายวัน (30 วัน)</h4>'+dailyHTML+
        (failRows
          ? '<h4 class="sub-h">Login ล้มเหลวล่าสุด</h4><ul class="faillist">'+failRows+'</ul>'
          : '');
    }).catch(function(err){
      var body = document.getElementById("dashAuditBody");
      if(body) body.innerHTML = '<p class="empty">โหลดข้อมูล Audit ไม่สำเร็จ: '+esc(String(err.message||err))+'</p>';
    });
  }

  // ── USER PERMISSION (effective state + timeline) ───────
  function renderUserPerm(){
    if(userPermSel){ renderUserPermDetail(userPermSel); return; }
    renderUserPermList();
  }
  function renderUserPermList(){
    var us=collectUsers();
    var q=String(userPermQ||"").trim().toLowerCase();
    var filtered=us.filter(function(u){
      if(!q) return true;
      var hay=[u.name,u.nickname,u.adName,u.userAD,u.dept,u.position,u.employeeCode].join(" ").toLowerCase();
      return hay.indexOf(q)>=0;
    });
    // sort: most-recent activity first
    filtered.sort(function(a,b){return (b.latestDate||"").localeCompare(a.latestDate||"");});
    var p=paginate(filtered,'userperm');

    var rows=p.rows.map(function(u,i){
      var tl=userTimeline(u.key);
      var active=tl.filter(function(t){return t.active;}).length;
      var removed=tl.length-active;
      return '<tr data-up-key="'+esc(u.key)+'">'+
        '<td class="u-no">'+(p.start+i+1)+'</td>'+
        '<td><div class="up-tb-name">'+esc(u.name||u.adName||"(ไม่ระบุชื่อ)")+
          (u.nickname?' <span class="u-nick">('+esc(u.nickname)+')</span>':'')+'</div>'+
          (u.position?'<div class="up-tb-sub">'+esc(u.position)+'</div>':'')+'</td>'+
        '<td>'+esc(u.dept||"—")+'</td>'+
        '<td class="mono">'+esc(u.adName||"—")+'</td>'+
        '<td class="mono">'+esc(u.userAD||"—")+'</td>'+
        '<td class="mono">'+esc(u.employeeCode||"—")+'</td>'+
        '<td class="num"><span class="up-num ok">'+active+'</span></td>'+
        '<td class="num"><span class="up-num bad">'+removed+'</span></td>'+
        '<td class="num mono">'+u.events+'</td>'+
        '<td class="mono">'+(u.latestDate?fmtDate(u.latestDate):"—")+'</td>'+
        '<td class="u-actions"><button class="btn-ghost sm" data-up-key="'+esc(u.key)+'">ดูสิทธิ์ + Timeline</button></td>'+
      '</tr>';
    }).join("");

    content.innerHTML=
      '<section class="card">'+
        '<div class="card-head"><h2>ตรวจสิทธิ์รายบุคคล</h2>'+
        '<p>คำนวณสถานะปัจจุบันจาก timeline ของคำขอทั้งหมด — กดเลือกผู้ใช้เพื่อดูสิทธิ์ที่ <b>มีอยู่จริงในตอนนี้</b> และประวัติการเปลี่ยนแปลง</p></div>'+
        '<div class="up-toolbar">'+
          '<input class="f-input" id="upQ" placeholder="ค้นหา: ชื่อ, AD, Hostname, แผนก, รหัสพนักงาน…" value="'+esc(userPermQ)+'">'+
          '<div class="u-count">'+filtered.length+' / '+us.length+' คน</div>'+
        '</div>'+
        (filtered.length
          ? '<div class="tablewrap"><table class="utbl up-tbl"><thead><tr>'+
              '<th class="u-no">#</th>'+
              '<th>ชื่อผู้ใช้</th>'+
              '<th>แผนก</th>'+
              '<th>AD</th>'+
              '<th>Hostname</th>'+
              '<th>รหัสพนักงาน</th>'+
              '<th class="num" title="สิทธิ์ที่ใช้งานอยู่">ใช้งาน</th>'+
              '<th class="num" title="สิทธิ์ที่ถูกถอน">ถอนแล้ว</th>'+
              '<th class="num" title="จำนวน event ทั้งหมด">Events</th>'+
              '<th>กิจกรรมล่าสุด</th>'+
              '<th class="u-actions">จัดการ</th>'+
            '</tr></thead><tbody>'+rows+'</tbody></table></div>'+pagerHTML('userperm',p)
          : '<p class="empty">ไม่พบผู้ใช้ที่ตรงกับคำค้นหา</p>')+
      '</section>';

    var qi=document.getElementById("upQ");
    if(qi){
      qi.addEventListener("input",function(){ userPermQ=qi.value; pages.userperm=1; renderUserPermList();
        var nq=document.getElementById("upQ"); if(nq){ nq.focus(); nq.setSelectionRange(nq.value.length,nq.value.length); }
      });
    }
    Array.prototype.forEach.call(content.querySelectorAll("tr[data-up-key]"),function(tr){
      tr.style.cursor="pointer";
      tr.addEventListener("click",function(e){
        if(e.target.closest("button")) return;
        userPermSel=tr.getAttribute("data-up-key"); render();
      });
    });
    Array.prototype.forEach.call(content.querySelectorAll("button[data-up-key]"),function(b){
      b.onclick=function(e){ e.stopPropagation(); userPermSel=b.getAttribute("data-up-key"); render(); };
    });
  }
  function userInfoForKey(key){
    var us=collectUsers();
    for(var i=0;i<us.length;i++) if(us[i].key===key) return us[i];
    return null;
  }
  function renderUserPermDetail(key){
    var info=userInfoForKey(key);
    if(!info){
      content.innerHTML='<section class="card"><div class="card-head"><h2>ไม่พบผู้ใช้</h2></div>'+
        '<p class="empty">ผู้ใช้นี้อาจถูกลบจากระบบ — <a href="javascript:void(0)" id="upBack">กลับไปรายการ</a></p></section>';
      var b=document.getElementById("upBack"); if(b) b.onclick=function(){userPermSel=null;render();};
      return;
    }
    var tl=userTimeline(key);
    var active=tl.filter(function(t){return t.active;});
    var removed=tl.filter(function(t){return !t.active;});

    function eventRow(ev,idx,total){
      var info=ACTIONS[ev.action]||ACTIONS.add;
      return '<li class="tl-ev tl-'+ev.action+'">'+
        '<span class="tl-dot '+info.cls+'">'+info.glyph+'</span>'+
        '<div class="tl-body">'+
          '<div class="tl-line">'+
            '<span class="tl-act '+info.cls+'">'+info.label+'</span>'+
            '<span class="tl-date mono">'+fmtDate(ev.date)+'</span>'+
            (ev.reqNo?'<span class="tl-ref mono">คำขอ #'+pad4(ev.reqNo)+'</span>':'')+
          '</div>'+
          (ev.createdAt?'<div class="tl-sub mono">บันทึก '+fmtDateTime(ev.createdAt)+'</div>':'')+
        '</div>'+
      '</li>';
    }
    function permBlock(t){
      var info=ACTIONS[t.lastAction]||ACTIONS.add;
      var head=
        '<div class="up-perm-head">'+
          '<div class="up-perm-title">'+
            '<span class="stat-pill '+(t.active?'ok':'bad')+'">● '+(t.active?'ใช้งาน':'ถอนแล้ว')+'</span>'+
            '<span class="up-perm-name perm-link mono" data-perm="'+esc(t.permission)+'">'+esc(t.permission)+'</span>'+
          '</div>'+
          '<div class="up-perm-meta">'+
            '<span class="chip '+info.cls+'"><b>'+info.glyph+'</b> '+info.label+'</span>'+
            '<span class="mono">ล่าสุด '+fmtDate(t.lastDate)+'</span>'+
            (t.firstAddDate?'<span class="mono soft">เริ่มมีสิทธิ์ '+fmtDate(t.firstAddDate)+'</span>':'')+
            '<span class="soft">รวม '+t.events.length+' event</span>'+
          '</div>'+
        '</div>';
      var tl='<ol class="tl">'+t.events.map(function(ev,i){return eventRow(ev,i,t.events.length);}).join("")+'</ol>';
      return '<div class="up-perm '+(t.active?'is-active':'is-removed')+'">'+head+tl+'</div>';
    }

    var name=info.name||info.adName||"(ไม่ระบุชื่อ)";
    var subline=[info.position, info.dept].filter(Boolean).join(' · ');
    var idLines=[
      info.adName?'<span class="up-id-label">AD</span> <span class="mono">'+esc(info.adName)+'</span>':'',
      info.userAD?'<span class="up-id-label">Hostname</span> <span class="mono">'+esc(info.userAD)+'</span>':'',
      info.employeeCode?'<span class="up-id-label">รหัสพนักงาน</span> <span class="mono">'+esc(info.employeeCode)+'</span>':''
    ].filter(Boolean).join(' &nbsp;·&nbsp; ');

    content.innerHTML=
      '<section class="card">'+
        '<div class="up-detail-head">'+
          '<button class="btn-ghost sm" id="upBack">← กลับรายการ</button>'+
          '<div class="up-detail-who">'+
            '<div class="up-detail-name">'+esc(name)+(info.nickname?' <span class="up-card-nick">('+esc(info.nickname)+')</span>':'')+'</div>'+
            (subline?'<div class="up-detail-sub">'+esc(subline)+'</div>':'')+
            (idLines?'<div class="up-detail-ids">'+idLines+'</div>':'')+
          '</div>'+
          '<div class="up-detail-stats">'+
            '<span class="up-stat-pill ok"><b>'+active.length+'</b> สิทธิ์ปัจจุบัน</span>'+
            '<span class="up-stat-pill bad"><b>'+removed.length+'</b> ถูกถอน</span>'+
          '</div>'+
        '</div>'+
        '<h3 class="up-section-h">สิทธิ์ที่มีอยู่ปัจจุบัน <span class="soft">('+active.length+')</span></h3>'+
        (active.length
          ? '<div class="up-perm-list">'+active.map(permBlock).join("")+'</div>'
          : '<p class="empty">— ไม่มีสิทธิ์ที่ใช้งานอยู่ —</p>')+
        '<h3 class="up-section-h">สิทธิ์ที่ถูกถอนแล้ว <span class="soft">('+removed.length+')</span></h3>'+
        (removed.length
          ? '<div class="up-perm-list">'+removed.map(permBlock).join("")+'</div>'
          : '<p class="empty">— ไม่มี —</p>')+
      '</section>';

    document.getElementById("upBack").onclick=function(){ userPermSel=null; render(); };
    Array.prototype.forEach.call(content.querySelectorAll("[data-perm]"),function(el){
      el.onclick=function(){ gotoGroup(el.getAttribute("data-perm")); };
    });
  }

  // ── USERS (admin only) ─────────────────────────────────
  var userEdit=null; // null | {mode:"add"} | {mode:"edit",username:"..."}
  function userRoleBadge(role){
    return role==="it"
      ? '<span class="u-badge it">IT</span>'
      : '<span class="u-badge user">User</span>';
  }
  function renderUsers(){
    if(!isIT()){
      content.innerHTML='<section class="card"><div class="card-head"><h2>ไม่มีสิทธิ์</h2><p>เฉพาะผู้ดูแลระบบ (IT) เท่านั้น</p></div></section>';
      return;
    }
    var users=window.Auth.list();
    var pgUsers = paginate(users, 'users');
    var me=session?session.username:"";
    var formHTML="";
    if(userEdit){
      var u=userEdit.mode==="edit"
        ? (users.filter(function(x){return x.username===userEdit.username;})[0]||null)
        : {username:"",name:"",department:"",role:"user"};
      if(!u && userEdit.mode==="edit"){ userEdit=null; }
      if(u){
        var title=userEdit.mode==="add"?"เพิ่มผู้ใช้ใหม่":"แก้ไขผู้ใช้";
        var pwLabel=userEdit.mode==="add"?"รหัสผ่าน":"รหัสผ่านใหม่ (เว้นว่าง = ไม่เปลี่ยน)";
        formHTML=''+
          '<div class="u-form" id="uForm">'+
            '<h3>'+esc(title)+'</h3>'+
            '<div class="grid">'+
              '<label class="field"><span class="f-label">Username</span>'+
                '<input id="u_user" class="f-input mono" value="'+esc(u.username)+'" '+
                (userEdit.mode==="edit"?'readonly':'placeholder="เช่น somsri"')+'></label>'+
              '<label class="field"><span class="f-label">Role</span>'+
                '<select id="u_role" class="f-input">'+
                  '<option value="user"'+(u.role==="user"?" selected":"")+'>User (ส่งคำขอ)</option>'+
                  '<option value="it"'+(u.role==="it"?" selected":"")+'>IT (สิทธิ์เต็ม)</option>'+
                '</select></label>'+
              '<label class="field"><span class="f-label">ชื่อ–นามสกุล</span>'+
                '<input id="u_name" class="f-input" value="'+esc(u.name)+'"></label>'+
              '<label class="field"><span class="f-label">แผนก / ฝ่าย</span>'+
                '<input id="u_dept" class="f-input" value="'+esc(u.department||"")+'"></label>'+
              '<label class="field"><span class="f-label">'+esc(pwLabel)+'</span>'+
                '<input id="u_pw" class="f-input mono" type="text" value="" autocomplete="new-password" placeholder="อย่างน้อย 4 ตัวอักษร"></label>'+
            '</div>'+
            '<div class="u-actions-row">'+
              '<button class="btn-ghost" id="uCancel">ยกเลิก</button>'+
              '<button class="btn-primary" id="uSave">บันทึก</button>'+
            '</div>'+
          '</div>';
      }
    }

    var rows=pgUsers.rows.map(function(u,i){
      var isMe=u.username===me;
      var disabledDel=isMe||(u.role==="it" && users.filter(function(x){return x.role==="it";}).length<=1);
      return '<tr>'+
        '<td class="u-no">'+(pgUsers.start+i+1)+'</td>'+
        '<td class="u-user">'+esc(u.username)+(isMe?'<span class="u-self">คุณ</span>':'')+'</td>'+
        '<td>'+esc(u.name)+'</td>'+
        '<td>'+esc(u.department||"—")+'</td>'+
        '<td>'+userRoleBadge(u.role)+'</td>'+
        '<td class="u-actions">'+
          '<button class="btn-ghost sm" data-act="edit" data-u="'+esc(u.username)+'">แก้ไข</button> '+
          '<button class="btn-ghost sm" data-act="pw"   data-u="'+esc(u.username)+'">รีเซ็ตรหัสผ่าน</button> '+
          '<button class="btn-ghost sm danger" data-act="del" data-u="'+esc(u.username)+'"'+(disabledDel?' disabled title="ลบไม่ได้"':'')+'>ลบ</button>'+
        '</td>'+
      '</tr>';
    }).join("");

    content.innerHTML=
      '<section class="card">'+
        '<div class="card-head"><h2>จัดการผู้ใช้</h2>'+
        '<p>เพิ่ม แก้ไข รีเซ็ตรหัสผ่าน หรือลบบัญชี — ต้องมีผู้ดูแลระบบ (IT) อย่างน้อย 1 คนเสมอ</p></div>'+
        formHTML+
        '<div class="u-toolbar">'+
          '<button class="btn-primary sm" id="uAddBtn">+ เพิ่มผู้ใช้</button>'+
          '<div class="u-count">ทั้งหมด '+users.length+' บัญชี</div>'+
        '</div>'+
        '<table class="utbl"><thead><tr>'+
          '<th class="u-no">#</th><th>Username</th><th>ชื่อ</th><th>แผนก</th><th>Role</th><th class="u-actions">จัดการ</th>'+
        '</tr></thead><tbody>'+rows+'</tbody></table>'+
        pagerHTML('users',pgUsers)+
      '</section>';

    wireUsers();
  }
  function wireUsers(){
    var add=document.getElementById("uAddBtn");
    if(add) add.onclick=function(){ userEdit={mode:"add"}; render(); };

    var f=document.getElementById("uForm");
    if(f){
      document.getElementById("uCancel").onclick=function(){ userEdit=null; render(); };
      document.getElementById("uSave").onclick=function(){
        var get=function(id){return (document.getElementById(id).value||"").trim();};
        var data={
          username:get("u_user"),
          name:get("u_name"),
          department:get("u_dept"),
          role:document.getElementById("u_role").value,
          password:document.getElementById("u_pw").value
        };
        try{
          if(userEdit.mode==="add"){
            window.Auth.create(data).then(function(){
              toast("เพิ่มผู้ใช้ "+data.username+" แล้ว");
              userEdit=null; render();
            }).catch(function(err){ toast(err.message||"บันทึกไม่สำเร็จ"); });
          }else{
            window.Auth.update(userEdit.username,{name:data.name,department:data.department,role:data.role});
            var finish=function(){
              toast("บันทึกการแก้ไข "+userEdit.username+" แล้ว");
              userEdit=null; render();
            };
            if(data.password){
              window.Auth.setPassword(userEdit.username,data.password)
                .then(finish)
                .catch(function(err){ toast(err.message||"บันทึกไม่สำเร็จ"); });
            } else {
              finish();
            }
          }
        }catch(err){ toast(err.message||"บันทึกไม่สำเร็จ"); }
      };
    }

    var tbl=content.querySelector(".utbl");
    if(tbl){
      tbl.addEventListener("click",function(e){
        var b=e.target.closest("button[data-act]");
        if(!b||b.disabled)return;
        var act=b.getAttribute("data-act"), u=b.getAttribute("data-u");
        if(act==="edit"){ userEdit={mode:"edit",username:u}; render(); }
        else if(act==="pw"){
          var p=prompt("กำหนดรหัสผ่านใหม่สำหรับ "+u+" (อย่างน้อย 4 ตัวอักษร)","");
          if(p===null) return;
          window.Auth.setPassword(u,p)
            .then(function(){ toast("รีเซ็ตรหัสผ่าน "+u+" เรียบร้อย"); })
            .catch(function(err){ toast(err.message||"รีเซ็ตไม่สำเร็จ"); });
        }
        else if(act==="del"){
          if(!confirm("ลบผู้ใช้ "+u+" ใช่หรือไม่?")) return;
          try{ window.Auth.remove(u); toast("ลบผู้ใช้ "+u+" แล้ว"); render(); }
          catch(err){ toast(err.message||"ลบไม่สำเร็จ"); }
        }
      });
    }
  }

  // ── backup / restore ────────────────────────────────────
  document.getElementById("backupBtn").onclick=function(){
    var blob=new Blob([JSON.stringify(requests,null,2)],{type:"application/json"});
    var url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download="permission-backup-"+todayISO()+".json";a.click();URL.revokeObjectURL(url);
  };
  var rf=document.getElementById("restoreFile");
  document.getElementById("restoreBtn").onclick=function(){rf.click();};
  rf.onchange=function(e){
    var f=e.target.files[0];if(!f)return;
    var rd=new FileReader();
    rd.onload=function(){
      try{var data=JSON.parse(rd.result);
        if(!Array.isArray(data))throw 0;
        if(confirm("กู้คืนข้อมูลจากไฟล์สำรอง? ข้อมูลปัจจุบันจะถูกแทนที่ทั้งหมด")){
          requests=data;save();toast("กู้คืนข้อมูลแล้ว ("+requests.length+" คำขอ)");render();
        }
      }catch(err){toast("ไฟล์สำรองไม่ถูกต้อง");}
    };
    rd.readAsText(f);e.target.value="";
  };

  // init
  if(window.Auth && window.Auth.onChange){
    window.Auth.onChange(function(s){
      session=s;
      if(!s){ view="form"; editingId=null; }
      render();
    });
  }
  if(window.Auth && window.Auth.onUsersChange){
    window.Auth.onUsersChange(function(){
      if(view==="users") render();
      else {
        var cu=document.getElementById("cUsr");
        if(cu) cu.textContent=window.Auth.list().length;
      }
    });
  }
  render();
})();
