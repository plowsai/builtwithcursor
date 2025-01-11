import { useState } from 'react'
import './App.css'
import ProjectGrid from './components/ProjectGrid'
import ProjectForm from './components/ProjectForm'
import { useProjects } from './hooks/useProjects'

function App() {
  const [showForm, setShowForm] = useState(false)
  const { projects, loading, error, addProject } = useProjects()

  const handleSubmit = async (projectData) => {
    try {
      await addProject(projectData)
      setShowForm(false)
    } catch (err) {
      console.error('Failed to add project:', err)
      // You might want to show an error message to the user here
    }
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error loading projects: {error}</p>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Built with Cursor</h1>
        <p className="subtitle">
          Discover amazing projects built by the Cursor community. 
          Share your own project and join the future of AI-powered development.
        </p>
      </header>

      <main className="content">
        <button 
          className="add-project-button"
          onClick={() => setShowForm(true)}
        >
          + Add Your Project
        </button>

        {loading ? (
          <div className="loading-container">
            <p>Loading projects...</p>
          </div>
        ) : (
          <ProjectGrid projects={projects} />
        )}

        {showForm && (
          <ProjectForm 
            onClose={() => setShowForm(false)}
            onSubmit={handleSubmit}
          />
        )}
      </main>
    </div>
  )
}

export default App 