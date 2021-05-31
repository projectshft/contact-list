import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContactContext } from "./App";

export default function DeleteConfirmationModal({ id }) {
  const { handleContactDelete } = useContext(ContactContext);
  const [show, setShow] = useState(false);

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
          <Link to="/contacts">
            <Button
              variant="danger"
              onClick={() => {
                handleContactDelete(id);
              }}
            >
              Yes, Delete Contact
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
