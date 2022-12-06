import { Link } from 'react-router-dom';
import React from 'react'
import _ from 'lodash'

const Contact = ({contactID, contacts}) => {
  //check json for ID then out that contact
  const contact = _.find(contacts, {id: contactID})
  console.log(contact);
  if (!contact) {
    return (
      <div>
        <h2>Contact not found</h2>
        <Link to='/'>Back</Link>
      </div>
    )
  }
  
  return(
    <div>
      <img src={contact.image_url} alt="headshot" width="250" height="350"/>
      <h1>
        {contact.name}
      </h1>
      <ul>
        <li>{contact.phone_number}</li>
        <li>{contact.email}</li>
      </ul>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Contact;