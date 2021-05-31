import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

//detailed view of contact
const ContactInfo= ({selectedContactId, contacts}) => {

  ContactInfo.propTypes = {
    selectedContactId: propTypes.string,
    contacts: propTypes.array,
  };  
 
  const contact = contacts.find(c => c.id === selectedContactId); 
 
  return (
    <div className="contact-item">
      <h1>Contact List</h1>
      <img src={contact.image_url} alt={contact.name} />
      <h2>{contact.name}</h2>
      <h3>{contact.email}</h3>
      <h3>{contact.phone_number}</h3>

      <Link to="/" className="btn btn-primary btn">Home</Link>
    </div>
  );
};

export default ContactInfo;