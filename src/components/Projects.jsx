import React from 'react'
import '../cssComponents/Projects.css';
import HireAMaid from '../assets/HireAMaid.jpg';
import BankApp from '../assets/BankApp.jpg';
import WizkidsGurukul from '../assets/WizkidsGurukul.jpg';

function Projects() {
  const Projects = [
        {
      image: WizkidsGurukul,
      title: 'WizKids Gurukul – EdTech Learning Platform',
      description: 'Working as a UI/UX React Developer at WizKids Gurukul, an EdTech platform focused on interactive and accessible learning. Contributed to building responsive, scalable front-end features, enhancing user experience, and delivering seamless interfaces that empower students and educators.'
    },
    {
      image: HireAMaid,
      title: 'Hire A Maid',
      description: 'Developed a full-stack web application where customers can easily hire maids for various household needs and service providers can register themselves to find work. The platform includes secure authentication, multiple service categories (House Cleaning, Home Cook, Old Age Care, Pet Grooming & Care), location-based search for nearby maids, and persistent profile management with image upload functionality, ensuring a seamless experience for both customers and service providers.'
    },
    {
      image: BankApp,
      title: 'Smart Banking Application',
      description: 'Developed a full-stack banking web application that enables users to securely manage their accounts and perform essential banking operations online. The application provides features such as secure user authentication, account creation and management, fund transfers between accounts, real-time balance updates, and detailed transaction history. With a responsive and intuitive dashboard, it ensures a smooth and reliable digital banking experience.'
    },

  ];
  return (
    <section id='projects' className="project-section">
    <h2>Projects</h2>
    <div className="project-grid">
      {Projects.map((project, index) => (
        <div key={index} className="project-card">
          <img className="project-image"  src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p className='project-description'>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Projects