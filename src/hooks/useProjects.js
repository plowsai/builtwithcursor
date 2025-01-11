import { useState, useEffect } from 'react';
import { getProjects, saveProject } from '../utils/storage';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load projects on mount
  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const addProject = async (project) => {
    try {
      const newProject = {
        ...project,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      const updatedProjects = await saveProject(newProject);
      setProjects(updatedProjects);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return { projects, loading, error, addProject };
} 