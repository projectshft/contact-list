import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Main />
  </div>
)

const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<ContactsList />} />
      <Route path="/contacts" element={<ContactsList />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/contacts/:number" element={<Contact />} />
    </Routes>
  </main>
)

const ContactsList = () => {
  //function addContact

  return (
    <div>
    <h1 className='text-center'>Contacts List</h1>
    <Link to='/new' className='btn btn-primary offset-md-1'>Add Contact</Link>
    <div className='container-fluid'>
      <div className='row offset-md-1'>
        <div className='col-md-3 border'>Profile Pic</div>
        <div className='col-md-2 border'>Name</div>
        <div className='col-md-3 border'>Email</div>
        <div className='col-md-2 border'>Phone Number</div>
      </div>
    </div>
  </div>
  )
  }

const NewContact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  function onNameChange(e) {
    setFullName(e.target.value);
  }
  
  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  
  function onPhoneChange(e) {
    setPhoneNumber(e.target.value);
  }
  
  function onImageChange(e) {
    setImageUrl(e.target.value);
  }

  return (
    <div>
    <h1 className='text-center'>Add Contact</h1>
    <div className='row offset-md-3 col-md-6'>
      <div>Full Name</div>
      <input value={fullName} onChange={onNameChange}></input>
      <div>Email Address</div>
      <input value={email} onChange={onEmailChange}></input>
      <div>Phone Number</div>
      <input value={phoneNumber} onChange={onPhoneChange}></input>
      <div>Image URL</div>
      <input value={imageUrl} onChange={onImageChange}></input>
      <hr />
    </div>
    
    <Link to='/contacts' className='btn btn-primary offset-md-3'>Add Contact</Link>
    <Link to='/contacts' className='btn btn-primary offset-md-4'>Back</Link>
  </div>
  )
}

const Contact = () => (
  <div>
    <h1>New Contact</h1>
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
