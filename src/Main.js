import React from 'react';
import { useState, useEffect } from 'react';
import {  Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



import ContactList from './ContactList';


const Main = () => {
  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("data.json")
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setContacts(data.contacts);
        setError(null);
      })
      .catch(err => {
        setError('Cannot access contact list.  Please contact administrator for assistance.');
      })
  }, [])

  return (
    <><Container fluid="md">
      <Row>
        <h2 className='text-center'>Contacts Rolodex</h2>
      </Row>
    </Container>
    <Container fluid="md">
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
    </Container></>
  );
}

export default Main;