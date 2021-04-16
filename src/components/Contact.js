import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const Contact = ({ contact, deleteContact }) => {
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);

  // Hides or Shows the modal when each one respectively is called
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleContactClick = () => {
    setRedirect(true);
  };

  // Opens up the delete message box upon user clicking the delete button
  const handleDeleteButtonClick = (e) => {
    e.stopPropagation();
    handleShow();
  };

  // Redirects to a individual contact page for the clicked contact
  if (redirect) {
    return <Redirect push to={`/contacts/${contact.id}`} />;
  }

  return (
    <>
      <tr
        key={contact.id}
        idnum={contact.id}
        onClick={handleContactClick}
        style={{ cursor: 'pointer' }}
      >
        <td>
          <img src={contact.image_url} alt="..." />
        </td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone_number}</td>
        <td>
          <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
          <br />
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleDeleteButtonClick}
          >
            Delete
          </button>
        </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Go Back
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteContact(contact.id);
              handleClose();
            }}
          >
            Delete Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
};

export default Contact;
