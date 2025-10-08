import React from 'react';
import ProfileCard from './ProfileCard.jsx';


function App() {
  // ✅ ตัวอย่างข้อมูลจริง ใช้งานได้ทันที — แก้เป็นข้อมูลของตัวเองได้
  const myProfile = {
    name: "เบญจศรายุทธ น้อยอุบล",
    studentId: "67543210071-6",
    university: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา",
    major: "วิศวกรรมซอฟต์แวร์",
    year: 2,
    age: 21,
    gpa: 3.75,
    email: "somchai.jaidee@student.university.ac.th",
    hobbies: ["เขียนโค้ด", "เล่นเกม", "ดูหนัง", "ฟังเพลง", "เดินทาง", "ถ่ายภาพ", "ขับรถเล่น"],
    skills: ["JavaScript", "React.js", "HTML/CSS", "Python", "Git", "Node.js"],
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Benjasarayut" },
      { platform: "outlook", url: "https://linkedin.com/in/yourusername" },
    ],
    avatar: "/518335105_1280048433677664_8999837264086943833_n.jpg"
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333', fontSize: '32px', margin: '20px 0' }}>
          🎓 Personal Profile Card
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
        </p>
      </div>

      <ProfileCard profile={myProfile} />
    </div>
  );
}

export default App;
