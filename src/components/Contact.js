import "./Contact.css";
import { Link } from "react-router-dom";
import React from "react";

const Contact = ({ id, phone, email, fName, lName, image }) => (
  <tr className="contact-row">
    <td>
      <Link to={`/contacts/${id}`}>
        <img className="contact-image" src={image} alt="friend-list" />
      </Link>
    </td>
    <td className="align-middle">
      {fName} {lName}
    </td>
    <td className="align-middle">{email}</td>
    <td className="align-middle">{phone}</td>
  </tr>
);

export default Contact;
