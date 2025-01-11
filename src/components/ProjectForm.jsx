import { useState } from 'react';
import PropTypes from 'prop-types';
import './ProjectForm.css';

const ProjectForm = ({ onProjectAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    githubLink: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onProjectAdd(formData);
    setFormData({
      title: '',
      description: '',
      image: '',
      githubLink: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Project Title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Project Description"
        required
      />
      <input
        type="url"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        type="url"
        name="githubLink"
        value={formData.githubLink}
        onChange={handleChange}
        placeholder="GitHub URL (optional)"
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

ProjectForm.propTypes = {
  onProjectAdd: PropTypes.func.isRequired,
};

export default ProjectForm; 