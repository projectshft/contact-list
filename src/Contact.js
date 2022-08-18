import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }

  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <img className="img-thumbnail rounded-circle" src={contact.imageURL}></img>
    <h1 className="display-4">{contact.name}</h1>
    <p className="lead">Number: {contact.number}</p>
    <p className="lead">Email: {contact.email}</p>
  </div>
  <Link to='/contacts'>Back</Link>
</div>

  )
}

export default Contact