import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import Roster from './Roster'
import ContactNew from './ContactNew'


const App = () => {
  const [contacts, setContacts] = useState([
{ profilePic : 'https://i.redd.it/v0caqchbtn741.jpg',
name : 'Thomas',
email : 'tcarey95@outlook.com',
phoneNumber : "91999096555",
number : 1}
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
        <Route path='/roster' render={() => (
          <Roster addContact={addContact} contacts={contacts} />
        )}/>
        <Route path='/contactNew' render={() => (
          <ContactNew addContact={addContact} />
        )}/>
      </Switch>
    </div>
  )
}

export default App