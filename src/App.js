import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import ContactNew from './ContactNew'
import Home from './Home'
import Contacts from './Contacts'

const App = () => {
  const [contacts, setContacts] = useState([
    { number: 1, name: "Bob Jones", email: "bob@yahoo.com", phone: "555-555-5555"},
    { number: 2, name: "Jake Smith", email: "js@google.com", phone: "555-555-5555"}
    ])

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contacts' render={() => (
          <Contacts addContact={addContact} contacts={contacts} />
        )}/>
        <Route path='/contactNew' component={ContactNew}/>
        </Switch>
    </div>
  )
}

export default App