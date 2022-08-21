import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import SingleContact from './SingleContact';
import ContactForm from './ContactForm';

const Contacts = ({ contacts, setContacts }) => {
  console.log(contacts);
  const sortedContacts = contacts.sort((a, b) => {
    const nameA = a.lName.toUpperCase();
    const nameB = b.lName.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  console.log(sortedContacts);
  return (
    <div className="container">
      <h1>contacts list</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              fName={contact.fName}
              lName={contact.lName}
              imageUrl={contact.imageUrl}
              email={contact.email}
              phoneNumber={contact.phoneNumber}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

Contacts.propTypes = {
  setContacts: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      fName: PropTypes.string,
      lName: PropTypes.string,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Contacts;
