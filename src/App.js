import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import _ from 'lodash';
import AllContacts from './AllContacts';
import AddContactForm from './AddContactForm';
import Contacts from './Contacts';

// Main App Component

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [currId, setCurrId] = useState(1);

  const addContact = (newContact) => {
    newContact.id = currId;
    setCurrId(currId + 1);
    setContacts(oldContacts => [...oldContacts, newContact]);
  }

  const editContact = (id, editedContact) => {
    const updatedContacts = [...contacts];
    const contact = _.find(updatedContacts, {id: id});
    
    Object.assign(contact, editedContact);
    setContacts(updatedContacts);
  }

  const deleteContact = (id) => {
    const updatedContacts = _.remove([...contacts], (contact) => {
      return !(contact.id === id);
    });
    setContacts(updatedContacts);
  }

  // Routes
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          <AllContacts contacts={contacts}/>
        )} />

        <Route path="/contacts" render={() => (
          <Contacts contacts={contacts} deleteContact={deleteContact} editContact={editContact}/>
        )} />
        
        <Route path="/add-contact" render={(routerProps) => (
          <AddContactForm addContact={addContact} history={routerProps.history}/>
        )} />    
      </Switch>
    </div>
  );
}

export default App;