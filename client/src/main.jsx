import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ERC721aProvider } from './context/ERC721aContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ERC721aProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ERC721aProvider>
)
