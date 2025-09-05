import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n.ts"
import { ErrorBoundary } from './components/errorboundary/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
  </StrictMode>,
)
