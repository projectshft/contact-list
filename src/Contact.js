import { Link, useParams } from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line react/prop-types
const Contact = ({ contacts }) => {
  const destructuredContacts = contacts;
  const { index } = useParams();
  const indexToMatch = parseInt(index);
  const contact = destructuredContacts.find(
    (item) => item.index === indexToMatch
  );
  if (!contact) {
    return (
      <div>
        <h1>Sorry, but the contact was not found</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{contact.imgURL}</h1>
      <h1>
        {contact.name} (ID#{contact.index})
      </h1>
      <h2>Email: {contact.email}</h2>
      <h2>Phone: {contact.phone}</h2>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Contact;
