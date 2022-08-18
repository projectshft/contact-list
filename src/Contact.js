import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }

  return (
    <div>
      <h1>{contact.name}</h1>
      <img src={contact.imageURL}></img>
      <h2>Number: {contact.number}</h2>
      <h2>Email: {contact.email}</h2>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default Contact