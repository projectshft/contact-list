import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import New from './New'
import 'bootstrap';
import './App.css';


const App = () => {
  const [contacts, setContact] = useState([
    {number: 8479044099, name: "Jack Mullinkosson", email: "jack.mullinkosson@gmail.com"},
    {number: 8472259011, name: "Steve Nash", email: "stevenash@hotmail.com"}
  ])

  const addContact = (contact) => {

    setContact(contact => {
      return [...contacts, contact]
    })
  } 

return (
  <div>
    <Switch>
      <Route exact path='/' render={(routerProps) => (
          <Home contacts={contacts} />
        )}/>
      <Route path='/New' render={(routerProps) => (
        <New addContact={addContact} />
      )} />
    </Switch>
  </div>
)
      }

export default App;
