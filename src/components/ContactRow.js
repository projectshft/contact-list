import "./Contacts.css";
import { Link } from "react-router-dom";
import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ContactRow = (props) => {
  const handleDelete = (index) => {
    console.log("clicked");
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

  //   const deleteModal = (index) => {};
  return props.contacts.map((contact, i) => {
    return (
      <tr className="contact-row" key={i}>
        <td>
          <Link to={`/contacts/${contact.id}`}>
            <img
              className="contact-image"
              src={contact.image}
              alt="friend-list"
              key={i}
            />
          </Link>
        </td>
        <td className="align-middle">
          <Link to={`/contacts/${contact.id}`}>
            {contact.fName} {contact.lName}{" "}
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
          <button
            key={i}
            className="btn btn-danger delete-contact-btn"
            onClick={() => {
              //   if (window.confirm("Are you sure you wish to delete this item?"))
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

export default ContactRow;
