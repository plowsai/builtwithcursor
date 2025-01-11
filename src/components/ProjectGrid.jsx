import './ProjectGrid.css';

function ProjectGrid({ projects = [] }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects yet. Be the first to share your project!</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          {project.imageUrl && (
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
          )}
          <div className="project-content">
            <div className="project-header">
              <div className="title-row">
                {project.authorImage && (
                  <img 
                    src={project.authorImage} 
                    alt="Author" 
                    className="author-image"
                  />
                )}
                <h3>{project.title}</h3>
              </div>
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
              <a href={project.xUrl} target="_blank" rel="noopener noreferrer">
                Follow on X →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid; 