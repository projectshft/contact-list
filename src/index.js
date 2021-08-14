import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Index from './components/index_page';
import ContactNew from './components/contact_new';
import Contact from './components/contact';

const passDown = (contact) => {
  console.log(contact);
}

const App = () => (
  <main>
    <h1 className="text-center">Contact List</h1>
    <Switch>
      <Route exact path="/" render={() => (
        <Index />
      )} />
      <Route path="/contacts/new" render={() => (
        <ContactNew passNewContact={passDown} />
      )} />
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
