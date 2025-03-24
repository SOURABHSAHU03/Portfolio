import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h1>Education</h1>
      <div className="timeline">
        <div className="timelinecard">
          <h4>B.Tech Computer Science Engineering</h4>
          <h5>Malaviya National Institute of Technology Jaipur</h5>
          <h6>2022 - 2026</h6>
        </div>
        
        <div className="timelinecard">
          <h4>Class 12th (MPBSE)</h4>
          <h5>GOVT. Excellence School, Betul, MP</h5>
        </div>
        
        <div className="timelinecard">
          <h4>Class 10th (MPBSE)</h4>
          <h5>GOVT. Excellence School, Betul, MP</h5>
        </div>
      </div>
      
      <div className="achievements">
        <h3>Key Achievements</h3>
        <ul>
          <li>Solved 500+ DSA problems on LeetCode</li>
          <li>GATE Qualified (2025)</li>
          <li>NCC Cadet with LEVEL-A Certification</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;