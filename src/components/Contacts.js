import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Contact from './Contact';

const Contacts = ({ contacts }) => (
  // console.log(contacts)
  <div>
    <h1>contacts list</h1>
    {contacts.map((contact) => (
      <Contact
        key={contact.id}
        name={contact.name}
        imageUrl={contact.imageUrl}
        email={contact.email}
        phoneNumber={contact.phoneNumber}
      />
    ))}
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Contacts;
