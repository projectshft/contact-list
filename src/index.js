import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import Contacts from './Contacts';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddContactForm from './AddContactForm';
import ViewContact from './ViewContact';

const App = () => (
  <div>
    <Main />
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Contacts} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/add-contact" component={AddContactForm} />
      <Route path="/contacts/:id" component={ViewContact} />
    </Switch>
  </main>
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
