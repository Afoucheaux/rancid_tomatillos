import React, { Component } from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Rotton Tomatillos</h1>
      <div>
        <button className="home-btn">Home</button>
      </div>
    </header>
  )
}

export default Header;