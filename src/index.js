import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router>
        <Route path="/" element={ <App /> }>
        </Route>
      </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

