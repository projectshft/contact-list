import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App'

//makes bootstrap available every where in app 
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)