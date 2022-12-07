import { Link, useHistory } from 'react-router-dom';
import React from 'react'
import _ from 'lodash'

const Contact = ({contactID, contacts}) => {
  const history = useHistory();
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
    <div className="card">
      <img src={contact.image_url} class="card-img-top" alt="headshot"/>
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Phone Number: {contact.phone_number}</p>
        <p className="card-text">Email: {contact.email}</p>
        <button onClick={() => history.push('/')} className="btn btn-secondary">Go back</button>
      </div>
    </div>
  )
}

export default Contact;