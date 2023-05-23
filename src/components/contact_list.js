import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <div className="container">
    <h2 className="text-center">Contact List</h2>
    <Link className="btn btn-primary offset-md-1" to="/new">Add Contact</Link>
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map(contact => (
            <tr 
              key={contact.id}
              className="contact-row"
              onClick={() => (window.location.href = `/contacts/${contact.id}`)}
            >
              <td className="col-md-3">
                <img 
                  src={contact.imageURL} 
                  className="thumbnail" 
                  alt="contact profile" 
                />
              </td>
              <td>{contact.fullName}</td>
              <td>{contact.emailAddress}</td>
              <td>{contact.phoneNumber}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;