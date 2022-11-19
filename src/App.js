import { Switch, Route} from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import New from './New'
import Contact from './Contact'
import 'bootstrap';
import './App.css';
import jackPic from './christian-buehner-DItYlc26zVI-unsplash.jpg'
import stevePic from './alex-starnes-PK_t0Lrh7MM-unsplash.jpg'

const App = () => {
  const [contacts, setContacts] = useState([
    {number: 8479044099, name: "Jack Mullinkosson", email: "jack.mullinkosson@gmail.com", contactId: 423423, img: jackPic},
    {number: 8472259011, name: "Steve Nash", email: "stevenash@hotmail.com", contactId: 3523523, img: stevePic}
  ])

  const addContact = (newContact) => {
    console.log(newContact)
    setContacts(existingContacts => [...existingContacts, newContact])
  } 

  const generateId = () => {
     return(Math.round(Math.random() * 100000000))
  }

  const removeItem = (e) => {
    console.log('before' + contacts)
    let contactId = e.target.parentElement.getAttribute('data-key')
    const match =  contacts.find((element => element.contactId===parseInt(contactId)))
    let index = contacts.indexOf(match)
    contacts.splice(index, 1)
    setContacts(existingContacts => [...existingContacts])
  }
return (
  <div>
    <Switch>
      <Route exact path='/' render={(routerProps) => (
          <Home contacts={contacts} removeItem={removeItem} history={routerProps.history} jackPic={jackPic} stevePic={stevePic}/>
        )}/>
      <Route path='/New' render={(routerProps) => (
        <New contacts={contacts} addContact={addContact} generateId={generateId} history={routerProps.history} />
      )} />
      <Route path='/:number' render={(routerProps) => (
      <Contact contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} />
    )}/>

    </Switch>
  </div>
)
      }



export default App;