import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar navbar-items">
        <div className="navbar navbar-item logo">Football Leagues</div>
        <div className="navbar navbar-item mode">
          {/* svg here albo component ze zmiana theme */}
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}
