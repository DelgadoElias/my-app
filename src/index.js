// dependecias
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// modulos de archivo
import App from './App';
import reportWebVitals from './reportWebVitals';

// recursos varios
import './index.css';
import CharRoute from './components/containers/CharRoute/CharRoute';
import router from './modules/routes';


// Lo mas limpio posible
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
