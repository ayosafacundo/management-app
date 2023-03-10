import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.css';
import reportWebVitals from './reportWebVitals.js';
import Router from './routes/routes.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
/*
  import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import Main from './Main';
    <Logo />
    <Header />
    <Sidebar />
    <Main />
  
  
      <Provider store={store}></Provider>  
    <RouterProvider router={router} />
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
