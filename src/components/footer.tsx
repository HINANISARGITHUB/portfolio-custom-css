import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedinIn, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    
    <section className="footer">
      <h1 className="footer-heading">Contact Me</h1>

      <div className="contact-section">
        <div className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <span className="contact-text">hinanisar@gmail.com</span>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <span className="contact-text">(021)555-0124</span>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-card">
          <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
          <span className="contact-text">Karachi, Pakistan</span>
        </div>
      </div>

      <div className="contact-section">
        <div className="divider"></div>
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
        <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
        <FontAwesomeIcon icon={faGithub} className="social-icon" />
        <div className="divider divider-lg"></div>
      </div>

      <p className="footer-thanks">Thanks for Scrolling</p>
    </section>
   
  );
};

export default Footer;
