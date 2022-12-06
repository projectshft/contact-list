import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import ContactsHome from './ContactsHome';
import AddContactForm from './AddContactForm';
import Contact from './Contact';
import contactsAPI from '../contacts.json'

const importedContacts = contactsAPI.contacts;

const Main = () => {
  const [contacts, setContacts] = useState([
    ...importedContacts
  ])

  const addContact = (contact) => {
    setContacts(contacts=> {
      return [...contacts, contact]
    })
  }

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => (
          <ContactsHome addContact={addContact} contacts={contacts}/>
        )}/>

        <Route path="/AddContactForm" render={(routerProps)=> (
          <AddContactForm history={routerProps.history} contacts={contacts} addContact={addContact}/>
        )}/>

        <Route path="/contact/:id" render={(routerProps) => (
          <Contact contactID={parseInt(routerProps.match.params.id,10)} contacts={contacts}/>
        )}/>
      </Switch>
    </main>
  );
}

export default Main;