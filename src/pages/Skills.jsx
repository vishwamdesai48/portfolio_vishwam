// Skills.jsx
import React from "react";
import { Link } from "react-router-dom";

const skills = [
  { name: "HTML", icon: "fa-brands fa-html5", percent: "95%" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", percent: "90%" },
  { name: "JavaScript", icon: "fa-brands fa-js", percent: "85%" },
  { name: "React", icon: "fa-brands fa-react", percent: "80%" },
];

function Skills() {
  return (
    <div className="skills-page">
      <h2 className="skill-heading">My Skillset</h2>

      {/* SKILLS GRID */}
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <Link to={`/skills/${skill.name}`} key={index}>
            <div className="skill-card">
              <i className={`${skill.icon} skill-icon`}></i>
              <h3>{skill.name}</h3>

              <div className="skill-hover-box">
                <p className="percent-text">{skill.percent}</p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: skill.percent }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Skills;
