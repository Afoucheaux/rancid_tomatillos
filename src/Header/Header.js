import React from "react";
import "./Header.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchFilter from "../SearchFilter/SearchFilter";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header-title" data-cy="title"><span className="header-title-letter">R</span>ANCID <span className="header-title-letter">T</span>OMATILLOS</h1>
      <SearchFilter hideSearch={props.hideSearch} displaySearch={props.displaySearch}/>
      <div>
        <Link to="/" className={`home-btn ${props.hideHome}`} data-cy="home-button">Home</Link>
      </div>
    </header>
  )
}

export default Header;

Header.propTypes = {
  hide: PropTypes.string
}
