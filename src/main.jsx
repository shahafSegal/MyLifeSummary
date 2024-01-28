import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserManager from './contexts/UserManager.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserManager>
    <App />
  </UserManager>,
)
