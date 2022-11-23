import React from "react";
import { useParams, Link } from "react-router-dom";

const ClickedContact = ({ contacts, match }) => {
  const { id } = useParams();

  const contact = contacts.find((obj) => obj.phone === id);

  return (
    <div className="mx-auto">
      <div>
        <img src={contact.URL || null} height="400" width="350" alt="" />
      </div>
      <div>Name: {contact.fullName || null}</div>
      <div>Email: {contact.email || null}</div>
      <div>Phone: {contact.phone || null}</div>
      <Link to="/">
        <button className="btn btn-primary custom">Home</button>
      </Link>
    </div>
  );
};

export default ClickedContact;
