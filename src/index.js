import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ContactNew from './components/contact_new';
import Contact from './components/contact';
import Main from './components/main';

const App = () => (
  <main>
    <h1 className="text-center">Contact List</h1>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/contacts/new" component={ContactNew} />
      <Route path="/contacts/:id" component={Contact} />
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
