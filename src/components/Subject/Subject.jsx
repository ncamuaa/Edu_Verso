import React from "react";
import { useNavigate } from "react-router-dom";
import "./Subject.css";
import logo from "../../assets/1logo.png";

export default function Subject() {
  const navigate = useNavigate();

  return (
    <div className="subject-page">
      
      <div className="header">
        <img src={logo} alt="EduVerso Logo" className="logo" />
        <h1 className="title">EduVerso</h1>
      </div>

     
      <div className="back-wrapper">
        <button className="back-btn" onClick={() => navigate("/quiz-arena")}>
          ←
        </button>
      </div>

      <h2 className="subtitle">📚 Select Your Subject</h2>

      
      <div className="subjects">
       
        <button className="subject-btn english">English</button>

       
        <button
          className="subject-btn math"
          onClick={() => navigate("/game")}
        >
          Math
        </button>
      </div>
    </div>
  );
}
