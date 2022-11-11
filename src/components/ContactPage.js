import React from 'react';
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function ContactPage({contacts}) {
  let { contactId } = useParams();
  const id = parseInt(contactId, 10);
  const contact = contacts.find(element => {
    return element.id === id;
  });

  return (
    <div className="container col-sm-8">
      <h1>{contact.name}</h1>
        <img src={contact.imageUrl} style={{ height: "250px", width: "250px" }} alt="" />
          <h4>{contact.name}</h4>
          <p>{contact.email}</p>
          <p>{contact.phoneNumber}</p>
          <Link to="/"><button className="btn btn-dark">Back</button></Link>
    </div>
  )
}

ContactPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired,
}