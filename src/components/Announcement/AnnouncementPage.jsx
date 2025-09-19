import React from "react";
import "./announcement.css";

const AnnouncementPage = () => {
  const trending = [
    {
      icon: "🚀",
      title: "NASA Collab: New Astrobiology Missions",
      subtitle: "Try our new simulation tools →",
    },
  ];

  const upcoming = [
    {
      icon: "📅",
      title: "Live Q&A: Space Med Experts (Jun 15)",
      subtitle: "[Remind Me]",
    },
  ];

  return (
    <div className="announcement-container">
      {/* Header */}
      <header className="announcement-header">
        <h1 className="app-title">
          <span role="img" aria-label="rocket">🚀</span> EduVerso News
        </h1>
      </header>

      {/* Trending Section */}
      <section className="section">
        <h2 className="section-title">
          <span role="img" aria-label="fire">🔥</span> TRENDING
        </h2>
        {trending.map((item, idx) => (
          <div key={idx} className="announcement-card">
            <p className="card-title">{item.icon} {item.title}</p>
            <p className="card-subtitle">{item.subtitle}</p>
          </div>
        ))}
      </section>

      {/* Upcoming Section */}
      <section className="section">
        <h2 className="section-title">
          <span role="img" aria-label="calendar">📅</span> UPCOMING
        </h2>
        {upcoming.map((item, idx) => (
          <div key={idx} className="announcement-card">
            <p className="card-title">{item.icon} {item.title}</p>
            <p className="card-subtitle">{item.subtitle}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer-link">
        <a href="/announcements">See All Announcements →</a>
      </footer>
    </div>
  );
};

export default AnnouncementPage;