import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ContactContext } from "./App";
import PropTypes from "prop-types";

export default function DeleteConfirmationModal({ id }) {
  const { handleContactDelete } = useContext(ContactContext);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-sm" variant="outline-danger" onClick={handleShow}>
        Delete Contact
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleContactDelete(id);
              history.push("/contacts");
            }}
          >
            Yes, Delete Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

DeleteConfirmationModal.propTypes = {
  id: PropTypes.number.isRequired,
};
