import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from 'providers/AppProvider';
import './index.css';
import App from './views/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
