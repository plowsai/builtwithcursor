import ProjectGrid from './components/ProjectGrid';
import ProjectForm from './components/ProjectForm';
import { useProjects } from './hooks/useProjects';
import './App.css';

function App() {
  const { projects, loading, error, addProject } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app">
      <header>
        <h1>Project Showcase</h1>
      </header>
      <main>
        <ProjectForm onProjectAdd={addProject} />
        <ProjectGrid projects={projects} />
      </main>
    </div>
  );
}

export default App; 