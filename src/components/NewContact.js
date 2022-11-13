import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const NewContact = ({ addContact, history }) => {
  const [name, setName] = useState('Damian');
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [imageUrl, setImageUrl] = useState();

  const handleClick = () => {
    const uniqueId = Math.round(Math.random() * 10000)
    addContact(name, email, phone, imageUrl, uniqueId);
    history.push('/')
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Control value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control value={phone} onChange={(e) => { setPhone(e.target.value) }} type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group>
              <Form.Control value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} type="text" placeholder="Image URL" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="file" />
            </Form.Group>
            <Button onClick={handleClick} variant='primary' type='submit'>Add Contact</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewContact;
