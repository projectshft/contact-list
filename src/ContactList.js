import React, { useState }  from 'react';
import Contact  from './Contact';
import AddContact from './AddContact';
import { Switch, Route, Link } from 'react-router-dom';


const ContactList = (props) => {

  return (
  <div>
    
      <Link to='/contacts/new'><button type="submit" className="btn btn-primary">Add Contact</button></Link>
    
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Profile Pic</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
    <tbody>
      <tr>

      </tr>
    </tbody>
    </table>
  </div>
  );
  
};

 export default ContactList;
 
