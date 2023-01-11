import React from 'react';
import {  Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './ContactList';
import useFetch from './useFetch';


const Contacts = () => {
  const { data: contacts, error } = useFetch("data.json");
 
  return (
    <>
      { contacts ? 
        <Table bordered hover variant="dark">
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
      : <Row> {error} </Row>
      } 
    </>
  );
}

export default Contacts;