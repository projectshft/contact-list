import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const NewContact = ({ createContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image_url, setImage_url] = useState('');

  const createId = () => Math.round(Math.random() * 100000000);

  const validateRequiredInput = ({ name, email, phone, image_url }) => {
    if (!name.trim() || !email.trim() || !phone.trim() || !image_url.trim()) {
      return false;
    } else {
      return true;
    }
  }  

  const handleSubmitContact = () => {    
    const requiredInput = validateRequiredInput({
      name,
      email,
      phone,
      image_url
    });

    if (!requiredInput) {
      alert('Error: Please complete all fields.');
    } else {
      const newContact = {
        id: createId(),
        name,
        email,
        phone,
        image_url,
      };
  
      createContact(newContact);
      navigate("/")
    }
  }

  const navigate = useNavigate();

  return (
    <div>
      <h1>New Contact</h1>

      <Container>
      <Button 
          role="button" 
          className="btn btn-secondary btn-sm" 
          onClick={() => navigate("/")}>
            Back
        </Button>

        <Form>
          <Form.Group as={Row} className="name mb-3">
            <Form.Label column sm="3">
              Full Name
            </Form.Label>
            <Col sm="9">
              <Form.Control 
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="email mb-3">
            <Form.Label column sm="3">
              Email Address
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="phone mb-3">
            <Form.Label column sm="3">
              Phone Number
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="(XXX) XXX-XXXX"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="image_url">
            <Form.Label column sm="3">
              Profile Image URL
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="Preferred in .jpg or .png"
                onChange={(e) => setImage_url(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Button 
            type="button" 
            className="btn btn-primary btn-sm"
            onClick={handleSubmitContact}
          >
            Submit
          </Button>
        </Form>
      </Container>
  
    </div>
  )
};

NewContact.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default NewContact;
