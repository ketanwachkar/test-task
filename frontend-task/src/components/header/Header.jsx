import React from "react";
import "./header.css"

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-label">
        <span className="profile-pic"></span>
        <h3 className="Inventory-label">Inventory Management System</h3>
      </div>
      <div>
        <span className="header-home-label">Home</span>
      </div>
    </header>
  );
};
