import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({contactId, contacts}) => {
  const contact= _.find(contacts, { number: contactId });

    
  return (
    <div>
      <div>{contact.picture}</div>
      <h1>{contact.name}</h1>
      <h1>{contact.email}</h1>
      <h1>{contact.phone}</h1>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default Contact