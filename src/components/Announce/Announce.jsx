import React from "react";
import { useNavigate } from "react-router-dom";
import "./Announce.css";
import logo from "../../assets/1logo.png";

export default function AnnouncementPage() {
  const navigate = useNavigate();

  return (
    <div className="announcement-container">
     
      <div className="announcement-header">
        <img
          src={logo}
          alt="EduVerso Logo"
          className="announcement-logo"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
        <h1>EduVerso</h1>
        <div className="announcement-search" onClick={() => alert("Search clicked")}>
          🔍
        </div>
      </div>

      
      <div className="back-btn" onClick={() => navigate("/home")}>
        ←
      </div>

      
      <h2 className="announcement-title">📢 EduVerso News</h2>
      <hr className="divider" />

      
      <div className="announcement-section">
        <h3>🔥 TRENDING</h3>
        <div className="announcement-card">
          🚀 NASA Collab: New Astrobiology Missions  
          <br />
          <span className="small-text">Try our new simulation tools →</span>
        </div>
      </div>

      
      <div className="announcement-section">
        <h3>📅 UPCOMING</h3>
        <div className="announcement-card">
          🧑‍🚀 Live Q&amp;A: Space Med Experts (Jun 15)  
          <br />
          <span className="small-text">[Remind Me]</span>
        </div>
      </div>

      
      <div
        className="see-all"
        onClick={() => alert("Navigate to full announcements")}
      >
        See All Announcements →
      </div>
    </div>
  );
}
