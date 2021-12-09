import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactDetailView from './ContactDetailView';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList'

function App() {
   
  const [contacts, setContacts] = useState(
    [
      {
      imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQFtD1m1fwk3aw/profile-displayphoto-shrink_400_400/0/1637639714385?e=1643846400&v=beta&t=c3B3SUjXftc4KiagUsZIlYm3biEUWDUxIvdinIpLCCs',
      contactName: 'Jordan Hunt',
      emailAddress:'capt.jdhunt@gmail.com',
      phoneNumber:'469-766-0179'
      }
    ]
  )

  function addContact(contact) {
    setContacts(contacts.concat([contact]));
  }


  return (
    <main>
      <Routes>
        <Route path="/" element={<ContactsList contacts={contacts} />} />
        <Route path="/new-contact/" element={<ContactForm addContact={addContact} />} />
        <Route path="/contact-detail/:index" element={<ContactDetailView contacts={contacts} />} />
      </Routes>
    </main>
  );
}



export default App;