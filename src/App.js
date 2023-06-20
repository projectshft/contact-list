
import './App.css';
import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import AddNewContact from './components/add_new_contact';
import Contact from './components/contact_id';
import ContactList from './components/contact_list';


function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [
      {
        id: 1,
        name: 'Maximus Mighty-Dog Mueller II',
        email: 'mayordog@govern.com',
        phoneNumber: '5558881234',
        ImageUrl: 'https://ghk.h-cdn.co/assets/17/18/2560x2560/square-gettyimages-147786673.jpg'
      }
    ]
  );

  useEffect(() => {
    storeContact(contacts);
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((previousContact) => [...previousContact, newContact]);
  };
  return (
    <div>
      <h1>Contact List</h1>
      <Routes>
        <Route exact path="/" element={<ContactList contacts={contacts} />} />
        <Route path="/new" element={<AddNewContact addContact={addContact} setContacts={setContacts}/>}/>
        <Route path="contacts/:id" element={<Contact contacts={contacts}/>} />
      </Routes>
    </div>
  );
}
    
const storeContact = (contacts) => {
  localStorage.setItem('contacts',JSON.stringify(contacts));
};
 
  

export default App;
