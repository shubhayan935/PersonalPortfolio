import React from 'react';

const ProjectCard = ({ title, image, description, highlight, tech, link }) => (
  <a href={link} className="project-card" target="_blank" rel="noopener noreferrer" style={{"textDecoration": "none"}}>
    <div className="project-info">
      <h2 className="project-title">{title}</h2>
      <div className="project-thumbnail" style={{ backgroundImage: `url('${image}')` }}></div>
      <p className="project-description">{description}</p>
      {highlight && (
        <p className="project-highlight">{highlight}</p>
      )}
      <div className="project-tech">
        {tech.map((item, index) => <span key={index}>{item}</span>)}
      </div>
    </div>
  </a>
);

export default ProjectCard;
