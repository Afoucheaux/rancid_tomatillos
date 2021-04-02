import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/contact" className="footer-btn" data-cy="contact-button">CONTACT</Link>
    </footer>
  )
}

export default Footer
