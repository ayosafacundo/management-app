import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.css';
import Router from './routes/routes.tsx';


const rootDiv = document.getElementById('root')!
const root = ReactDOM.createRoot(rootDiv)
rootDiv.classList.add(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); // Add theme as a class to root div.

// const store = {};

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

    // <Provider store={store}>
    // </Provider>