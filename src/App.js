import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import Rolodex from './Rolodex'
// import data from './components/data.json'
import 'react-bootstrap'

const App = () => {
  const [contacts, setContacts] = useState([
    // data.contacts
  ])

  const addContact = (contact) => {
    setContacts(contacts => {
      return [contact,...contacts]
    });
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/rolodex' render={() => (
          <Rolodex addContact={addContact} contacts={contacts} />
        )}/>
      </Switch>
    </div>
  )
}

export default App