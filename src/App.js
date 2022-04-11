import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { sampleData } from './sampleData';
import AllContacts from './components/AllContacts';
import NewContact from './components/NewContact';
import UniqueContact from './components/UniqueContact';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState(sampleData);

  const createContact = (newContact) => {
    setContacts(contacts.concat(newContact));
  };

  const getContact = id => {
    const isContact = p => p.id === id;
    return contacts.find(isContact);
  };

  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<AllContacts contacts={contacts} />}
        />
        <Route 
          path="/new" 
          element={<NewContact createContact={createContact} />} 
        />
        <Route 
          path="/:uniqueContactId" 
          element={<UniqueContact getContact={getContact}/>} 
        />
      </Routes>
    </div>
  );
};
