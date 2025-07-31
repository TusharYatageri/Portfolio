import React from 'react';
import '../cssComponents/NavBar.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">🌙 Tushar.dev</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
