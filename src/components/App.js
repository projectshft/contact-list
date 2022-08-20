import { Route, Switch } from 'react-router-dom';

import { useState } from 'react';

import Contacts from './Contacts';

import Contact from './Contact';

import ContactForm from './ContactForm';

import Header from './Header';

const data = require('../data/contacts.json');

function App() {
  const [contacts, setContacts] = useState(data.contacts);
  // const [selectedContactId, setSelectedContactId] = useState(null);

  // const addContact = (contact) => {
  //   setContacts([...contacts, contact]);
  //   console.log(contact);
  // };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Contacts contacts={contacts} />
        </Route>
        {/* <Route
          path="/contacts/:id"
          component={
            <Contact
            // contact={contacts.find(({ id }) => id === selectedContactId)}
            />
          }
        /> */}
        <Route path="/contacts/new">
          <ContactForm contacts={contacts} setContacts={setContacts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
