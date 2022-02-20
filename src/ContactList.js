import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => (
  <div className="container">
    <h1>Contact List</h1>
    <hr />
    <Link to="/new">
      <button type="button" className="btn btn-primary add-contact-button">
        Add Contact
      </button>
    </Link>
    <table className="table table-striped">
      <thead className="table-primary">
        <tr>
          <th scope="row">Profile Pic</th>
          <th scope="row">Name</th>
          <th scope="row">Email</th>
          <th scope="row">Phone</th>
          <th scope="row">Options</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.imageUrl} alt="" />
            </td>
            <td>
              <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
            </td>
            <td>{contact.email}</td>
            <td>{contact.phoneNumber}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
