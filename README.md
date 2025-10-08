Personal Profile Card — React + Vite (Lab 3.1)

สร้าง Component โปรไฟล์ส่วนตัวแบบ Interactive ด้วย React + Vite
รองรับ Dark/Light Mode, Social Links, Achievement Badges, และ Interactive UI

ผลลัพธ์ตรงตามใบงาน:
✅ ข้อมูลจริง • ✅ Social links คลิกได้ • ✅ Theme Toggle • ✅ Badges ตามเงื่อนไข • ✅ Interactive • ✅ Responsive

✨ ฟีเจอร์หลัก

ProfileCard Component

Avatar แบบอักษรย่อชื่อ

ข้อมูลพื้นฐาน: สาขา, ชั้นปี, อายุ, GPA

Achievement Badges (เช่น เกียรตินิยมเมื่อ GPA ≥ 3.5)

Social Links (GitHub/LinkedIn/Instagram …)

Theme Toggle (Dark/Light)

Interactive

นับ Views เมื่อคลิกที่การ์ด

Favorite hobbies (คลิก toggle 💖)

Contact form ส่งข้อความเดโม

Responsive Design (มือถือ/แท็บเล็ต/เดสก์ท็อป)

โครงสร้างโค้ดอ่านง่าย พร้อมคอมเมนต์

🧰 Tech Stack

React 18 + Vite

CSS (ไม่มีเฟรมเวิร์ก เพิ่ม Tailwind ได้ภายหลัง)

npm / pnpm (แนะนำ pnpm ถ้าเน็ตช้า)

🚀 เริ่มต้นใช้งาน

ต้องมี Node.js ≥ 18 (แนะนำ 20 LTS)

ติดตั้งและรัน (เลือกอย่างใดอย่างหนึ่ง)

# ด้วย pnpm
pnpm install
pnpm dev

# หรือ npm
npm install
npm run dev


เปิดเบราว์เซอร์: http://localhost:5173

ถ้า port ชน: pnpm dev -- --port 5174 หรือ npm run dev -- -- --port 5174

📁 โครงสร้างโปรเจกต์
personal-profile-lab/
├─ public/
├─ src/
│  ├─ App.jsx            # ใส่ข้อมูลโปรไฟล์ (myProfile)
│  ├─ ProfileCard.jsx    # Component หลัก + ฟีเจอร์ interactive
│  ├─ ProfileCard.css    # สไตล์ทั้งหมด (รวม Dark mode)
│  └─ main.jsx           # React root (ไม่มี index.css)
├─ package.json
└─ vite.config.js

🧑‍🎓 วิธีกรอก “ข้อมูลจริง” และ Social Links

เปิดไฟล์ src/App.jsx แล้วแก้ค่าตัวแปร myProfile:

const myProfile = {
  name: "ชื่อจริง นามสกุล",
  studentId: "รหัสนักศึกษา",
  major: "สาขา",
  year: 2,
  age: 20,
  gpa: 3.50,
  email: "your.name@student.university.ac.th",
  hobbies: ["เขียนโค้ด","อ่านหนังสือ","เล่นเกม","ฟังเพลง","ดูหนัง"],
  skills: ["JavaScript","React.js","HTML/CSS","Git","Node.js"],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/Benjasarayut" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { platform: "Instagram", url: "https://instagram.com/yourusername" }
  ],
};


ใส่ลิงก์ด้วย https://… เสมอ เพื่อให้คลิกแล้วเปิดแท็บใหม่ได้ถูกต้อง

🧩 Mapping กับโจทย์ (Challenges)

Challenge 1 — Social Links

กรอก socialLinks ใน App.jsx และแสดงผลใน ProfileCard.jsx

Challenge 2 — Theme Toggle & Achievements

useState → isDarkMode + ปุ่มสลับธีม

Badges แสดงตามเงื่อนไข (gpa, จำนวน skills, hobbies)

Challenge 3 — Interactive

viewCount เพิ่มเมื่อคลิกการ์ด

คลิก hobby → toggle favorite + 💖

ปุ่ม ติดต่อ แสดง Contact Form (เดโมส่งข้อความ)

✅ เช็กลิสต์ส่งงาน (Rubric)

พื้นฐาน (70%)

 ข้อมูลจริงครบถ้วน

 แสดง Social Links ได้

ดี (80%)

 Theme toggle ทำงาน

 Achievement badges ตามเงื่อนไข

ดีเยี่ยม (90–100%)

 ทำครบทั้ง 3 Challenges

 UI/UX สวยงาม + มี animation

 โค้ดสะอาด มีคอมเมนต์

☁️ Deploy (ตัวเลือก)
1) Vercel (ง่ายสุด)

Push โค้ดขึ้น GitHub

เข้า vercel.com
 → New Project → Import repo

Framework: Vite → สร้างโปรเจกต์ → Deploy

2) GitHub Pages

สร้าง build:

npm run build   # หรือ pnpm build


ใช้ Action/gh-pages ตามที่สะดวก (จำเป็นต้องตั้งค่า base ใน vite.config.js ถ้า deploy ที่ subpath)

🧪 สคริปต์ที่ใช้บ่อย
# Dev server
pnpm dev         # หรือ npm run dev

# Build โปรดักชัน
pnpm build       # หรือ npm run build

# Preview ไฟล์ build
pnpm preview     # หรือ npm run preview

🛠️ Troubleshooting

หน้าจอขาว/Import error

ตรวจ src/main.jsx ไม่ต้อง import index.css เดิม

ตรวจชื่อไฟล์ ProfileCard.jsx และ import './ProfileCard.css'

ลิงก์ Social ไม่เปิด

URL ต้องมี https://

พอร์ตชน

pnpm dev -- --port 5174

WSL / npm ETIMEDOUT

ใช้ pnpm install หรือเพิ่ม timeout ชั่วคราว:

npm config set registry https://registry.npmjs.org/
npm config set fetch-timeout 120000
npm config set fetch-retries 5


Push ขึ้น GitHub ไม่ขึ้นไฟล์

ตรวจ git remote -v ให้ชี้รีโปถูก

ถ้าเว็บมี README อยู่ก่อน:

git pull origin main --allow-unrelated-histories
git add .
git commit -m "merge remote README"
git push -u origin main
