import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContactInfo = ({ contact }) => (
  <div>
    <h1>Contact Info</h1>
    <div className="col-md-4 offset-md-4 card">
      <img src={contact.imageUrl} alt="" className="card-img-top" />
      <div className="card-body">
        <h5>{contact.name}</h5>
        <p>{contact.email}</p>
        <p>{contact.phoneNumber}</p>
      </div>
    </div>
    <div className="col-md-4 offset-md-4">
      <Link to="/">
        <button type="button" className="btn btn-primary contact-button">
          Back
        </button>
      </Link>
    </div>
  </div>
);

ContactInfo.propTypes = {
  contact: PropTypes.object,
};

export default ContactInfo;
