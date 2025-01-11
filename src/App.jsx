import { useState, useEffect } from 'react'
import './App.css'
import ProjectGrid from './components/ProjectGrid'
import ProjectForm from './components/ProjectForm'
import { useProjects } from './hooks/useProjects'

function App() {
  const [showForm, setShowForm] = useState(false)
  
  // Add immediate error logging
  console.log('App rendering, env vars:', {
    url: import.meta.env.VITE_UPSTASH_KV_REST_API_URL,
    hasToken: !!import.meta.env.VITE_UPSTASH_KV_REST_API_TOKEN
  })

  try {
    const { projects, loading, error, addProject } = useProjects()
    const [submitError, setSubmitError] = useState(null)

    // Basic content for testing
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Built with Cursor</h1>
          <p className="subtitle">Test Content</p>
        </header>
      </div>
    )
  } catch (err) {
    console.error('Error in App:', err)
    return (
      <div className="error-container">
        <h2>Error in application</h2>
        <p>{err.message}</p>
      </div>
    )
  }
}

export default App 