import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

const Contact = ({contact, contacts, setContacts}) => {

  Contact.propTypes = {
    contact: propTypes.object,
    contacts: propTypes.array,
    setContacts: propTypes.func
  };  

  const deleteButtonHandler = () => {
    const newContacts = contacts.filter((c) => c !== contact);
    setContacts(newContacts); 
  };
  
  return (
    <tr className="contact-row">
      <td><img src={contact.image_url} alt={contact.name} className="contact-image" /></td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone_number}</td>
      <td>
        <Link to={`/contacts/${contact.id}`}><button className = "btn-primary btn btn-sm">Info</button></Link>
      </td>
      <td>
        <Link to={`/contacts/${contact.id}/edit`}><button className="btn-primary btn btn-sm edit">Edit</button></Link>
        
        <button onClick={deleteButtonHandler} className="btn-primary btn btn-sm delete">Delete</button>
      </td>
    </tr>
  );
};

export default Contact; 