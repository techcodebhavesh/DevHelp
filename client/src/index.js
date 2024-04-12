import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import AuthProvider from './components/login/AuthState'

render(
  <ThemeProvider>
      <AuthProvider > 
    <App />
    </AuthProvider > 
  </ThemeProvider>,
  document.getElementById('root')
)
