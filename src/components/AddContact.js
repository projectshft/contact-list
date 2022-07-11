import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Container Classes AddContact //
const containerStyleAdd = 'contact-form bg-primary pt-4 border border-warning';
const AddContact = ({ onAdd }) => {
  const navigate = useNavigate();
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
    } else {
      onAdd({ name, email, number, img });
      navigate('/contacts');
      // Clearing Input //
      setName('');
      setEmail('');
      setNumber('');
      setPicture('');
    }
  };
  return (
    <Container className={containerStyleAdd}>
      <h1 className="h1-contact text-warning">Add a New Contact</h1>
      <hr />
      <Form onSubmit={onSubmit} className="pb-5">
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
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="form-group" controlId="form.Number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="example: 1234567899"
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
        <Form.Group className="form-group" controlId="form.button">
          <Button className="btn-add-contact" variant="warning" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

// PropTypes //
AddContact.propTypes = {
  onAdd: PropTypes.func,
};

export default AddContact;
