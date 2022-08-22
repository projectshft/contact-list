import React, { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';
import { PropTypes } from 'prop-types';
import { useParams, Link } from 'react-router-dom';
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
              <img
                src={
                  contact[0].imageUrl === ''
                    ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                    : contact[0].imageUrl
                }
                alt={contact[0].lName}
              />
            </td>

            <td>{contact[0].fName}</td>
            <td>{contact[0].lName}</td>
            <td>
              <a href="mailto:" target="_blank" rel="noreferrer">
                {contact[0].email}
              </a>
            </td>
            <td>{contact[0].phoneNumber}</td>
          </tr>
        </tbody>
      </Table>
      <div className="button-row">
        {/* <Link to={`/contacts/${contact[0].id}/edit`}>
          <Button variant="Secondary" className="editButton">
            Edit
          </Button>
        </Link> */}
        <Link to={`/contacts/${contact[0].id}/delete`}>
          <Button variant="Danger" className="deleteButton">
            Delete
          </Button>
        </Link>
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
