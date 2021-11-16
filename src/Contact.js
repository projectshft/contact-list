/* eslint-disable react/prop-types */
import React from 'react';

const Contact = ({ props, contacts }) => {
  const id = props.match.params.index;
  // eslint-disable-next-line eqeqeq
  const contact = contacts.find((c) => c.id == id);
  console.log(contact);

  if (!contact) {
    return <div>Sorry, but the contact was not found.</div>;
  }
  return (
    <div className="container-fluid">
      <h1>hi, {contact.name}! </h1>
      <div className="col">
        <h1>{contact.name}</h1>
        <div className="row contact-row">
          <img alt="contact" className="contact-image" src={contact.img} />
        </div>
        <div className="row contact-row">
          {contact.phone} {contact.email}
        </div>
      </div>
    </div>
  );
};

export default Contact;
