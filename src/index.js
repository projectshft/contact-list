import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


// standard react index.ks file, utilizing BrowserRouter and also rendering Contact List title for the entire app

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <h1>Contact List</h1>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);