import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css'; // If you have an `index.css` file, otherwise remove this line
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root with createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
