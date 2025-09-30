import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuizArena.css";
import logo from "../../assets/1logo.png";

export default function QuizArena() {
  const navigate = useNavigate();

  return (
    <div className="quiz-arena">
      
      <div className="header">
        <img src={logo} alt="EduVerso Logo" className="logo" />
        <h1 className="title">EduVerso</h1>
      </div>

     
      <button className="back-btn" onClick={() => navigate("/home")}>
        ← Back
      </button>

     
      <h2 className="subtitle">🌟 Pick Your Grade to Start Your Journey</h2>

     
      <div className="grades">
        <button className="grade-btn grade7" onClick={() => navigate("/subjects")}>Grade 7</button>
        <button className="grade-btn grade8" onClick={() => navigate("/subjects")}>Grade 8</button>
        <button className="grade-btn grade9" onClick={() => navigate("/subjects")}>Grade 9</button>
        <button className="grade-btn grade10" onClick={() => navigate("/subjects")}>Grade 10</button>
      </div>
    </div>
  );
}
