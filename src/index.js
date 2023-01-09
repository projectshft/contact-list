import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Component/Root';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <Root />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);