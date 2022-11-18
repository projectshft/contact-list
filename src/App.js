import { Switch, Route} from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import New from './New'
import 'bootstrap';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([
    {number: 8479044099, name: "Jack Mullinkosson", email: "jack.mullinkosson@gmail.com"},
    {number: 8472259011, name: "Steve Nash", email: "stevenash@hotmail.com"}
  ])

  const addContact = (newContact) => {
    setContacts(existingContacts => [...existingContacts, newContact])
  } 

return (
  <div>
    <Switch>
      <Route exact path='/' render={(routerProps) => (
          <Home contacts={contacts} />
        )}/>
      <Route path='/New' render={(routerProps) => (
        <New contacts={contacts} addContact={addContact} history={routerProps.history} />
      )} />
    </Switch>
  </div>
)
      }



export default App;