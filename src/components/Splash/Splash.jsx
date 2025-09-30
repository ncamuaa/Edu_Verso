import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";
import logo from "../../assets/1logo.png";
import blipbeep from "../../assets/blipbeep.mp3";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    
    const audio = new Audio(blipbeep);
    audio.play().catch((err) => {
      console.log("Autoplay blocked by browser:", err);
    });

    
    const timer = setTimeout(() => {
      navigate("/login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src={logo} alt="EduVerso Logo" className="splash-logo" />
        <h1 className="splash-title">EduVerso</h1>
      </div>
    </div>
  );
}
