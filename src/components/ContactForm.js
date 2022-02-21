import { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ContactForm = ({ addContact, listOfIds }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const generateId = () => Math.round(Math.random() * 100000000);

  // this ensures it won't create an id that already exists, I'm sure this would be inefficient for a huge production database
  const makeId = () => {
    let newId = generateId();
    while (listOfIds.includes(newId)) {
      newId = generateId();
    }
    return newId;
  };

  const handleSubmit = () => {
    const newContact = {
      id: makeId(),
      name,
      email,
      phone,
      photoUrl,
    };

    addContact(newContact);
  };

  return (
    <Col md={{ span: 6, offset: 3 }}>
      <div className="d-flex justify-content-evenly">
        <div>
          <h2>Add Contact</h2>
        </div>
        <div>
          <LinkContainer to="/">
            <Button variant="outline-dark">Back</Button>
          </LinkContainer>
        </div>
      </div>

      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-evenly">
          <LinkContainer to="/">
            <Button
              variant="outline-dark"
              size="lg"
              type="button"
              className="mt-2"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </LinkContainer>
        </div>
      </Form>
    </Col>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  listOfIds: PropTypes.array.isRequired,
};

export default ContactForm;
