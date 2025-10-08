import React, { useMemo, useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {
  // ----- Helpers -----
  const getInitials = (name) =>
    name
      .trim()
      .split(/\s+/)
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  // ----- States (Challenge 2 & 3) -----
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [form, setForm] = useState({ fromName: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const cardClassName = `profile-card ${isDarkMode ? 'dark-mode' : ''}`;

  // สำหรับปุ่มธีม: ใช้ useMemo เพื่อไม่คำนวณซ้ำ
  const themeEmoji = useMemo(() => (isDarkMode ? '🌙' : '☀️'), [isDarkMode]);

  // ----- Handlers -----
  const toggleTheme = (e) => {
    e.stopPropagation();
    setIsDarkMode((v) => !v);
  };

  const handleCardClick = () => {
    setViewCount((c) => c + 1);
  };

  const toggleFavoriteHobby = (hobby) => {
    setFavoriteHobbies((prev) =>
      prev.includes(hobby) ? prev.filter((h) => h !== hobby) : [...prev, hobby]
    );
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    setShowContactForm((v) => !v);
  };

  const handleSkillClick = (e, skill) => {
    e.stopPropagation();
    alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
  };

  const validateForm = () => {
    const errs = {};
    if (!form.fromName.trim()) errs.fromName = 'กรุณาใส่ชื่อผู้ติดต่อ';
    if (!form.message.trim()) errs.message = 'กรุณาใส่ข้อความ';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitContact = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!validateForm()) return;

    alert(
      `ส่งข้อความถึง ${profile.name} สำเร็จ!\nจาก: ${form.fromName}\nข้อความ: ${form.message}\n(ระบบเดโม)`
    );
    setShowContactForm(false);
    setForm({ fromName: '', message: '' });
    setFormErrors({});
  };

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      {/* View counter */}
      <div className="view-counter" aria-label="View counter">
        👁️ Views: {viewCount}
      </div>

      {/* Header */}
      <div className="profile-header">
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {themeEmoji}
        </button>

        <div className="profile-avatar">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          ) : (
            getInitials(profile.name)
          )}
        </div>

        <h1 className="profile-name">{profile.name}</h1>
        <div className="student-id">{profile.studentId}</div>
        {profile.university && (
  <div className="student-id" style={{ marginTop: 8 }}>
    {profile.university}
  </div>
)}

      </div>

      {/* Basic info */}
      <div className="profile-info">
        <div className="info-item">
          <div className="info-label">สาขา</div>
          <div className="info-value">{profile.major}</div>
        </div>
        <div className="info-item">
          <div className="info-label">ชั้นปี</div>
          <div className="info-value">{profile.year}</div>
        </div>
        <div className="info-item">
          <div className="info-label">อายุ</div>
          <div className="info-value">{profile.age} ปี</div>
        </div>
        <div className="info-item">
          <div className="info-label">เกรด</div>
          <div className="info-value">
            {Number(profile.gpa).toFixed(2)}
            {profile.gpa >= 3.5 && ' 🌟'}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="profile-section">
        <h3>🏆 Achievements</h3>
        <div className="achievements">
          {profile.gpa >= 3.5 && <span className="achievement-badge">🌟 เกียรตินิยม</span>}
          {profile.skills?.length >= 5 && <span className="achievement-badge">💪 Multi-skilled</span>}
          {profile.hobbies?.length >= 5 && <span className="achievement-badge">🎯 Active Learner</span>}
        </div>
      </div>

      {/* Hobbies */}
      <div className="profile-section">
        <h3>🎯 งานอดิเรก</h3>
        <ul className="hobbies-list">
          {profile.hobbies.map((hobby, idx) => {
            const fav = favoriteHobbies.includes(hobby);
            return (
              <li
                key={idx}
                className={`hobby-item ${fav ? 'favorite' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavoriteHobby(hobby);
                }}
                title={fav ? 'คลิกเพื่อลบออกจาก Favorite' : 'คลิกเพื่อเพิ่มเป็น Favorite'}
              >
                {hobby} {fav && '💖'}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Skills */}
      <div className="profile-section">
        <h3>💻 ทักษะ</h3>
        <div className="skills">
          {profile.skills.map((skill, index) => (
            <div
              key={index}
              className="skill-tag"
              onClick={(e) => handleSkillClick(e, skill)}
              title="คลิกเพื่อโชว์ข้อความ"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      {profile.socialLinks && profile.socialLinks.length > 0 && (
        <div className="profile-section">
          <h3>🌐 Social Media</h3>
          <div className="social-links">
            {profile.socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                className="social-link"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                title={s.platform}
              >
                <span className="social-dot" aria-hidden="true" />
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Contact */}
      <button className="contact-button" onClick={handleContactClick}>
        📧 ติดต่อ {profile.name}
      </button>

      {showContactForm && (
        <div
          className="contact-form"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
        >
          <h4>ส่งข้อความถึง {profile.name}</h4>
          <form onSubmit={submitContact}>
            <label>
              ชื่อผู้ติดต่อ
              <input
                type="text"
                value={form.fromName}
                onChange={(e) => setForm((f) => ({ ...f, fromName: e.target.value }))}
                placeholder="เช่น สมหญิง"
              />
              {formErrors.fromName && <span className="error">{formErrors.fromName}</span>}
            </label>

            <label>
              ข้อความ
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="พิมพ์ข้อความของคุณที่นี่…"
              />
              {formErrors.message && <span className="error">{formErrors.message}</span>}
            </label>

            <div className="contact-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowContactForm(false);
                }}
              >
                ยกเลิก
              </button>
              <button type="submit" className="btn-primary">
                ส่งข้อความ
              </button>
            </div>
            <p className="contact-note">* เดโม: ยังไม่ส่งอีเมลจริง</p>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
