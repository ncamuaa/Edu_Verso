import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import logo from "../../assets/1logo.png";

export default function Profile() {
  const navigate = useNavigate();

 
  const username = localStorage.getItem("username") || "Guest";
  const streak = localStorage.getItem("streak") || 0;
  const xp = localStorage.getItem("xp") || 0;
  const grade = localStorage.getItem("grade") || "7"; 

  
  const avatarMap = {
    Hai: "https://cdn-icons-png.flaticon.com/512/921/921071.png",
    Nadine: "https://cdn-icons-png.flaticon.com/512/168/168734.png",
    Francis: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    Guest: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  };

  const avatar = avatarMap[username] || avatarMap["Guest"];

  const handleBack = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("grade");
    navigate("/");
  };

  return (
    <div className="profile-container">
      
      <div className="profile-navbar">
        <span className="back-arrow" onClick={handleBack}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
            alt="Back"
            style={{ width: "20px", height: "20px" }}
          />
        </span>
        <img src={logo} alt="EduVerso Logo" className="profile-logo" />
        <h2 className="profile-title">Profile</h2>
      </div>

     
      <div className="profile-card">
        <img src={avatar} alt="Profile Avatar" className="profile-avatar" />
        <h2>{username}</h2>
        <p>Email: {username.toLowerCase()}@lcup.edu.ph</p>
        <p>Grade {grade}</p>

        <div className="profile-sections">
          <div className="section">
            <h3>🏆 Achievements</h3>
            <p>Level: {Math.floor(xp / 500) + 1} Explorer</p>
            <p>Current Streak: {streak} days</p>
            <p>Top Badge: Galactic Scholar</p>
          </div>
          <div className="section">
            <h3>📊 Stats</h3>
            <p>XP: {xp}</p>
            <p>Quizzes Completed: 23</p>
            <p>Missions Finished: 18</p>
            <p>Peer Reviews Given: 12</p>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
