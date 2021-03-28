import React from "react";
import "./Header.css";
import PropTypes from "prop-types" 

const Header = ({ hide, onHomeClick }) => {
  return (
    <header className="header">
      <h1 className="header-title"><span className="header-title-letter">R</span>OTTON <span className="header-title-letter">T</span>OMATILLOS</h1>
      <div>
        <button onClick={onHomeClick} className={`home-btn ${hide}`}>Home</button>
      </div>
    </header>
  )
}

export default Header;

Header.propTypes = {
  onHomeClick: PropTypes.func,
  hide: PropTypes.string
}
