import { Link } from 'react-router-dom'
import React from 'react';
import './App.css';

const Contact = ({ contactId, contacts }) => {
  const contact = contacts[contactId];

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }

  return (
    <div className="contact-details">
      <img className="profile-picture" src={contact.profilePicture} width="150" ></img>
      <h4>{contact.name}</h4>
      <h5>Email: {contact.email}</h5>
      <h6>Phone Number: {contact.phoneNumber}</h6>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default Contact