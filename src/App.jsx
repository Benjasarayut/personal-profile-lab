import React from 'react';
import ProfileCard from './ProfileCard.jsx';

function App() {
  // ✅ ตัวอย่างข้อมูลจริง ใช้งานได้ทันที — แก้เป็นข้อมูลของตัวเองได้
  const myProfile = {
    name: "สมชาย ใจดี",
    studentId: "66130500001",
    major: "วิศวกรรมซอฟต์แวร์",
    year: 3,
    age: 21,
    gpa: 3.75,
    email: "somchai.jaidee@student.university.ac.th",
    hobbies: ["เขียนโค้ด", "เล่นเกม", "ดูหนัง", "ฟังเพลง", "อ่านหนังสือ"],
    skills: ["JavaScript", "React.js", "HTML/CSS", "Python", "Git", "Node.js"],
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Benjasarayut" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
      { platform: "Instagram", url: "https://instagram.com/yourusername" },
    ],
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
