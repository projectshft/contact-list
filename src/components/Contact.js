import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ContactType } from '../types';

const Contact = ({ contactId, contacts }) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, but the contact was not found</div>;
  }

  const { imageUrl } = contact;
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto contact-display">
          <img src={imageUrl} alt={contact.name} />
          <br />
          <h4>{contact.name}</h4>
          <h5>{contact.phone}</h5>
          <h6>{contact.email}</h6>
        </div>
      </div>
      <Link to={`/contacts/edit/${contact.id}`}>Edit contact</Link>
    </div>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(ContactType).isRequired,
  contactId: PropTypes.number.isRequired,
};

export default Contact;
