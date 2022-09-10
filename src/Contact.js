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

  const imageUrl = `{contact.imageUrl}`;
  return (
    <div className="justify-content-md-center">
      <div className="col-md-auto">
        <img src={imageUrl} alt={contact.name} />
      </div>
      <h3>{contact.name}</h3>
      <h3>{contact.phoneNumber}</h3>
      <h3>{contact.email}</h3>
      <Link to="/contacts">Back</Link>
    </div>
  );
};

export default Contact;
