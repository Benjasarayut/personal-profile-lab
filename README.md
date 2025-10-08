## สรุปโครงการ (TL;DR)

- **Lab 3.1 – Personal Profile Card** ด้วย **React + Vite**
- ฝึกใช้ **JSX, Props, useState, Conditional Rendering, Lists, Event Handling**
- **ผลลัพธ์หลัก**  
  ✅ ข้อมูลส่วนตัวจริง • ✅ Social links คลิกได้ • ✅ Dark/Light toggle  
  ✅ Achievement badges ตามเงื่อนไข • ✅ Interactive (views, favorite hobbies, contact form)  
  ✅ Responsive (มือถือ/แท็บเล็ต)

**วิธีรันเร็ว**
```bash
pnpm install && pnpm dev   # หรือ npm install && npm run dev
# เปิด http://localhost:5173
แก้ข้อมูลจริง

แก้ที่ src/App.jsx → ตัวแปร myProfile (ชื่อ, รหัส, email, hobbies, skills, socialLinks)

ไฟล์หลักที่เกี่ยวข้อง

src/ProfileCard.jsx – คอมโพเนนต์โปรไฟล์ + ฟีเจอร์ interactive

src/ProfileCard.css – สไตล์ + โหมดมืด

src/App.jsx – ใส่ข้อมูลโปรไฟล์ของผู้ทำ

src/main.jsx – React root (ไม่ใช้ index.css)

สิ่งที่ได้เรียนรู้

การจัดการ state เบื้องต้นด้วย useState

การเรนเดอร์ตามเงื่อนไข และการแม็ปอาเรย์ (map, includes, filter)

การจัดการ event และหยุด event bubbling (stopPropagation)

การจัดการ className แบบไดนามิก และทำ Responsive ด้วย CSS Grid/Flex
