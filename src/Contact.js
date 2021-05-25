import { Link } from "react-router-dom";
import React from "react";
import _ from "lodash";
import "./index.css";

const Contact = ({ contactId, contacts }) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return <div>Sorry, contact was not found.</div>;
  }

  return (
    <div className="col-6 offset-3 justify-content-md-center">
      <div className="row individual-contact">
        <img
          src={contact.image_url}
          alt="image_url"
          className="rounded d-block"
        />
        <div className="contact-info">
          <br />
          <h2>{contact.name}</h2>
          <br />
          <h4>{contact.email}</h4>
          <br />
          <h4>{contact.phone_number}</h4>
        </div>
      </div>
      <div className="row">
        <Link to="/"> Back to Contact List</Link>
      </div>
    </div>
  );
};

export default Contact;
