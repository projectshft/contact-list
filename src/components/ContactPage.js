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
    <div>
      <h1>Contact Card</h1>
      <div className="container col-sm-8" id="back-button">
        <Link to="/">Back</Link>
      </div>
      <div className="card text-center mb-3 col-sm-5" style={{ width: "18rem"}}>
        <img src={contact.imageUrl} className="card-img-top" style={{ height: "18rem" }} alt="" />
        <div className="card-body">
          <h4 className="card-title">{contact.name}</h4>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.phoneNumber}</p>
        </div>
      </div>
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
