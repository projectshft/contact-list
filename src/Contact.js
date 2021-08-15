import { Link } from 'react-router-dom';
import React from 'react';
import _ from 'lodash';

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { contactId : contactId });
  console.log(contacts);
  console.log(contactId)

  if (!contact) {
    return <div>Contact not found</div>
  }

  return (
    <div>
      <h1>{contact.name}</h1>
      <img src={contact.pic_url} alt={contact.name}/>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button class="btn" id="edit">Edit</button>
      <button class="btn" id="delete">Delete</button>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default Contact