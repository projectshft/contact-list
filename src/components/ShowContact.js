import { Link } from 'react-router-dom';
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

const ShowContact = ({ contactId, contacts }) => {
  const contact = contacts[contactId];

  if (!contact) {
    return <div>Sorry, the contact was not found</div>;
  }

  return (
    <div className="card">
      <img className="card-img-top" src={contact.imageUrl} alt={contact.name} />
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <div className="card-text">
          <div className="card-email">{contact.email}</div>
          <div className="card-phoneNumber">{contact.phoneNumber}</div>
        </div>
        <Link to="/contacts">Back</Link>
      </div>
    </div>
  );
};

ShowContact.propTypes = {
  contactId: PropTypes.number.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ShowContact;
