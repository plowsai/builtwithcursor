import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

// Add immediate error logging
console.log('main.jsx executing')

try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  )
} catch (err) {
  console.error('Error in main.jsx:', err)
  document.body.innerHTML = `<div class="error-container">
    <h2>Failed to start application</h2>
    <p>${err.message}</p>
  </div>`
} 