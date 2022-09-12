/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import React from 'react';

function ContactList({ contacts }) {
  const c = contacts.map((contact) => (
    <div className="row" key={contact.id}>
      <div className="col-md-3">
        <img src={contact.imageUrl} alt={contact.name} />
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
        <h6>{contact.phoneNumber}</h6>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
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

export default ContactList;
