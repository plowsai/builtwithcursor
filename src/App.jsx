import { useState } from 'react'
import './App.css'
import ProjectGrid from './components/ProjectGrid'
import ProjectForm from './components/ProjectForm'

function App() {
  const [showForm, setShowForm] = useState(false)

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

        <ProjectGrid />

        {showForm && (
          <ProjectForm 
            onClose={() => setShowForm(false)}
          />
        )}
      </main>
    </div>
  )
}

export default App 