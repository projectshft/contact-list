import React from 'react';
import {Link} from 'react-router-dom';

const Contact = ({contact, contacts}) => {

  return (
    <tr>
      <td><img src={contact.image_url} alt={contact.name} className="contact-image" /></td>
      <td className="table-text">{contact.name}</td>
      <td className="table-text">{contact.email}</td>
      <td className="table-text">{contact.phone_number}</td>
      <td><Link to={`/contacts/${contact.id}`}><button data-select= {contact.id} className = "btn-primary btn btn-sm">Info</button></Link>
      </td>
    </tr>
  );
};

export default Contact; 