import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/1logo.png";

export default function Home() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [user, setUser] = useState({
    username: "User",
    streak: 0,
    xp: 0,
    level: 1,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "User";

    
    const streakKey = `streak_${storedUsername}`;
    const xpKey = `xp_${storedUsername}`;

    const storedStreak = parseInt(localStorage.getItem(streakKey)) || 0;
    const storedXp = parseInt(localStorage.getItem(xpKey)) || 0;

    const level = Math.floor(storedXp / 200) + 1;

    setUser({
      username: storedUsername,
      streak: storedStreak,
      xp: storedXp,
      level,
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username"); 
    navigate("/login");
  };

  const xpForNextLevel = 200;
  const currentXpInLevel = user.xp % xpForNextLevel;
  const progressPercent = (currentXpInLevel / xpForNextLevel) * 100;

  return (
    <div className="home-container">
      
      <nav className="navbar">
        <button className="menu-btn" onClick={() => setSideMenuOpen(true)}>☰</button>
        <div className="nav-center">
          <img src={logo} alt="Logo" className="nav-logo" />
          <span className="brand">EduVerso</span>
        </div>
      </nav>

     
      {sideMenuOpen && (
        <>
          <div className="overlay" onClick={() => setSideMenuOpen(false)}></div>
          <div className="side-menu open left">
            <button className="close-btn" onClick={() => setSideMenuOpen(false)}>✕</button>
            <div className="menu-header">
              <div className="menu-avatar"></div>
              <div>
                <h4>{user.username}</h4>
                <p>Level {user.level}</p>
              </div>
            </div>
            <ul className="menu-list">
              <li onClick={() => navigate("/home")}>🏠 Dashboard</li>
              <li onClick={() => navigate("/profile")}>👤 Profile</li>
              <li onClick={() => navigate("/tutor")}>🎤 Voice Tutor</li>
              <li onClick={() => navigate("/peer-feedback")}>💬 Peer Feedback</li>
              <li onClick={() => navigate("/announcement")}>📢 Announcement</li>
              <li onClick={() => navigate("/settings")}>⚙️ Settings</li>
              <li onClick={handleLogout}>🚪 Logout</li>
            </ul>
          </div>
        </>
      )}

      
      <div className="welcome-card">👋 Welcome back, {user.username}!</div>

     
      <div className="stats-row">
        <div className="stat-item">🔥 Streak: {user.streak} </div>
        <div className="stat-item">🎯 XP: {user.xp}</div>
      </div>

      <div className="xp-box">
        <div className="xp-progress">
          <div className="xp-progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <div className="xp-level">
          {currentXpInLevel}/{xpForNextLevel} XP · Level {user.level}
        </div>
      </div>

      <hr className="divider" />

      
      <div className="menu-grid">
        <div className="menu-item gold" onClick={() => navigate("/tutor")}>
          🎤 <p>Voice Tutor</p>
        </div>
        <div className="menu-item blue">
          📚 <p>Modules</p>
        </div>
        <div className="menu-item red" onClick={() => navigate("/peer-feedback")}>
          💬 <p>Peer Feedback</p>
        </div>
        <div className="menu-item purple" onClick={() => navigate("/quiz-arena")}>
          🧠 <p>AI Quiz Arena</p>
        </div>
        <div className="menu-item cyan" onClick={() => navigate("/announcement")}>
          📢 <p>Announcement</p>
        </div>
        <div className="menu-item green" onClick={() => navigate("/settings")}>
          ⚙️ <p>Settings</p>
        </div>
      </div>
    </div>
  );
}
