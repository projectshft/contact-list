import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'


const ContactPage = ({contacts, contactId}) => {

  console.log({contactId});
  console.log({contacts});
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found.</div>
  }

  return (
    <div className="card">
      <img className="contact-page-image" src={contact.image_url}></img>
      <div className="card-body">
        <h2 className="card-title">{contact.name}</h2>
        <p>{contact.phone_number}</p>
        <p>{contact.email}</p>
      </div>
      
    <Link to='/contacts'>Back</Link>
  </div>
    )
}

export default ContactPage