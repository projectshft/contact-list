import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import Roster from './Roster'
import ContactNew from './ContactNew'
import ContactList from './ContactList'


const App = () => {
  const [contacts, setContacts] = useState([
{ profilePic : "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
name : "Beyonce",
email : "b@beyonce.com",
phoneNumber : "+123 456 789",
number : 1},
{ profilePic : "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
name : "Jack Bauer",
email : "jack@nowhere.com",
phoneNumber : "+987 654 321",
number : 2},
{ profilePic : "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
name : "Chuck Norris",
email : "gmail@chucknorris.com",
phoneNumber : "+918 372 574",
number : 3}
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
        <Route exact path='/contacts' render={() => (
          <Roster addContact={addContact} contacts={contacts} />
        )}/>
        <Route path='/new' render={() => (
          <ContactNew addContact={addContact} />
        )}/>
      </Switch>
    </div>
  )
}

export default App
