import React from "react";
import "./Splash.css";
import logo from "../../assets/1logo.png";

export default function Splash() {
  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src={logo} alt="EduVerso Logo" className="splash-logo" />
        <h1 className="splash-title">EduVerso</h1>
      </div>
    </div>
  );
}
