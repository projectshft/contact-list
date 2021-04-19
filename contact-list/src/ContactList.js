import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './index.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <div className="col-md-8 offset-md-2">
    <Link className="btn btn-primary" to="/new">
      Add Contact
    </Link>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <Image src={contact.imgUrl} />
            </td>
            <td>
              <Link to={`contacts/${contact.id}`}>{contact.fullName}</Link>
            </td>
            <td>{contact.email}</td>
            <td>{contact.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
