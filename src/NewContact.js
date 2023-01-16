import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import data from './data.json'

const NewContact= () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const navigate = useNavigate();

  const createNew = () => {
    const newContact = {
      id: data.contacts.length + 1,
      image_url: imageUrl,
      name: name,
      email: email,
      phone_number: phoneNumber
    };

    data.contacts.push(newContact); // add the new contact to the data file
    navigate('/');
  }

  return(
    <div className="container py-5">
      <Form>
        <Form.Group className="mb-3" controlId="image_url">
          <Form.Label>Image URL</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group> 

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone_number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Button onClick={createNew} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewContact
