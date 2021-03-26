import React, { Component } from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header-title">Rotton Tomatillos</h1>
      <div>
        <button onClick={props.onHomeClick} className={`home-btn ${props.hide}`}>Home</button>
      </div>
    </header>
  )
}

export default Header;
