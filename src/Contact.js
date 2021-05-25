import { Link } from "react-router-dom";
import React from "react";
import _ from "lodash";

const Contact = ({ contactId, contacts }) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, contact was not found.</div>;
  }

  return (
    <div>
      <h1>{contact.name}</h1>
      <h1>{contact.email}</h1>
      <h1>{contact.phone_number}</h1>
      <Link to="/"> Back to Contact List</Link>
    </div>
  );
};

export default Contact;
