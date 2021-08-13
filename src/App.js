import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import AllContacts from './AllContacts';
import AddContactForm from './AddContactForm';
import Contacts from './Contacts';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Otto Frankel',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Sans_undertale.jpg/220px-Sans_undertale.jpg',
      email: 'otto@email.com',
      number: '111-3333'
    },
    {
      id: 2,
      name: 'The Rock',
      imgUrl: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
      email: 'dwayne@therock.com',
      number: '222-1234'
    }
  ]);
  const [currId, setCurrId] = useState(3);

  const addContact = (newContact) => {
    newContact.id = currId;
    setCurrId(currId + 1);
    setContacts(oldContacts => [...oldContacts, newContact]);
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          <AllContacts contacts={contacts}/>
        )} />

        <Route path="/contacts" render={() => (
          <Contacts contacts={contacts}/>
        )} />
        
        <Route path="/add-contact" render={(routerProps) => (
          <AddContactForm addContact={addContact} history={routerProps.history}/>
        )} />    
      </Switch>
    </div>
  );
}

export default App;