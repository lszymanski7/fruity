import '@csstools/normalize.css'
import './assets/sass/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ThemeProvider } from './contexts/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
