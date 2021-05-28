import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

const Contact = ({contact, contacts, setContacts, setEditStatus, editStatus}) => {

  Contact.propTypes = {
    contact: propTypes.object
  };  

  const deleteButtonHandler = () => {
    const newContacts = contacts.filter((c) => c !== contact);
    setContacts(newContacts); 
  };
  
  const editButtonHandler = () => {
    setEditStatus(!editStatus); 
  };

  return (
    <tr>
      <td><img src={contact.image_url} alt={contact.name} className="contact-image" /></td>
      <td className="table-text">{contact.name}</td>
      <td className="table-text">{contact.email}</td>
      <td className="table-text">{contact.phone_number}</td>
      <td>
        <Link to={`/contacts/${contact.id}`}><button className = "btn-primary btn btn-sm">Info</button></Link>
      </td>
      <td>
        <Link to={`/contacts/${contact.id}/edit`}><button onClick={editButtonHandler} className="btn-primary btn btn-sm edit actions">Edit</button></Link>
        <button onClick={deleteButtonHandler} className = "btn-primary btn btn-sm delete actions">Delete</button>
      </td>
    </tr>
  );
};

export default Contact; 