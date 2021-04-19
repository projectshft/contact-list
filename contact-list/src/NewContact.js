import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import './index.css';
import PropTypes from 'prop-types';

const generateId = () => Math.round(Math.random() * 100000000);

const NewContact = ({ addContact }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const history = useHistory();

  const handleAddContactClick = () => {
    addContact({
      id: generateId(),
      fullName,
      email,
      phoneNumber,
      imgUrl,
    });

    history.push('/contacts');
  };

  return (
    <div className="col-md-8 offset-md-2">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Full Name"
            onChange={(event) => setFullName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter Phone"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Image URL"
            onChange={(event) => setImgUrl(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleAddContactClick}>
          Add Contact
        </Button>
      </Form>
    </div>
  );
};

NewContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default NewContact;
