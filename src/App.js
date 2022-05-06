import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import ContactList from './ContactList';
import AddContact from './AddContact'; 
import Contact from './Contact';
import Header from './Header';



  const App = () => {

  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);  
  };
  console.log(contacts);

    return (
      <div>
        <Header/>  
        <Switch>
          <Route exact path="/contacts">
            <ContactList/>
          </Route>
          <Route path="/contacts/new">
            <AddContact addContact={addContact} contacts={contacts}/> 
          </Route>
          <Route path="/contacts/:id">
            <Contact setContacts={setContacts} contactId="TBC"/>
          </Route> 
        </Switch>
      </div>
    );
  };
  




export default App;

