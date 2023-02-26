import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.css';
import reportWebVitals from './reportWebVitals';
import Router from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { State } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
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
