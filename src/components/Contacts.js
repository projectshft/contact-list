import React from 'react';
import Contact from './Contact';
// import { useState } from 'react';

const Contacts = (props) => {
  return (
    <div>
      <h1>contacts list</h1>
      {props.contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          image_url={contact.image_url}
          email={contact.email}
          phone_number={contact.phone_number}
        />
      ))}
    </div>
  );
};

export default Contacts;
