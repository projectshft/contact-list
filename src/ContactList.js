import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => (
  <div className="container">
    <Link to="/new" className="btn btn-primary">
      Add Contact
    </Link>
    <table className="table">
      <thead>
        <tr>
          <th itemScope="col">Profile Pic</th>
          <th itemScope="col">Name</th>
          <th itemScope="col">Email</th>
          <th itemScope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr
            key={contact.id}
            className="contact-row"
            onClick={() => (window.location.href = `/contacts/${contact.id}`)}
          >
            <td>
              <img
                src={contact.imageUrl}
                className="rounded mx-auto d-block"
                width="25%"
                height="auto"
                alt="new"
              />
            </td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
