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
         <Home contacts={contacts} setContacts={setContacts}/> 
        )} />

      <Route path="/contacts/new" render={() => (
        <ContactForm addContact={addContact} />
      )} />

      <Route path="/contacts/:id" render={() => (
        <List contacts={contacts} />
      )} />
    </Switch>
  );
};

export default App;
