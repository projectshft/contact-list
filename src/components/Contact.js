import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const Contact = ({ contacts }) => {
  const params = useParams();

  const currentContact = contacts.find(
    (entry) => entry.id === parseInt(params.contact_id)
  );

  return (
    <div className="contact-page">
      <h1>{currentContact.name}</h1>
      <img src={currentContact.image_url} alt="test" />
      <h4>{currentContact.email}</h4>
      <h4>{currentContact.phone_number}</h4>
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
