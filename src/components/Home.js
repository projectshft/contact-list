import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ contacts }) => {
  console.log(contacts);
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.imageUrl}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button>
        <Link to="/new-contact">Add Contact</Link>
      </Button>
    </Container>
  );
};

Home.propTypes = {
  contacts: PropTypes.array,
};

export default Home;
