import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import Contacts from './Contacts'
import ContactNew from './ContactNew'
import ContactPage from './ContactPage'

import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Buddy Tan-Smith", image_url: "https://drive.google.com/uc?id=1zYfdxUW34Ic4mJyxtwxQENxV9fCqwQDy", email: "buddytsmith@gmail.com", phone_number: "555-555-5555" },
    { id: 2, name: "Keroppi", image_url: "https://drive.google.com/uc?id=18i0_5jMufvqbveckqzN6hDnhD5vvl5PS", email: "ker0ppi@gmail.com", phone_number: "222-222-2222" }
    
  ]
  )

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });

  }

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contacts' render={(routerProps) => (
          <Contacts history={routerProps.history} contacts={contacts} addContact={addContact} />
          )}/>

        {/* <Route path = '/contacts/new' render={(routerProps) => (
          <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
          )} /> 

        <Route path='/contacts/:id' render={(routerProps) => (
          <ContactPage contactId={parseInt(routerProps.match.params.id, 10)} history={routerProps.history} contacts={contacts} />
            )}/> */}

      </Switch>
    </div>
  )
}

export default App
