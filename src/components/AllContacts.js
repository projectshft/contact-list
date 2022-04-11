import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Table } from 'react-bootstrap';

const AllContacts = ({ contacts }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact List</h1>

      <Container>
        <Button 
          type="button" 
          className="btn btn-primary btn-sm" 
          onClick={() => navigate("/new")}>
            + New Contact
        </Button>
        
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id} onClick={() => navigate(`/${c.id}`)}>
                <td>
                  <img src={c.image_url} className="img-responsive center-block d-block mx-auto"
                  alt="" />
                </td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      
      </Container>
  </div>
  );
};

AllContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default AllContacts;