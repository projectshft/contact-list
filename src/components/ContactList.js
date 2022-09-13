/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
// import PropTypes from 'prop-types';
// import { ContactType } from '../types';

function ContactList({ contacts }) {
  const c = contacts.map((contact) => (
    <div className="row" key={contact.id}>
      <div className="col-md-3">
        <Link to={`/contacts/${contact.id}`}>
          <img src={contact.imageUrl} alt={contact.name} />
        </Link>
      </div>
      <div className="col-md-3">
        <Link to={`/contacts/${contact.id}`}>
          <h6>{contact.name}</h6>
        </Link>
      </div>
      <div className="col-md-3">
        <h6>{contact.email}</h6>
      </div>
      <div className="col-md-3">
        <h6>{contact.phone}</h6>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row head">
        <div className="col-md-3">
          <h3>Photo</h3>
        </div>
        <div className="col-md-3">
          <h3>Name</h3>
        </div>
        <div className="col-md-3">
          <h3>Email</h3>
        </div>
        <div className="col-md-3">
          <h3>Phone</h3>
        </div>
      </div>
      {c}
    </div>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array(ContactType).isRequired,
// };

// PropTypes.checkPropTypes(ContactType);

export default ContactList;
