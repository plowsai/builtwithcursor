import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { loadProjects, saveProjects } from '../utils/storage';
import './ProjectGrid.css';

const ProjectGrid = ({ onProjectsChange }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = loadProjects();
    setProjects(savedProjects);
  }, []);

  const addProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    saveProjects(updatedProjects);
    if (onProjectsChange) onProjectsChange(updatedProjects);
  };

  return (
    <div className="project-container">
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid; 