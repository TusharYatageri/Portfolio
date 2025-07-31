import React from 'react';
import '../cssComponents/SkillSection.css';

const skills = [
  { name: 'Core Java', percent: 80 },
  { name: 'HTML & CSS', percent: 95 },
  { name: 'JavaScript', percent: 80 },
  { name: 'React.js', percent: 85 },
  { name: 'MySQL', percent: 95 },
  { name: 'Git & GitHub', percent: 80 },
];

function SkillSection() {
  return (
    <section id='skills' className="skill-section">
      <h2>My Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="skill-bar-background">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
