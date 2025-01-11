import { useState } from 'react';
import './ProjectForm.css';

function ProjectForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    projectUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2 className="form-title">Add Your Project</h2>
          <button 
            type="button" 
            className="close-button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter project title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe your project"
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            placeholder="Enter image URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectUrl">Project URL</label>
          <input
            type="url"
            id="projectUrl"
            name="projectUrl"
            value={formData.projectUrl}
            onChange={handleChange}
            required
            placeholder="Enter project URL"
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={!formData.title || !formData.description}
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}

export default ProjectForm; 