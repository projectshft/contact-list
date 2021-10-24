import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Contact = ({ contactId, contacts }) => {
  const contact = contacts.find((p) => p.id === contactId);

  if (!contact) {
    return (
      <div>
        <h2>Sorry, but that contact was not found</h2>
        <Link to="/contacts">
          <button type="button" className="btn btn-outline-primary">
            Back to Your Contacts
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div align="center">
      <h1>{contact.name}</h1>
      <img src={contact.pictureUrl} alt="" width="300" height="300" />
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <Link to="/contacts">
        <button type="button" className="btn btn-outline-primary">
          Back to Your Contacts
        </button>
      </Link>
    </div>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      pictureUrl: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  contactId: PropTypes.number.isRequired,
};

export default Contact;
