import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (data.success) alert("Message sent & saved to database!");
    else alert("Error: " + data.error);
  };

  return (
    <div className="contact-page">

      {/* FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" className="contact-input" onChange={handleChange} />
        <input name="emailOrPhone" type="text" placeholder="Your Email or Phone" className="contact-input" onChange={handleChange} />
        <input name="subject" type="text" placeholder="Subject" className="contact-input" onChange={handleChange} />
        <textarea name="message" rows="5" placeholder="Your Message..." className="contact-textarea" onChange={handleChange}></textarea>

        <button type="submit" className="contact-btn">🚀 Send Message</button>
      </form>

    </div>
  );
};

export default Contact;
