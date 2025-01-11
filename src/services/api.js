const API_BASE_URL = 'http://localhost:3000/api'; // Change this to your actual API URL

export const projectService = {
  async getAllProjects() {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },

  async createProject(projectData) {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    if (!response.ok) throw new Error('Failed to create project');
    return response.json();
  },

  async deleteProject(projectId) {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete project');
    return response.json();
  },
}; 