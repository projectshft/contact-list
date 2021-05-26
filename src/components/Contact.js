import React from 'react';
import {Link} from 'react-router-dom';
import ContactItem from './ContactItem'; 

const Contact = ({contact, contacts}) => {


  return (
    <tr>
      <td><Link to={`/contacts/${contact.id}`} ><img src={contact.image_url} alt={contact.name} className="contact-image" /></Link></td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone_number}</td>
    </tr>
  );
};

export default Contact; 