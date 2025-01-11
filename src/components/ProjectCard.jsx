import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, githubLink }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
};

export default ProjectCard; 