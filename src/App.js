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
  const [editStatus, setEditStatus]= useState(false); 

  const addContact = (contact) => {
    setContacts([...contacts, contact]); 
  }; 

  const editContact = (index, contact) => {
    //selected contact
    const newContacts = [...contacts]; 
     newContacts[index]= contact;
    setContacts(newContacts); 
  }; 

  return (
    <Switch>

      <Route exact path="/"  render={() => (
         <Home contacts={contacts} setContacts={setContacts} setEditStatus={setEditStatus} editStatus={editStatus} /> 
        )} />

      <Route path="/contacts/new" render={() => (
        <ContactForm addContact={addContact} />
      )} />

      <Route path="/contacts/:id" render={() => (
        <List contacts={contacts} editContact={editContact} editStatus={editStatus} setEditStatus={setEditStatus} />
      )} />

      <Route path="/contacts/:id/edit" render={() => (
        <List  />
      )} />
    </Switch>
  );
};

export default App;
