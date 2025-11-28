// pages/About.jsx
import React from "react";

function About() {
  // const skills = [
  //   { name: "HTML", percent: "95%", icon: "fab fa-html5" },
  //   { name: "CSS", percent: "90%", icon: "fab fa-css3-alt" },
  //   { name: "JavaScript", percent: "85%", icon: "fab fa-js" },
  //   { name: "React", percent: "80%", icon: "fab fa-react" },
  //   { name: "Git", percent: "85%", icon: "fab fa-git-alt" },
  //   { name: "GitHub", percent: "88%", icon: "fab fa-github" },
  //   { name: "C++", percent: "70%", icon: "fas fa-code" },
  //   { name: "Python", percent: "60%", icon: "fab fa-python" },
  //   { name: "Bootstrap", percent: "90%", icon: "fab fa-bootstrap" },
  //   { name: "Tailwind", percent: "85%", icon: "fas fa-wind" },
  //   { name: "NPM", percent: "75%", icon: "fab fa-npm" },
  //   { name: "Photoshop", percent: "65%", icon: "fas fa-image" },
  // ];

  return (
    <div className="about-page">

      {/* ABOUT TITLE */}
      <h1 className="about-title">About Me</h1>

      {/* ABOUT DESCRIPTION */}
      <div className="about-text-container">
        <p className="about-text">
          Hi, I'm <span className="highlight">Vishwam Desai</span>, a passionate
          <strong> Frontend Developer</strong> and <strong>React.js enthusiast</strong> 
          who loves building modern, fast and interactive web applications.
        </p>

        <p className="about-text">
          I have completed my <strong>BCA</strong> from 
          <span className="highlight"> SS Agrawal College of Commerce & Management</span>.
        </p>

        <p className="about-text">
          Currently, I am pursuing <strong>MSCIT</strong> with specialization in 
          <strong> Mobile & Web Development</strong> from  
          <span className="highlight"> Shree RamKrishna Institute of Computer and Applied Sciences</span>.
        </p>

        <p className="about-text">
          My passion lies in designing clean UI/UX, exploring new technologies, and 
          creating applications that solve real-world problems.
        </p>
      </div>
      {/* EDUCATION SECTION */}
<h2 className="about-subtitle">Education</h2>

<div className="education-container">

  {/* B.Tech / Degree Card */}
  <div className="education-card">
    <h3 className="edu-title">Bachelor of Computer Applications (BCA)</h3>

    <p className="edu-college">
      <i className="fas fa-university edu-icon"></i>
      S.S Agrawal College of Commerce and Management — Navsari, Gujarat
    </p>

    <p className="edu-details">GPA: 6.4 CGPA</p>
    <p className="edu-year">2020 – 2023</p>
  </div>

  {/* HSC (12th) */}
  <div className="education-card">
    <h3 className="edu-title">M.Sc.IT Web and Mobile Technology</h3>

    <p className="edu-college">
      <i className="fas fa-graduation-cap edu-icon"></i>
      Shree RamKrishna Institute of Computer and Applied Sciences — Surat, Gujarat
    </p>

    <p className="edu-details">CGPA : 7.8 CGPA</p>
    <p className="edu-year">2023 - 2025</p>
  </div>

</div>


      

    </div>
  );
}

export default About;
