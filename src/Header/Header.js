import React, { Component } from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header-title"><span class="header-title-letter">R</span>OTTON <span class="header-title-letter">T</span>OMATILLOS</h1>
      <div>
        <button onClick={props.onHomeClick} className={`home-btn ${props.hide}`}>Home</button>
      </div>
    </header>
  )
}

export default Header;
