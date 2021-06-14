import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



const generateId = () => Math.round(Math.random() * 100000000); // have to parseInt
// uuid



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

