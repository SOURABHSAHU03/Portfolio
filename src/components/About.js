import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <h1>About Me</h1>
      <div className="about">
        <div className="leftabout">
          <img src="/profile.png" alt="Profile" />
        </div>
        <div className="rightabout">
          <p>
          I am Sourabh Sahu, a dedicated software development enthusiast with hands-on experience in MERN and Web3.0 applications and web interfaces. I'm passionate about continuous learning and always striving to excel in software development by acquiring new skills.

Currently, I'm pursuing a BTech in Computer Science And Engineering at Malaviya National Institute of Technology, Jaipur. Apart from coding, I enjoy cycling, playing chess, and keeping up with emerging tech trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;