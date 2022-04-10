import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactList from './components/contactList';
import NewContact from './components/newContact';
import ContactTile from './components/contact';
import './App.css';

const App = () => {
  const createId = () => Math.round(Math.random() * 100000000);

  const [contacts, setContacts] = useState([
    {
      name: 'Frank Zappa',
      email: 'zappppp@acidrock.com',
      phone: '123-456-7890',
      id: createId(),
      img: 'https://ensembleparamirabo.com/sites/default/files/styles/photo_carree/public/compositeurs/zappa.jpg',
    },
    {
      name: 'David Bowie',
      email: 'thinwhiteduke@mars.com',
      phone: '987-654-3210',
      id: createId(),
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6A3VUUPzBLbzoCgeV7XPPJdkfuqxai9XUw&usqp=CAU',
    },
  ]);

  const addContact = (contact) => {
    contact.id = createId();
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <Routes>
        <Route
          exact
          path="./contactList"
          render={() => (
            <ContactList
              addContact={addContact}
              contacts={contacts}
              setContacts={setContacts}
            />
          )}
        />
        <Route
          path="/newContact"
          render={(props) => (
            <NewContact
              history={props.history}
              contacts={contacts}
              addContact={addContact}
            />
          )}
        />
        <Route
          path="/:number"
          render={(props) => (
            <ContactTile id={contacts.id} contacts={contacts} />
          )}
        />
      </Routes>
    </div>
  );
};

export default App;
