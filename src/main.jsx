import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@shopify/polaris/build/esm/styles.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 