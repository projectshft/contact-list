import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Main from './components/main';

const App = () => (
  <main>
    <h1 className="text-center">Contact List</h1>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </main>
);

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
