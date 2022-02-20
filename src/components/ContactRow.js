import "./Contacts.css";
import { Link } from "react-router-dom";
import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import PropTypes from "prop-types";
import phoneNumberPropType from "phone-number-prop-type";

const ContactRow = (props) => {
  const handleDelete = (index) => {
    //Modal box for delete confirmation
    confirmAlert({
      title: "You sure about this?",
      message: "Deleting a contact is permanent",
      buttons: [
        {
          label: "Delete!",
          onClick: () => props.onDelete(index),
        },
        {
          label: "Cancel",
          onClick: () => console.log("cancelled"),
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  //Mapping out rows for each individual contact
  return props.contacts.map((contact, i) => {
    return (
      <tr className="contact-row" key={i}>
        <td>
          <Link to={`/contacts/${contact.id}`}>
            <img
              className="contact-image"
              src={contact.image}
              alt="friend-list"
            />
          </Link>
        </td>
        <td className="align-middle">
          <Link to={`/contacts/${contact.id}`}>
            {contact.fName} {contact.lName}
          </Link>
        </td>
        <td className="align-middle">
          <a
            className="email-link"
            href={`mailto:${contact.email}`}
            aria-label="email"
          >
            {contact.email}
          </a>
        </td>
        <td className="align-middle">{contact.phone}</td>
        <td className="align-middle">
          <Link to={`/contacts/${contact.id}/edit`} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td className="align-middle">
          <button
            className="btn btn-danger delete-contact-btn"
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
};

ContactRow.propTypes = {
  fName: PropTypes.string,
  lName: PropTypes.string,
  email: PropTypes.string,
  phone: phoneNumberPropType,
  image: PropTypes.string,
};

export default ContactRow;
