import React from "react";
import { Link } from "react-router-dom";
const ContactDetail = ({ contactID, contacts }) => {
  
  const contact = contacts.find((c) => {
    return c.contactID.toString() === contactID;
  });
  console.log(contact);

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="text-center">
            <div className="contact-item">
              <h1 class="text-center">Contact Detail</h1>
              <h2 class="text-center">{contact.name}</h2>
              <img src={contact.imageURL} alt={contact.name} />
              <h5 class="text-center">{contact.email}</h5>
              <h3 class="text-center">{contact.phone}</h3>
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