import React, { useState } from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>Sourabh Sahu</a>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick('about');
          }}>About</a></li>
          <li><a href="#education" onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick('education');
          }}>Education</a></li>
          <li><a href="#skills" onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick('skills');
          }}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick('projects');
          }}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => {
            e.preventDefault();
            handleNavLinkClick('contact');
          }}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;