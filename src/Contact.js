import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Contact = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id, 10));
  if (!contact) {
    return (
      <div>
        <h1>Sorry, but the contact was not found</h1>
        <Link to="/contacts" className="btn btn-primary">
          Go back to Contacts
        </Link>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="card">
        <img
          src={contact.imageUrl}
          className="rounded mx-auto d-block"
          width="30%"
          height="auto"
          alt="new"
        />
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">Email: {contact.email}</p>
          <p className="card-text">Phone Number: {contact.phoneNumber}</p>
        </div>
        <div className="card-footer">
          <Link to="/contacts" className="btn btn-primary">
            Go back to Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contact;
