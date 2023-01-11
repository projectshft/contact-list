import React from 'react';
import { Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddContact = () => {
  return ( 
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="emailAddress">
          <Form.Label>E-mail Address</Form.Label>
          <Form.Control type="email" placeholder="E-mail Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" placeholder="Enter Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="imageurl" placeholder="Image URL" />
        </Form.Group>
      </Form>  
    </Container> 
   );
}
 
export default AddContact;