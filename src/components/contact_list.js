import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const ContactList = ({ contacts }) => (
  <div className="container">
    <Link to="/new" className="btn btn-primary">
      Add Contact
    </Link>
    <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Profile Picture</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => (
        <tr
          key={contact.id} className="contact-row" onClick={() => window.location.href = `/contacts/${contact.id}`}>
        
        <td>
        <img
                src={contact.ImageUrl}
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

ContactList.propType = {
  contacts: PropTypes.array.isRequired
}

  export default ContactList;