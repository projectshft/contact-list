import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Contacts from './Contacts';
import Contact from './Contact';
import ContactForm from './ContactForm';
import Header from './Header';
const data = require('../data/contacts.json');

function App() {
  const [contacts, setContacts] = useState(data.contacts);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className='App'>
      <Header />
      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route path='/' element={<Contacts contacts={contacts} />} />
        <Route
          path='/contacts/:id'
          element={
            <Contact
              contact={contacts.find(({ id }) => id === selectedContactId)}
            />
          }
        />
        <Route
          path='/contacts/new'
          element={<ContactForm addContact={addContact} />}
        />
      </Routes>
    </div>
  );
}

export default App;
