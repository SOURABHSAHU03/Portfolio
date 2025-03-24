import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState({
    languages: false,
    webdev: false,
    databases: false,
    specializations: false
  });

  const handleCardFlip = (card) => {
    setFlippedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  const containerStyle = {
    perspective: '1000px',
    transformStyle: 'preserve-3d'
  };
  return (
    <section id="skills" className="section">
      <h1>Technical Skills</h1>
      <div className="skills-container">
        {/* Languages Card */}
        <div 
          className={`skill-category ${flippedCards.languages ? 'flipped' : ''}`}
          onClick={() => handleCardFlip('languages')}
        >
          <div className="card-front">
            <div className="icon">💻</div>
            <h3>Languages</h3>
          </div>
          <div className="card-back">
            <ul>
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>

        {/* Web Development Card */}
        <div 
          className={`skill-category ${flippedCards.webdev ? 'flipped' : ''}`}
          onClick={() => handleCardFlip('webdev')}
        >
          <div className="card-front">
            <div className="icon">🌐</div>
            <h3>Web Development</h3>
          </div>
          <div className="card-back">
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>

        {/* Databases & Tools Card */}
        <div 
          className={`skill-category ${flippedCards.databases ? 'flipped' : ''}`}
          onClick={() => handleCardFlip('databases')}
        >
          <div className="card-front">
            <div className="icon">🗄️</div>
            <h3>Databases & Tools</h3>
          </div>
          <div className="card-back">
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Git/GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>

        {/* Specializations Card */}
        <div 
          className={`skill-category ${flippedCards.specializations ? 'flipped' : ''}`}
          onClick={() => handleCardFlip('specializations')}
        >
          <div className="card-front">
            <div className="icon">🎯</div>
            <h3>Specializations</h3>
          </div>
          <div className="card-back">
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Blockchain</li>
              <li>WebSockets</li>
              <li>System Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;