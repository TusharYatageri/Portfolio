import React from 'react';
import '../cssComponents/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4 className="footer-logo"></h4>
        {/* <div className="footer-icons">
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
        </div> */}
        <p className="footer-text">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
