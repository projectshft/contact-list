import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddContact = () => (
  <Container>
    <Form>
      <Form.Group className="form-group" controlId="form.Name">
        <Form.Label>Enter First and Last Name</Form.Label>
        <Form.Control type="text" placeholder="example: John Doe" />
      </Form.Group>
      <Form.Group className="form-group" controlId="form.Email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" placeholder="example@gmail.com" />
      </Form.Group>
      <Form.Group className="form-group" controlId="form.Number">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="example: 123-456-7899" />
      </Form.Group>

      <Form.Group className="form-group" controlId="form.Picture">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control type="text" placeholder="Profile Picture URL" />
      </Form.Group>
      <Button className="btn-add-contact" variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
);

export default AddContact;
