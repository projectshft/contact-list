import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'


const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { number: contactId });

  if (!contact) {
    return <div>Sorry, but the player was not found</div>
  }
  
  return (
    <div>
      <img src={contact.profilePic} alt="Profile Pic"/>
      <h1>{contact.name} </h1>
      <h2>Email: {contact.email}</h2>
      <h2>Phone Number: {contact.phoneNumber}</h2>
      <Link to='/Roster'><button type="button">Back</button></Link>
    </div>
  )
  
}

export default Contact