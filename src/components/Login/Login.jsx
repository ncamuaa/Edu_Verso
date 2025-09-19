import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/2logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Send username to HomePage
    navigate("/home", { state: { username } });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Title */}
        <h2 className="login-title">Login</h2>

        {/* Form */}
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
          />

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Social Login */}
        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-icons">
            <img src="/icons/google.png" alt="Google" />
            <img src="/icons/apple.png" alt="Apple" />
            <img src="/icons/facebook.png" alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

