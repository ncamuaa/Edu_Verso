import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/1logo.png";
import announcementImg from "../../assets/announcement.png";

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "User";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <img src={logo} alt="EduVerso Logo" className="nav-logo" />

        {/* Hamburger Menu (3 lines) */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* Side Menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <span className="back-arrow" onClick={() => setMenuOpen(false)}>←</span>
          <img src={logo} alt="EduVerso Logo" className="side-menu-logo" />
          <h2 className="side-menu-title">EduVerso</h2>
        </div>
        <ul>
          <li>🔍 Search</li>
          <li>🏠 Home</li>
          <li>👤 Profile</li>
          <li>📝 Review</li>
        </ul>
      </div>

      {/* Welcome Message */}
      <div className="welcome-card">👋 Welcome back, {username}!</div>

      {/* Status Card */}
      <div className="status-card">
        <span>🔥 Streak: 5 Days</span>
        <span>🎯 XP: 1004</span>
      </div>

      {/* Main Grid */}
      <div className="menu-grid">
        <div className="menu-item gold">
          <img src="/icons/voice.png" alt="Voice Tutor" />
          <p>Voice Tutor</p>
        </div>
        <div className="menu-item blue">
          <img src="/icons/modules.png" alt="Modules" />
          <p>Modules</p>
        </div>
        <div className="menu-item red">
          <img src="/icons/feedback.png" alt="Peer Feedback" />
          <p>Peer Feedback</p>
        </div>
        <div className="menu-item purple">
          <img src="/icons/quiz.png" alt="AI Quiz Arena" />
          <p>AI Quiz Arena</p>
        </div>
        <div className="menu-item cyan announcement-box">
          <img src={announcementImg} alt="Announcement" className="announcement-img" />
          <p className="announcement-text">Announcement</p>
        </div>
        <div className="menu-item gray">
          <img src="/icons/settings.png" alt="Settings" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

