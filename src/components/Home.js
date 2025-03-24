import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import Typed from 'typed.js'

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'DSA Enthusiast', 'Blockchain Developer'],
      typeSpeed: 50,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="section">
      <div className="intro">
        <div className="leftsection">
          <div>Hi, I am <span className="name">Sourabh Sahu</span></div>
          <div>and I am a <div style={{height:'2em'}}><span ref={typedRef} className="disp"></span></div></div>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/1Y9PYGwLQKM3VHXHM_qoGUt39KYERjdTd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="Resume">Resume</button>
            </a>
            <a href="https://github.com/SOURABHSAHU03" target="_blank" rel="noopener noreferrer">
              <button className="github">Github</button>
            </a>
            <a href="https://leetcode.com/u/goldy_sahu/" target="_blank" rel="noopener noreferrer">
              <button className="leetcode">LeetCode</button>
            </a>
          </div>
        </div>
        <div className="rightsection">
          <img src="/developer.png" alt="Sourabh Sahu" />
        </div>
      </div>
    </section>
  );
};

export default Home;