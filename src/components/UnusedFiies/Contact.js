import "./Contact.css";
import { Link } from "react-router-dom";
import React from "react";

const Contact = ({ id, fName, lName, phone, email, image }) => {
  const handleDelete = (e) => {
    console.log("clicked");
  };

  return (
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
      <td className="align-middle">
        <button
          className="btn btn-danger delete-contact-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

// export default Contact;
