import './App.css';
import React from 'react';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import ContactTable from './contact-table';
import NewContact from './new-contact';
import ContactView from './contact-view'


function App() {
  const navigate = useNavigate();
  const [contactList, SetcontactList] = useState([
    ]
  );

  const HandleNewContactSubmit = (event) => {
    event.preventDefault();
    const generateId = () => Math.round(Math.random() * 100000000);
    const newContact =  {
      id: generateId(), 
      name: event.target.name.value,
      email: event.target.email.value,
      phone_number: event.target.phoneNumber.value,
      image_url: event.target.url.value
    }
      SetcontactList([...contactList, newContact]); 
      event.target.name.value = '';
      event.target.email.value = '';
      event.target.phoneNumber.value = '';
      event.target.url.value = '';
      navigate('/')
    }

  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={
        <ContactTable contacts = {contactList} setContact = {SetcontactList}/>
        } />
      <Route path="/new" element={<NewContact HandleNewContactSubmit = {HandleNewContactSubmit}/>} />
      <Route path = '/:id' element = {<ContactView contacts = {contactList}/>}/>
    </Routes> 
    </div>
  );
}

export default App;
