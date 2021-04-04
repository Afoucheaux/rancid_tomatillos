import React from "react";
import "./ContactCard.css";
import aaron from "../aaron.jpg";
import elizabeth from "../elizabeth.png";

const ContactCard = () => {
  return (
    <section className="contact-card">
      <article className="profile">
        <img className="profile-pic" src={elizabeth} alt=" of E.H." />
        <h3>Elizabeth Hahn</h3>
        <a className="pro-card" href="https://www.linkedin.com/in/elizabeth-s-hahn/">Elizabeth-Linkedin</a>
        <a className="pro-card" href="https://github.com/elizhahn">Elizabeth-GitHub</a>
      </article>
      <article className="profile">
        <img className="profile-pic"src={aaron} alt="of A.F." />
        <h3>Aaron Foucheaux</h3>
        <a className="pro-card" href="https://www.linkedin.com/in/aaron-foucheaux-891626207/">Aaron-Linkedin</a>
        <a className="pro-card" href="https://github.com/Afoucheaux">Aaron-GitHub</a>
      </article>
    </section>
  )
}

export default ContactCard;
