import { useState, useEffect } from 'react';
import { extractTwitterUsername, getTwitterProfileImageUrl } from '../utils/twitter';
import './ProjectForm.css';

function ProjectForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    xUrl: '',
    projectUrl: '',
    imageUrl: '',
    authorImage: ''
  });

  useEffect(() => {
    const username = extractTwitterUsername(formData.xUrl);
    if (username) {
      const profileImageUrl = getTwitterProfileImageUrl(username);
      setFormData(prev => ({
        ...prev,
        authorImage: profileImageUrl
      }));
    }
  }, [formData.xUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      imageUrl: formData.imageUrl.trim() || null,
      authorImage: formData.authorImage || null
    };
    onSubmit?.(submitData);
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

        {formData.authorImage && (
          <div className="author-preview">
            <img 
              src={formData.authorImage} 
              alt="Profile" 
              className="author-image-preview"
            />
            <span className="preview-label">Your profile image will be shown</span>
          </div>
        )}

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
          <label htmlFor="imageUrl">
            Project Image URL <span className="optional-label">(optional)</span>
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="xUrl">X (Twitter) URL</label>
          <input
            type="url"
            id="xUrl"
            name="xUrl"
            value={formData.xUrl}
            onChange={handleChange}
            required
            placeholder="Enter your X profile URL"
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