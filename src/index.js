import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './components/contact_list';
import AddContact from './components/add_contact';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Main />
  </div>
);

const ContactAPI = {
  contacts: [
    { pic: 'https://www.looper.com/img/gallery/the-entire-history-of-dunes-house-atreides/intro-1602509817.jpg', name: 'Paul Atreides', email: 'muaddib@gmail.com', phone: '5555555' },
    { pic: 'https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1310/1/1311717.jpg', name: 'Chani', email: 'fremen#1@gmail.com', phone: '2222222'}
  ],
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = p => p.number === id;  //Confused as to how this is working.  Need ID in API
    return this.contacts.find(isContact);
  }
};

const Index = () => {
  return (
  <div className="ContactList">
    <ContactList />
  </div>
  );
}

const AddCon = () => {
  return (
    <div className="AddContact">
      <AddContact />
    </div>
  );
}

const Contact = () => <h1>Contact</h1>;



const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/contacts/:number" component={Contact} />   
      <Route path="/addcontact" component={AddCon} />   
    </Switch>
  </main>
);



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

