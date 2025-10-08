เป้าหมาย & เวลา

Lab 3.1 – Personal Profile Component (React + JSX)

เวลา 30 นาที → Follow Along 15 นาที + Challenge 15 นาที

ฝึก: JSX, Props, useState, Conditional Rendering, Lists, Event Handling

สิ่งที่ต้องทำให้เสร็จ

การ์ดโปรไฟล์ที่มี:

```bash

✅ ข้อมูลจริง (ชื่อ, รหัส, สาขา, ปี, อายุ, GPA, email)

✅ Social links คลิกได้

✅ Dark/Light theme toggle

✅ Achievement badges ตามเงื่อนไข (เช่น GPA ≥ 3.5)

✅ Interactive (นับ Views, Favorite hobbies, Contact form)

✅ Responsive บนมือถือ

```
โครงสร้างไฟล์ที่ใช้

```

src/main.jsx – mount แอป

src/App.jsx – เก็บ myProfile/sampleProfile และ render <ProfileCard />

src/ProfileCard.jsx – UI โปรไฟล์ + โค้ด interactive

src/ProfileCard.css – สไตล์รวม Dark mode

```

ขั้นตอนหลัก (Follow Along)

สร้างโปรเจกต์ Vite

```

npm create vite@latest personal-profile-lab -- --template react
cd personal-profile-lab
npm install
npm run dev

```

ลบไฟล์ CSS ที่ไม่ใช้: rm src/App.css src/index.css

แก้ src/main.jsx ให้ render <App /> (ไม่มี import index.css)

เพิ่มไฟล์สไตล์ src/ProfileCard.css (ฐานพร้อม Responsive)

สร้าง src/ProfileCard.jsx (avatar จากชื่อ, ข้อมูลพื้นฐาน, hobbies/skills, ปุ่ม Contact + alert)

แก้ src/App.jsx ใส่ sampleProfile แล้วส่ง props ให้ <ProfileCard />

เมื่อรันแล้วต้องเห็น: การ์ดโปรไฟล์, คลิก skill มี alert, ปุ่ม Contact ขึ้นอีเมล, Responsive ทำงาน

Challenge (ทำเอง)

Social Links

เพิ่ม socialLinks ในโปรไฟล์

.map() แสดงลิงก์ในการ์ด + สไตล์ social-link

Theme Toggle & Badges

ใช้ useState ทำ isDarkMode

ปุ่ม toggle ใน header

แสดง badges ตามเงื่อนไข (GPA/จำนวน skills ฯลฯ)

Interactive เพิ่มเติม

View counter เมื่อคลิกการ์ด

Favorite hobbies (toggle + 💖)

ปุ่ม Contact → แสดง contact form (แทน alert)

เกณฑ์ประเมิน

```

70%: ทำ Challenge 1 + แสดงข้อมูลครบ

80%: + ทำ Theme toggle & Badges

90–100%: ทำครบทั้ง 3, UI สวย/มีแอนิเมชัน, โค้ดสะอาด/มีคอมเมนต์

```

สิ่งที่ได้เรียนรู้

```

useState, การจัดการ event/หยุด bubbling, conditional rendering

การใช้ map / includes / filter, การจัดการ className แบบไดนามิก

CSS Grid/Flex + Responsive

คำสั่งรันเร็ว
npm install && npm run dev
# หรือ pnpm install && pnpm dev
# เปิด http://localhost:5173
