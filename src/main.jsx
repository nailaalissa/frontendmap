import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// All possible divs where the widget can be rendered
const widgetContainers = document.querySelectorAll('.react-counter-widget');

widgetContainers.forEach((container) => {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
