import React from "react";
import "../App.css";
import profileImg from "../assets/profile.jpg"; // add your own image
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Home() {
  return (
    <section id="home" className="home-section">
      {/* LEFT SIDE IMAGE */}
      <div className="home-left">
        <div className="profile-wrapper">
          <img src={profileImg} alt="Profile" className="profile-pic" />
        </div>
      </div>

      {/* RIGHT SIDE TEXT CONTENT */}
      <div className="home-right">
        <h1 className="intro-title">
          Hi, I'm <span className="highlight">Vishwam Desai</span>
        </h1>

        <p className="subtitle">
          User Interface Designer | Frontend Developer | Tech Explorer
        </p>

    <div className="tag-container">
  <span className="tag" data-percent="80%">Data Science Enthusiast</span>
  <span className="tag" data-percent="90%">React Developer</span>
  <span className="tag" data-percent="75%">UI/UX Designer</span>
  <span className="tag" data-percent="85%">Data Analyst</span>
  <span className="tag" data-percent="70%">Developer</span>
</div>


        {/* INFO CARDS */}
        <div className="info-card-container">
          <div className="info-card">
            <h4>📍 Location</h4>
            <p>Navsari, Gujarat, India</p>
          </div>

          <div className="info-card">
            <h4>🧠 Expertise</h4>
            <p>React Developer, Problem Solving</p>
          </div>

          <div className="info-card">
            <h4>📧 Contact</h4>
            <p>vishwamdesai48@gmail.com</p>
          </div>
        </div>

        {/* SOCIAL ICONS */}
       <div className="social-section">
  <h2 className="social-title">Connect with me</h2>

  <div className="social-icons">

    <a href="https://github.com/vishwamdesai48" target="_blank" className="social-circle">
      <i className="fab fa-github"></i>
    </a>

    <a href="https://www.linkedin.com/in/vishwam-desai48/" target="_blank" className="social-circle">
      <i className="fab fa-linkedin-in"></i>
    </a>

    <a href="mailto:yourmail@gmail.com" className="social-circle">
      <i className="fas fa-envelope"></i>
    </a>

    <a href="https://wa.me/" target="_blank" className="social-circle">
      <i className="fab fa-whatsapp"></i>
    </a>

    <a href="https://www.instagram.com/thunder_boy_48/?__pwa=1" target="_blank" className="social-circle">
      <i className="fab fa-instagram"></i>
    </a>

    <a href="https://facebook.com/" target="_blank" className="social-circle">
      <i className="fab fa-facebook-f"></i>
    </a>

  </div>
</div>

      </div>
    </section>
  );
}
