import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "CODERR - Real-Time Collaborative Editor",
      description: "MERN stack application with WebSocket integration enabling real-time code collaboration with multiple users simultaneously. Implemented authentication and authorization for secure access.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "WebSocket", "Tailwind CSS"],
      link: "https://github.com/SOURABHSAHU03/real-time-code-editor"
    },
    {
      title: "Map Navigator with Dijkstra's Algorithm",
      description: "Web application that calculates and visualizes shortest paths between locations using Dijkstra's algorithm. Features interactive map interface with Leaflet.js.",
      technologies: ["React", "Leaflet.js", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "HACHIE Blockchain Security",
      description: "Solution for preventing front-running attacks in sharded blockchains. Implements cross-shard atomicity and fair transaction processing with optimized coordination mechanisms.",
      technologies: ["Blockchain", "Smart Contracts", "Sharding"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <h1>Projects</h1>
      <div className="projects">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;