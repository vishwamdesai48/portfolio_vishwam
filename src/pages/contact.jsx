import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* TITLE */}
      <h1 className="contact-title">
        Let’s Connect & Collaborate <span className="emoji">🤝</span>
      </h1>

      {/* SUBTEXT */}
      <p className="contact-subtext">
        Whether it’s a new project, a collaboration, or just to say hi —  
        I’d love to hear from you!
      </p>

      {/* SOCIAL ICONS */}
      <div className="contact-socials">
        <a href="https://github.com" target="_blank" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="mailto:test@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/00000000" target="_blank" className="social-icon">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com" target="_blank" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" className="social-icon">
          <FaFacebook />
        </a>
      </div>

      {/* CONTACT FORM */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input
          type="text"
          placeholder="Your Email or Phone"
          className="contact-input"
        />
        <input type="text" placeholder="Subject" className="contact-input" />

        <textarea
          rows="5"
          placeholder="Your Message..."
          className="contact-textarea"
        ></textarea>

        <button type="submit" className="contact-btn">
          🚀 Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
