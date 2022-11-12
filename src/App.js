import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactPage from './components/ContactPage';
import data from './components/data.json';

export default function App() {
  const [contacts, setContacts] = useState(data.contacts);
  const addContact = (newContact) => {
    setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  return (
    <Routes>
      <Route path='/add-contact' element={<AddContact addContact={addContact} />} />
      <Route path='/contacts/:contactId' element={<ContactPage contacts={contacts} />} />
      <Route path='/' element={<ContactList contacts={contacts} />} />
    </Routes>
  );
};