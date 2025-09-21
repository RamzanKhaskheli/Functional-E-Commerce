import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Context from '../utils/Context/context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
  </Context>
)
