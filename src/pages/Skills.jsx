import React from "react";
import { Link } from "react-router-dom";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "fa-brands fa-html5", percent: "82%" },
  { name: "UI/UX", icon: "fa-solid fa-bezier-curve", percent: "90%" },
  { name: "BOOTSTRAP", icon: "fa-brands fa-bootstrap", percent: "81%" },
  { name: "POWER BI", icon: "fa-solid fa-chart-pie", percent: "85%" },
  { name: "JAVASCRIPT", icon: "fa-brands fa-js", percent: "70%" },
  { name: "REACT", icon: "fa-brands fa-react", percent: "85%" },
  { name: "GIT", icon: "fa-brands fa-git-alt", percent: "70%" },
  { name: "GITHUB", icon: "fa-brands fa-github", percent: "85%" },
  // { name: "C++", icon: "fa-solid fa-code", percent: "70%" },
  { name: "FIGMA", icon: "fa-brands fa-figma", percent: "89%" },
  { name: "NPM", icon: "fa-brands fa-npm", percent: "70%" },
  { name: "SQL", icon: "fa-solid fa-database", percent: "82%" },
  { name: "DATA VISUALIZATION", icon: "fa-solid fa-chart-bar", percent: "95%" },
  { name: "PHOTOSHOP", icon: "fa-solid fa-image", percent: "95%" },
  { name: "PYTHON", icon: "fa-brands fa-python", percent: "75%" },
  { name: "NODEJS", icon: "fa-brands fa-node", percent: "85%" },
];

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skill-container">
        <h1 className="skills-title">My Skillset</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Link to="#" key={index} className="skill-card">
              <i className={`${skill.icon} skill-icon`}></i>
              <div className="skill-hover-content">
                <h3>{skill.name}</h3>
                <p className="percent-text">{skill.percent}</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: skill.percent }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

