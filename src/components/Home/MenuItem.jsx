import React from "react";


export default function MenuItem({ title, icon, colorClass = "gray", onClick }) {
  return (
    <button className={`menu-item ${colorClass}`} onClick={onClick} aria-label={title}>
      <img src={icon} alt={title} className="menu-item-icon" />
      <p className="menu-item-label">{title}</p>
    </button>
  );
}
