import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
// import Home from './Home'
import Contacts from './Contacts'
import ContactNew from './ContactNew'



import logo from './logo.svg';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Buddy Tan-Smith", image_url: "G", email: "buddytsmith@gmail.com", phone_number: "555-555-5555" },
    { id: 2, name: "Nina Tan", image_url: "null", email: "ninavtan@gmail.com", phone_number: "222-222-2222" }
  ])

  const addContact = (contact) => {
    setContacts(contact => {
      return [...contacts, contact]
    });
  }

  return (
    <div>
      <Switch>
        <Route exact path='/contacts' render={() => (
          <Contacts addContact={addContact} contacts={contacts} />
          )}/>

        <Route path = '/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )} /> 

      </Switch>
    </div>
  )
}

export default App
