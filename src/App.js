import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import ContactForm from './components/ContactForm';
import Home from './components/Home'; 
import List from './components/List';

//add data 
import data from './data';


const App = () => {
  //state
  const [contacts, setContacts] = useState(data()); 

  const addContact = (contact) => {
    setContacts([...contacts, contact]); 
  }; 

  return (
    <Switch>

      <Route exact path="/"  render={() => (
          <Home contacts={contacts} /> 
        )} />

      <Route exact path="/"  render={() => (
        <List contacts={contacts} /> 
      )} />

      <Route path="/contact-form" render={() => (
        <ContactForm addContact={addContact} />
      )} />
    </Switch>
  );
};

export default App;
