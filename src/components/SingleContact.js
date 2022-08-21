import React, { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import './Contact.css';

const SingleContact = (props) => {
  // props coming from App.js <SingleContact ///> router call
  const { id, contact } = props;

  console.log(contact);
  console.log(id);
  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-pic">
              <img src={contact.imageUrl} alt={contact.lName} />
            </td>

            <td>{contact.fName}</td>
            <td>{contact.lName}</td>
            <td>
              <a href="mailto:" target="_blank" rel="noreferrer">
                {contact.email}
              </a>
            </td>
            <td>{contact.phoneNumber}</td>
          </tr>
        </tbody>
      </Table>
      <div className="button-row">
        <Button variant="Secondary" className="editButton">
          Edit
        </Button>
        <Button variant="Danger" className="deleteButton">
          Delete
        </Button>
      </div>
    </div>
  );
};

SingleContact.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      fName: PropTypes.string,
      lName: PropTypes.string,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    })
  ),
  id: PropTypes.number,
};

export default SingleContact;
