import { Link } from "react-router-dom";
import React from "react";
import _ from "lodash";

const Profile = ({ contactId, contacts }) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return (
      <div className="text-center mt-5">
        <h3>Sorry, player not found.</h3>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center mt-5">Contact List</h1>
      <div className="text-center mt-5">
        <div className="d-inline-block border">
          <img
            src={contact.image_url}
            className="img-fluid"  style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
          <h4 className="mt-3">{contact.name}</h4>
          <p className="mt-3">{contact.email}</p>
          <p>{contact.phone_number}</p>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to="/contacts">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
