import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, useHistory} from 'react-router-dom';
import ContactList from './ContactList';
import AddContact from './AddContact'; 
import Contact from './Contact';
import Header from './Header';




  const App = () => {

  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const history = useHistory();

  useEffect(() => {
    history.push("/contacts");
  })
  
  const deleteContact = (index) => {
    setContacts(contacts.filter((contact) => contact.phone !== contacts[index].phone));
  }
  
 

    return (
      <div>
        <Header/>  
        <Switch>
          <Route exact path="/contacts">
            <ContactList contacts={contacts}/>
          </Route>
          <Route path="/contacts/new">
            <AddContact addContact={addContact} contacts={contacts}/> 
          </Route>
          <Route path="/contacts/:id">
            <Contact contacts={contacts} deleteContact={deleteContact}/>
          </Route> 
        </Switch>
      </div>
    );
  };
  




export default App;

