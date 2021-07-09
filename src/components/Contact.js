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
      <h1>{contact.name} (#{contact.number})</h1>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Contact;