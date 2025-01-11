import { useState, useEffect } from 'react';
import { projectService } from '../services/api';
import { loadProjects, saveProjects } from '../utils/storage';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial data from localStorage
  useEffect(() => {
    const savedProjects = loadProjects();
    setProjects(savedProjects);
    setLoading(false);
  }, []);

  const addProject = async (projectData) => {
    try {
      // First, update local state and localStorage for immediate feedback
      const newProject = { ...projectData, id: Date.now() };
      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      saveProjects(updatedProjects);

      // Then, try to save to backend if available
      try {
        const savedProject = await projectService.createProject(projectData);
        // Update the local state with the server response if needed
        setProjects(projects.map(p => 
          p.id === newProject.id ? savedProject : p
        ));
      } catch (error) {
        console.error('Failed to save to backend:', error);
        // Project is still saved locally
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    projects,
    loading,
    error,
    addProject,
  };
}; 