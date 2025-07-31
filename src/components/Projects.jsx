import React from 'react'
import '../cssComponents/Project.css';
import tusharImg from '../assets/tushar.JPG';

function Projects() {
  const Projects = [
    {
      image: tusharImg,
      title: 'Portfolio Website',
      description: 'A personal developer portfolio built using React.js.'
    },
    {
      image: tusharImg,
      title: 'Weather App',
      description: 'An app that shows real-time weather info using OpenWeather API.'
    },
    {
      image: tusharImg,
      title: 'To-Do List',
      description: 'A simple and responsive to-do list app with CRUD functionality.'
    }
  ];
  return (
    <section id='projects' className="project-section">
    <h2>Projects</h2>
    <div className="project-grid">
      {Projects.map((project, index) => (
        <div key={index} className="project-card">
          <img className="project-image"  src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Projects