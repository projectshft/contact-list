import { Link } from 'react-router-dom'
import React from 'react';
import _ from 'lodash';

const Contact = ({ contactId, contacts }) => {
  const contact = _.find(contacts, { number: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }

  return (
    <div>
      <img className="profile-picture" src={contact.profilePicture} width="150" ></img>
      <h4>{contact.name}</h4>
      <h5>Email: {contact.email}</h5>
      <h6>Phone Number: {contact.phoneNumber}</h6>
      <Link to='/contacts'>Back</Link>
    </div>

    // <tr>
    //   
    //   <td>{contact.name}</td>
    //   <td>{contact.phoneNumber}</td>
    //   <td>{contact.email}</td>
    // </tr>
  )
}

export default Contact