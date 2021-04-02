import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <ContactCard />
      </div>
      <Footer />
    </>
  )
}

export default ContactPage;
