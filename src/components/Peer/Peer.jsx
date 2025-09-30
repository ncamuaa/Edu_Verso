import React from "react";
import "./Peer.css";
import { useNavigate } from "react-router-dom";

const PeerFeedback = () => {
  const navigate = useNavigate();

  return (
    <div className="peer-container">
     
      <div className="peer-header">
        <button className="back-btn" onClick={() => navigate("/home")}>←</button>
        <h2 className="peer-title">Peer Feedback</h2>
        <button className="search-btn">🔍</button>
      </div>

      <hr className="divider" />

      
      <div className="peer-section">
        <h3 className="peer-subtitle">📂 Pending Review (2)</h3>
        <div className="feedback-card">
          <p className="feedback-title">Zoe’s Essay</p>
          <p className="feedback-text">“Compare plant/mammalian cells in space”</p>
          <div className="feedback-actions">
            <span>Rate ⭐⭐⭐⭐⭐</span>
            <span>Add comments…</span>
          </div>
        </div>
        <button className="see-more">See more →</button>
      </div>

     
      <div className="peer-section">
        <h3 className="peer-subtitle">📩 Receive Feedback</h3>
        <div className="feedback-card">
          <p className="feedback-title">Mission : Space Chemistry Lab</p>
          <p className="feedback-text">“Great hypothesis! Try adding more ….” - Jordan</p>
          <div className="feedback-rating">⭐⭐⭐⭐⭐</div>
        </div>
        <button className="see-more">View All Feedback →</button>
      </div>
    </div>
  );
};

export default PeerFeedback;
