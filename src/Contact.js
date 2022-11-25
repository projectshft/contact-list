import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { number: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <img src={contact.profilePic} alt="Profile Pic"/>
      <h1>{contact.name} </h1>
      <h3>Email:{contact.email}</h3>
      <h2>Phone Number:{contact.number}</h2>

      <Link to='/'>
      <button type="button" class="btn btn-primary">Back</button></Link>
    </div>
  )
}

export default Contact
