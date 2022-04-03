import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <Main />
  </div>
);

const Home = () => (
  <div>
    <h1>Contacts</h1>
  </div>
);

const AddNew = () => {
  return <div>New Contact</div>;
};

const ContactView  = () => {
  return <div>Contact Info</div>;
};

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/newcontact" component={AddNew} />
      <Route path="/contactview" component={ContactView} />
    </Switch>
  </main>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
