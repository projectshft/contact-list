import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import ContactList from './ContactList';
import AddContactForm from './AddContactForm';
import Contact from './Contact';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [
      {
        id: 1,
        name: 'Albert Einstein',
        imageUrl:
          'https://images.newscientist.com/wp-content/uploads/2019/06/18142824/einstein.jpg',
        email: 'aeinstein@example.com',
        phoneNumber: '1555555555',
      },
    ]
  );

  useEffect(() => {
    saveContactsToStorage(contacts);
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} />} />
        <Route path="/contacts" element={<ContactList contacts={contacts} />} />
        <Route
          path="/new"
          element={
            <AddContactForm addContact={addContact} setContacts={setContacts} />
          }
        />
        <Route path="/contacts/:id" element={<Contact contacts={contacts} />} />
      </Routes>
    </div>
  );
}

const saveContactsToStorage = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export default App;
