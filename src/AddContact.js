import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';


const AddContact = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const generateID = () => Math.round(Math.random() * 100000000);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { id: generateID(), name, imageUrl, email, phone }
    contacts.push(contact)
    console.log(contacts);
    setContacts(contacts);
    history.push("/contacts");
  }
  
  return ( 
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="vstack mx-auto" style={{width: 1000}}>
          <Form.Group className="mb-3" as={Col} md="4" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Col>
              <Form.Control 
                required 
                type="text" 
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Col} md="4" controlId="emailAddress">
            <Form.Label>E-mail Address</Form.Label>
            <Col>
              <Form.Control 
                required
                type="email" 
                placeholder="E-mail Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Col} md="4" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Col>
              <Form.Control 
                required
                type="tel" 
                placeholder="Enter Phone Number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Col} md="4" controlId="imageUrl">
            <Form.Label>Image URL</Form.Label>
            <Col>
              <Form.Control 
                required
                type="url" 
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Col>
            <Button className="mt-3" type="submit" variant="dark">Submit Contact</Button>
          </Form.Group>
        </Row>
      </Form>  
    </Container>
   );
}

AddContact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setContacts: PropTypes.func.isRequired
};

export default AddContact;