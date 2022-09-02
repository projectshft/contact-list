import React, { useState } from 'react';
import 'react-bootstrap';
import {Form, Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import RenderContacts from '../components/RenderContacts';

 const AddContact = (props) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = [];
    submission.push(inputs)
    // props.passChildData(submission);
    
    
    };
  
  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Form>
        <h1>Add New Contact</h1>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label>
             Enter Full Name
          </Form.Label>
          <Col sm={15}>
            <Form.Control 
              type='text'
              name='contact_name'
              placeholder="first and last name"
              value={inputs.contact_name || ""}
              onChange={handleChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label>
            Enter Email
          </Form.Label>
          <Col sm={15}>
            <Form.Control 
              type='email'
              name='email'
              placeholder="email@example.com"
              value={inputs.email || ""}
              onChange={handleChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label>
            Enter Phone Number
          </Form.Label>
          <Col sm={15}>
            <Form.Control 
              type='text'
              pattern="[-()0-9]*"
              name='phone_number'
              placeholder="(xxx)xxx-xxxx"
              value={inputs.phone_number || ""}
              onChange={handleChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label>
            Enter Image Url
          </Form.Label>
          <Col sm={15}>
            <Form.Control 
              type='text'
              name='img_url'
              placeholder="https://yourimageurl.jpg"
              value={inputs.img_url || ""}
              onChange={handleChange} />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>{'  '}
        <Link to='/'>
        <Button  variant='success'>Back to Contacts Page</Button>
        </Link>
      </Form>
    </div>
    )
};

export default AddContact;