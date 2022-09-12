/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/prop-types */
// function component on creating a contact with a number in URL which is matched with its id

import { Link } from 'react-router-dom';
import React from 'react';
import _ from 'lodash';

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
        <Link to="/contacts">
          {/* <button type="button" className="btn btn-default"> */}
          Back to contacts
          {/* </button> */}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
