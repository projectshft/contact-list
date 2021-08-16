import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import data from './components/Contact.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  const [contacts, setContacts] = useState(data);
  return (
    <div className="app-container">
      <div className="title">
        <h2><strong>Contact List</strong></h2>
      <div>
      
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Pic</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((contact)=> (
      <tr>
        <td>{contact.profilePicture}</td>
        <td>{contact.fullName}</td>
        <td>{contact.email}</td>
        <td>{contact.phoneNumber}</td>
    </tr>
    ))}
    
  </tbody>
    </table>
        <div 
          class="d-grid gap-2 d-md-block">
          <button class="btn btn-primary add-contact" type="button">Add Contact</button>
        </div>
      </div>
        </div>
      </div>
    
    );
  };


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


