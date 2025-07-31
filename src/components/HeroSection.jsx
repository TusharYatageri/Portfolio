import React, { useEffect } from 'react';
import '../cssComponents/HeroSection.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import tushar from '../assets/tushar.JPG';

function HeroSection() {
    useEffect(() => {
        // Static stars
        document.querySelectorAll('.static-star').forEach(star => {
          const size = Math.random() * 2 + 1; // 1px to 3px
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.left = Math.random() * 100 + 'vw';
          star.style.top = Math.random() * 100 + 'vh';
          star.style.opacity = 0.5 + Math.random() * 0.5;
          star.style.boxShadow = `0 0 ${size * 4}px white`; // glow
        });
      
        // Falling stars
        document.querySelectorAll('.falling-star').forEach(star => {
          star.style.left = Math.random() * 100 + 'vw';
          star.style.animationDelay = Math.random() * 4 + 's';
        });
      }, []);
      

  return (
    <div className="hero-container">
      <div className="moon"></div>
      <div className="stars">
        {/* Static stars */}
        {[...Array(80)].map((_, i) => (
          <div key={`static-${i}`} className="star static-star"></div>
        ))}
        {/* Falling stars */}
        {[...Array(20)].map((_, i) => (
          <div key={`falling-${i}`} className="star falling-star"></div>
        ))}
      </div>
      <div id='home' className="content">
      <img src={tushar} alt="Tushar" className="profile-pic" />
        <h1>Hi, I'm Tushar</h1>
        <p>Full Stack Developer | Dream Chaser 🚀</p>
      <div className="hero-icons">
                <a href="https://github.com/TusharYatageri" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/tusharyatageri" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:tusharyatageri@example.com">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com/__yatageri__" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
      </div>
    </div>
  );
}

export default HeroSection;
