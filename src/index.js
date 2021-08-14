import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactNew from './components/contact_new';
import Contact from './components/contact';
import Main from './components/main';

const App = () => (
  <main>
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
