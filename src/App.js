import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Contact from './Contact';
import ContactList from './ContactList';
import NewContact from './NewContact'; 

const App = () => {
  const [contacts, setContacts] = useState([
    {name: 'John Snow', email: 'kinginthenorth@winterfell.com', phone: '555-555-5555', img_url: "https://media.gq.com/photos/5c9d404a8d459e781a1333b5/3:4/w_971,h_1295,c_limit/How-to-Get-Jon-Snow's-Hair-game-of-thrones-gq-grooming.jpg"},
    {name: 'Michael Bolton', email: 'thehair@gmail.com', phone: '555-555-5555', img_url: "https://upload.wikimedia.org/wikipedia/en/0/0e/Michael-bolton-album-cover-onething.jpg"},
    {name: 'Michael Scott', email: 'thebossh@dundermif.com', phone: '555-555-5555', img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*"}
  ]) 

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header"></div>
          <Switch>
            <Route exact path='/' render={() => (
              <ContactList addContact={addContact} contacts={contacts} />
          )} />
            <Route exact path='/new-contact' render={(routerProps)=> (
              <NewContact history={routerProps.history} addContact={addContact} contacts={contacts} />
            )} />
              <Route path='/:name' render={(routerProps) => (
                <Contact contactId={routerProps.match.params.name} contacts={contacts} />
    )}/>
          </Switch>
        </div>
      </div>  
    </div>          
  )
} 

export default App
