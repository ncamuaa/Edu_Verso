import React from "react";

/**
 * Props:
 * - title: string (label)
 * - icon: string (src path, e.g. "/icons/voice.png")
 * - colorClass: string (one of: "gold","blue","red","purple","cyan","gray")
 * - onClick: function
 */
export default function MenuItem({ title, icon, colorClass = "gray", onClick }) {
  return (
    <button className={`menu-item ${colorClass}`} onClick={onClick} aria-label={title}>
      <img src={icon} alt={title} className="menu-item-icon" />
      <p className="menu-item-label">{title}</p>
    </button>
  );
}
