import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import Home from './components/Home'; 
import List from './components/List'; 

//add data 
import data from './data';

const App = () => {
  //state
  const [contacts, setContacts] = useState(data()); 

  const addContact = (contact) => {
    const newContacts = [...contacts];
    setContacts([...newContacts, contact]); 
  }; 

  const editContact = (index, contact) => {
    const newContacts = [...contacts]; 
    newContacts[index]= contact;
    setContacts(newContacts); 
  }; 

  return (
    <Switch>

      <Route exact path="/contacts"  render={() => (
         <Home contacts={contacts} setContacts={setContacts} /> 
      )} />

      <Route path="/contacts/" render={() => (
        <List contacts={contacts} addContact={addContact} editContact={editContact}  />
      )} />

      <Redirect to="/contacts" />

    </Switch>
  );
};

export default App;