import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageNotFound from './Error.js';

const Contact = ({ contacts }) => {
  const params = useParams();

  // logic that returns an error page if the param is not in the id of any contact
  if (!contacts.find((contact) => contact.id === parseInt(params.contact_id))) {
    return <PageNotFound />;
  }

  const currentContact = contacts.find(
    (entry) => entry.id === parseInt(params.contact_id)
  );

  return (
    <div className="contact-page">
      <h1>{currentContact.name}</h1>
      <img src={currentContact.image_url} alt="Profile Avatar Goes Here" />
      <h4>
        <span className="special">Email:</span> - {currentContact.email}
      </h4>
      <h4>
        <span className="special">Phone Number:</span> -{' '}
        {currentContact.phone_number}
      </h4>
      <div className="back-button-container">
        <Link to="/contacts">
          <button className="btn btn-primary back-button" type="button">
            Back to All Contacts
          </button>
        </Link>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contact;
