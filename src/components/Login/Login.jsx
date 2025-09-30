import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/2logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    
    const streakKey = `streak_${username}`;
    const xpKey = `xp_${username}`;

    let storedStreak = parseInt(localStorage.getItem(streakKey)) || 0;
    let storedXp = parseInt(localStorage.getItem(xpKey)) || 0;

   
    storedStreak += 1;
    storedXp += 50;

    
    localStorage.setItem(streakKey, storedStreak);
    localStorage.setItem(xpKey, storedXp);

    
    localStorage.setItem("username", username);

    navigate("/home");
    
const randomGrade = Math.floor(Math.random() * 4) + 7; 
localStorage.setItem("grade", randomGrade);

  };

  return (
    <div className="login-container">
      <div className="login-box">
        
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>

        
        <h2 className="login-title">Login</h2>

        
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Email/Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        
        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/747.png"
              alt="Apple"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
