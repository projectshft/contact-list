import { Link } from "react-router-dom";
import React from "react";

const ContactDetail = ({ contactID, contacts }) => {

  const contact = contacts.find((c) => c.contactID.toString() === contactID);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <div className="text-center">
            <h1>Contact Detail</h1>
              <h2>{contact.name}</h2>
              <img src={contact.imageURL} alt={contact.name} />
              <h5>{contact.email}</h5>
              <h3>{contact.phone}</h3>
              <Link to="/" className="btn btn-primary btn">
                Return to Contact List
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactDetail;