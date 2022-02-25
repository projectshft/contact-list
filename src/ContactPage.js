import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

const ContactPage = (props) => {

  const isContact = (c) => {
    return c.id === props.contactId;
  }

  const contact = props.contacts.find(isContact);

  if (!contact) {
    return <div>This contact cannot be found</div>
  }

  return (
    <div className='text-center mt-5 pt-5'>
      <h1>{contact.name}</h1>
      <img src={contact.image_url} className='rounded-circle' style={{ maxWidth: '20rem'}}></img>
      <h2>{contact.email}</h2>
      <h2>{contact.phone_number}</h2>
      <h2>
        <Link to={'/contacts'}>Back</Link>
      </h2>
    </div>
  )
}

export default ContactPage;