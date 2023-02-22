import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: 'Albert Einstein',
      image_url:
        'https://images.newscientist.com/wp-content/uploads/2019/06/18142824/einstein.jpg',
      email: 'aeinstein@example.com',
      phone_number: '1555555555',
    },
  ]);

  return (
    <div className="container">
      <h1>Contact List</h1>
      <Link to="/add_contact_form" className="btn btn-primary">
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
            <tr key={contact.id}>
              <img
                src={contact.image_url}
                className="rounded mx-auto d-block"
                width="30%"
                height="auto"
                alt="new"
              />
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
