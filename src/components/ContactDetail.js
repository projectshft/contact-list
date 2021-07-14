import React from "react";
import { Link } from "react-router-dom";
const ContactDetail = ({ contactID, contacts }) => {

  const contact = contacts.find((c) => {
    return c.contactID.toString() === contactID;
  });
  console.log(contact);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="text-center">
            <div className="contact-item">
              <h1 className="text-center">Contact Detail</h1>
              <h2 className="text-center">{contact.name}</h2>
              <img src={contact.imageURL} alt={contact.name} />
              <h5 className="text-center">{contact.email}</h5>
              <h3 className="text-center">{contact.phone}</h3>
              <Link to="/" className="btn btn-primary btn">
                Return to Contact List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetail;