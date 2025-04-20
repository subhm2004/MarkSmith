import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
serviceWorker.register();
