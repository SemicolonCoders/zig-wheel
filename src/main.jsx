import React from 'react'    // Importing React library
import ReactDOM from 'react-dom/client'   // Importing ReactDOM client
import App from './App.jsx'   // Importing the main App component
import './index.css'    // Importing CSS file for styling
import { BrowserRouter } from 'react-router-dom';   // Importing BrowserRouter for routing


// Rendering the root component
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>    {/* Wrapping the entire application with BrowserRouter */}
        <App />      {/* Rendering the main App component */}
    </BrowserRouter> 
)
