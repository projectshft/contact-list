import React from 'react'
import {Link } from 'react-router-dom';

const ContactItem = ({selectedContactId, contacts}) => {
 
  const contact = contacts.find(c => c.id === selectedContactId); 
 
  return (
    <div className="contact-item">
      <h1>Contact List</h1>
      <img src={contact.image_url} alt={contact.name} />
      <h1>{contact.name}</h1>
      <h2>{contact.email}</h2>
      <h3>{contact.phone_number}</h3>

      <Link to="/" className="btn btn-primary btn">Home</Link>
    </div>
  );
};

export default ContactItem;