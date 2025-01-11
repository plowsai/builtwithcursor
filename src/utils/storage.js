const STORAGE_KEY = 'project_showcase_data';

export const saveProjects = (projects) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const loadProjects = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}; 