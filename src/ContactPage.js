import React from 'react';
import {Link} from 'react';
import App from './App'

const ContactPage = (props) => {

  const contact = props.contacts.find((contact) => contact.id === 0);

  if (!contact) {
    return <div>This contact cannot be found</div>
  }

  return (
    <div className='text-center mt-5'>
      <h1>{contact.name}</h1>
      <img src={contact.image_url} className='rounded-circle' style={{ maxWidth: '20rem'}}></img>
      <h2>{contact.email}</h2>
      <h2>{contact.phone_number}</h2>
    </div>
  )
}

export default ContactPage;