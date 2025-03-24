import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-pill">{tech}</span>
        ))}
      </div>
      
      <a href={link} className="project-link">View Project</a>
    </div>
  );
};

export default ProjectCard;