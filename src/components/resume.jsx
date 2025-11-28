import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
 // FaLaptopCode,
  FaBrain,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./resume.css";
import ResumePDF from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="resume-container">

      {/* ----------- Page Heading ----------- */}
      <h1 className="page-title">Resume</h1>
      <p className="page-subtitle">A quick glance at my journey.</p>

      {/* ----------- Profile Section ----------- */}
      <div className="profile-section">
        <div>
          <h2 className="name-title">👨‍💻 VISHWAM D. DESAI</h2>
          <p className="education-line">
            Msc.IT in Web and Mobile Technology | S.R.K.I, Sarvajanik University
          </p>

          <p className="info-line">
            <FaMapMarkerAlt /> Navsari, Gujarat
          </p>
          <p className="info-line">
            <FaEnvelope /> vishwamdesai48@gmail.com
          </p>
          <p className="info-line">
            <FaPhone /> +91 7228889053
          </p>
        </div>

        {/* ----------- Summary Box ----------- */}
        <div className="summary-box">
          <h3>Professional Summary:</h3>
          <p>
            I am a skilled Frontend Developer with a passion for creating
            user-friendly and visually appealing web applications.
             Additionally, I have experience with data analytics tools
            such as Google Analytics, and am familiar with tracking and analyzing
            website data to inform business decisions. I am committed to staying
            up-to-date with the latest industry trends and technologies to deliver
            cutting-edge solutions.
          </p>
        </div>
      </div>

      {/* ----------- Education Section ----------- */}
      <div className="section-block">
        <h2 className="section-title">
          <FaGraduationCap /> Education
        </h2>

        <p className="edu-title">
          Bachelor of Computer Applications (BCA) — S.S Agrawal College of Commerce and Management (2020–2023)
        </p>
        <p>GPA: 6.4</p>

        <p className="edu-title">
          M.Sc.IT Web and Mobile Technology — Shree RamKrishna Institute of Computer and Applied Sciences (2023–2025)
        </p>
        <p>GPA: 7.8</p>
      </div>

      {/* ----------- Projects Section ----------- */}
      {/* <div className="section-block">
        <h2 className="section-title">
          <FaLaptopCode /> Projects
        </h2>

        <ol className="project-list">
          <li>
            Breast Cancer Detection using YOLO & CNN
          </li>
          <li>
            DocuChat: Document Q&A Chatbot (Gemini API)
          </li>
          <li>
            Indian Sign Language Interpreter (In Progress)
          </li>
          <li>
            Mental Health Analyzer
          </li>
        </ol>
      </div> */}

      {/* ----------- Skills Section ----------- */}
      <div className="section-block">
        <h2 className="section-title">
          <FaBrain /> Skills
        </h2>

        <div className="skills-grid">
          {[
            "Python", "UI/UX", "Figma", "SQL", "Data Analytics", "Data Visualization", "Scikit-learn",
            "PHP", "Numpy", "Pandas", "PowerBI", "React", "MySQL", "MongoDB",
            "Git", "Excel", "Problem Solving", "Teamwork", "Creativity"
          ].map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* ----------- Embedded Resume PDF ----------- */}
      <div className="pdf-container">
        {/* <embed
          src="/src/resume.pdf"
          type="application/pdf"
          className="resume-pdf"
        ></embed> */}
        <embed src={ResumePDF} type="application/pdf" className="resume-pdf"></embed>

        <a href="/resume.pdf" download className="download-btn">
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* ----------- Footer Social Icons ----------- */}
      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Resume;



