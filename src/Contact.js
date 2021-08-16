import { Link } from 'react-router-dom';
import React from 'react';

const Contact = ({id, contacts}) => {
  const contact = contacts.find(c => parseInt(c.contactId) === id);
 
  if (!contact) {
    return <div>Contact not found</div>
  }

  return (
    <div className="card w-75">
      <h1 className="card-titleS">{contact.name}</h1>
      <img src={contact.pic_url} alt={contact.name} className="card-img-top"/>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button className="btn btn-secondary" id="edit">Edit</button>
      <button className="btn btn-secondary" id="delete">Delete</button>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default Contact