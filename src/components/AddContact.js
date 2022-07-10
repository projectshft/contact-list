import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddContact = ({ onAdd }) => {
  // Setting the Component Level State for each input //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [img, setPicture] = useState('');

  // On Submit Passing CL State Obj into onAdd //
  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !number || !img) {
      alert('Please Complete the Form');
    }
    onAdd({ name, email, number, img });
    // Clearing Input //
    setName('');
    setEmail('');
    setNumber('');
    setPicture('');
  };
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="form-group" controlId="form.Name">
          <Form.Label>Enter First and Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="example: John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="form-group" controlId="form.Email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="example@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="form-group" controlId="form.Number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="example: 123-456-7899"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="form-group" controlId="form.Picture">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="text"
            placeholder="Profile Picture URL"
            value={img}
            onChange={(event) => setPicture(event.target.value)}
          />
        </Form.Group>
        <Button className="btn-add-contact" variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

// PropTypes //
AddContact.propTypes = {
  onAdd: PropTypes.func,
};

export default AddContact;
