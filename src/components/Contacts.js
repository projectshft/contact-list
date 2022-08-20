import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Contact from './Contact';

const Contacts = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      <h1>contacts list</h1>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          fName={contact.fName}
          lName={contact.lName}
          imageUrl={contact.imageUrl}
          email={contact.email}
          phoneNumber={contact.phoneNumber}
        />
      ))}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      fName: PropTypes.string,
      lName: PropTypes.string,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Contacts;
