import { Switch, Route} from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import New from './New'
import Contact from './Contact'
import 'bootstrap';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([
    {number: 8479044099, name: "Jack Mullinkosson", email: "jack.mullinkosson@gmail.com", contactId: 423423, img: 'PK_t0Lrh7MM'},
    {number: 8472259011, name: "Steve Nash", email: "stevenash@hotmail.com", contactId: 3523523, img: 'KbsvM7Bzhsg' }
  ])

  const addContact = (newContact) => {
    console.log(newContact)
    setContacts(existingContacts => [...existingContacts, newContact])
  } 

  const generateId = () => {
     console.log(Math.round(Math.random() * 100000000))
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
          <Home contacts={contacts} removeItem={removeItem} history={routerProps.history} />
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