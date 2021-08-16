import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import data from './components/Contact.json';
import NewContact from './components/NewContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

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
        <th scope="row"><img src={contact.profilePicture} alt=''></img></th>
        <td>{contact.fullName}</td>
        <td>{contact.email}</td>
        <td>{contact.phoneNumber}</td>
    </tr>
    ))}
    
  </tbody>
    </table>
        <div 
          class="d-grid gap-2 d-md-block">
            <Link to="NewContact">
                <button onClick={NewContact} class="btn btn-primary add-contact" type="button">Add Contact</button>
            </Link>
          
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


