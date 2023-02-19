import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Contacts from './Contacts'
import ContactList from './ContactList';


function App() {
  /*
  const [contacts, setContact] = useState([
    {
      id: 1,
      name: "Joe Harris",
      image_url: "", 
      email: "joeharris10@gmail.com",
      phone_number: 5555555555
    },
    {
      id: 1,
      name: "Joe Harris",
      image_url: "", 
      email: "joeharris10@gmail.com",
      phone_number: 5555555555
    }
  ])
  */

  return (
    <div>
      <Switch>
        <Route exact path='/' component={ContactList}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </div>
  );
}

export default App;
