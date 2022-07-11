import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Container } from 'react-bootstrap';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container className="app-container pt-5 pb-5">
    <App />
  </Container>
);

reportWebVitals();
