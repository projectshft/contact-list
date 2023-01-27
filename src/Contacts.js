import React from 'react';
import {  Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './ContactList';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
 
  return (

    <>
      { contacts ? 
        <Table className="mt-4" responsive bordered hover variant="dark">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Phone Number</th>
            </tr>
          </thead>
            <ContactList contacts={contacts} />
        </Table>
      : <Row>'Cannot access contact list.  Please contact administrator for assistance.'</Row>
      } 
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Contacts;