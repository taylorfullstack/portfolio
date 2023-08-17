import './index.css'
import { LanguageProvider } from "./contexts/LanguageContext";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
