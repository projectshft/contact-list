import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import formChecker from './FormChecker';
import './ContactForm.css';

const ContactForm = (props) => {
  const generateId = () => Math.round(Math.random() * 100000000);
  const history = useHistory();
  const { contacts, setContacts } = props;
  const [newContact, setNewContact] = useState({
    id: generateId(),
    fName: '',
    lName: '',
    imageUrl: '',
    email: '',
    phoneNumber: '',
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = contacts;
    if (
      formChecker(newContact.fName) &&
      formChecker(newContact.lName) &&
      formChecker(newContact.email) &&
      formChecker(newContact.phoneNumber)
    ) {
      newArray.push(newContact);
      setContacts(newArray);
      history.push('/');
    } else {
      handleShow();
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="mb-3 container form-container">
        <Form.Group>
          <Form.Label>First Name (required)</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Enter the first name"
            name="fName"
            onChange={(e) =>
              setNewContact({ ...newContact, fName: e.target.value })
            }
            value={newContact.fName}
          />

          <Form.Label>Last Name (required)</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Enter the last name"
            name="lName"
            onChange={(e) =>
              setNewContact({ ...newContact, lName: e.target.value })
            }
            value={newContact.lName}
          />
          <Form.Label>Email Address (required)</Form.Label>
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Enter the email address"
            name="email"
            onChange={(e) =>
              setNewContact({ ...newContact, email: e.target.value })
            }
            value={newContact.email}
          />
          <Form.Label>Phone Number (required)</Form.Label>
          <Form.Control
            className="mb-3"
            type="tel"
            placeholder="Enter the phone number"
            name="phoneNumber"
            onChange={(e) =>
              setNewContact({ ...newContact, phoneNumber: e.target.value })
            }
            value={newContact.phoneNumber}
          />
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Enter the image url"
            name="imageUrl"
            onChange={(e) =>
              setNewContact({ ...newContact, imageUrl: e.target.value })
            }
            value={newContact.imageUrl}
          />
          <Button type="submit" variant="success">
            Submit
          </Button>
        </Form.Group>
      </Form>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Insufficient data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please ensure that all required fields are filled out.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      fName: PropTypes.string,
      lName: PropTypes.string,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
  setContacts: PropTypes.func,
};
export default ContactForm;
