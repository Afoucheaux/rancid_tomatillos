import React from "react";
import "./Header.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ hide}) => {
  return (
    <header className="header">
      <h1 className="header-title"><span className="header-title-letter">R</span>OTTON <span className="header-title-letter">T</span>OMATILLOS</h1>
      <div>
        <Link to="/" className={`home-btn ${hide}`}>Home</Link>
      </div>
    </header>
  )
}

export default Header;

Header.propTypes = {
  hide: PropTypes.string
}
