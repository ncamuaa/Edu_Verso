import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./TutorPage.css";
import logo from "../../assets/1logo.png";

export default function TutorPage() {
  const navigate = useNavigate();

  
  const username = localStorage.getItem("username") || "Student";

  const [messages, setMessages] = useState([
    { sender: "bot", text: `Hi ${username}! Need help with Space Biology?` },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim() === "") return;

   
    setMessages((prev) => [...prev, { sender: "user", text: newMessage }]);
    setNewMessage("");

   
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "🤖 Let me explain that for you..." },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="tutor-container">
      
      <div className="tutor-header">
        <img
          src={logo}
          alt="EduVerso Logo"
          className="tutor-logo"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
        <h1>EduVerso</h1>
        <div className="tutor-search" onClick={() => alert("Search clicked")}>
          🔍
        </div>
      </div>

      
      <div className="back-btn" onClick={() => navigate("/home")}>
        ←
      </div>

     
      <h2 className="tutor-title">AI Tutor</h2>

      
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.sender === "bot" && <div className="chat-avatar">🧠</div>}
            <div className="chat-text">{msg.text}</div>
            {msg.sender === "user" && <div className="chat-avatar">👤</div>}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

     
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your question..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>

      
      <div className="related-links">
        <strong>Related:</strong>
        <ul>
          <li>Mitochondria in Space</li>
          <li>Lab Simulation Walkthrough</li>
        </ul>
      </div>
    </div>
  );
}
