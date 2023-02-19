import { Switch, Route } from 'react-router-dom'
import React, {useState} from 'react'
import Contacts from './Contacts'
import ContactList from './ContactList';


function App() {
  
  const [contacts, setContact] = useState([
    {
      id: 1,
      name: "Joe Harris",
      image_url: "https://image.shutterstock.com/image-photo/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-250nw-1714666150.jpg", 
      email: "joeharris10@gmail.com",
      phone_number: 5555555555
    },
    {
      id: 2,
      name: "Mark Walle",
      image_url: "https://image.shutterstock.com/image-photo/stock-photo-head-shot-of-african-self-assured-executive-manager-portrait-successful-staff-member-company-250nw-1770074666.jpg", 
      email: "mark10@gmail.com",
      phone_number: 1234567890
    },
    {
      id: 3,
      name: "James Bond",
      image_url: "https://image.shutterstock.com/image-photo/stock-photo-headshot-portrait-of-smiling-millennial-male-employee-talk-on-video-call-or-web-conference-in-250nw-1667439913.jpg", 
      email: "jb@gmail.com",
      phone_number: 1220193453
    }
  ])
  

  return (
    <div>
      <Switch>
        <Route exact path='/' component={ContactList}/>
        <Route path='/contacts' render={() => (
          <Contacts contacts={contacts}/>
        )}/>
      </Switch>
    </div>
  );
}

export default App;

