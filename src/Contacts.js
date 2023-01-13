import React from 'react';
import {  Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './ContactList';


const Contacts = ({ contacts }) => {
 
  return (

    <>
      { contacts ? 
        <Table className="mt-4" bordered hover variant="dark">
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

export default Contacts;