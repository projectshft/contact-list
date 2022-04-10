import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default function NewContact() {
  return (
    <div>
      <h1>New Contact</h1>

      <Container>
        <a role="button" href="/" className="btn btn-secondary btn btn-sm">Back</a>

        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Full Name
            </Form.Label>
            <Col sm="9">
              <Form.Control 
                required 
                type="text" 
                placeholder="Enter Name" 
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Email Address
            </Form.Label>
            <Col sm="9">
              <Form.Control
                required 
                type="email"
                placeholder="Enter Email" 
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Phone Number
            </Form.Label>
            <Col sm="9">
              <Form.Control
                required 
                type="text"
                placeholder="(XXX) XXX-XXXX" 
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Profile Image URL
            </Form.Label>
            <Col sm="9">
              <Form.Control
                required 
                type="text"
                placeholder="Preferred in .jpg or .png" 
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="button" className="btn-sm">
            Submit
          </Button>
        </Form>
      </Container>
  
    </div>
  )
};

// TODO Form.Control.Feedback
{/* <Form.Control.Feedback type="invalid">
  Please choose a username.
</Form.Control.Feedback> */}

//OnSubmit?
