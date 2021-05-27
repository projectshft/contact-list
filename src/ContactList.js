import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import "./index.css";

const ContactList = ({ contacts, deleteContact }) => {
  const [deleteId, setDeleteId] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setDeleteId(null);
    setShow(false);
  };
  const handleShow = (contact) => {
    const id = contact.id;
    setDeleteId(id);
    setShow(true);
  };

  const history = useHistory();

  const handleViewClick = (contact) => {
    history.push(`/contacts/${contact.id}`);
  };

  const handleDeleteClick = () => {
    console.log({ deleteId });
    deleteContact({ deleteId });
    handleClose();
  };

  return (
    <div class="container">
      <div className="col-10 offset-1 justify-content-md-center">
        <div className="row">
          <button
            type="button"
            className="btn btn-dark add-contact-button text-nowrap"
          >
            <Link to="/contacts/new">Add a Contact</Link>
          </button>
        </div>
        <div className="row">
          <table className=" table table-dark table-primary">
            <thead>
              <tr>
                <th scope="col">Profile Pic</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone #</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr className="contact" key={contact.id}>
                  <td>
                    <img
                      src={contact.image_url}
                      alt="image_url"
                      className="rounded d-block"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone_number}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleViewClick(contact)}
                    >
                      View
                    </button>
                    <br />
                    <button type="button" className="btn btn-success">
                      <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
                    </button>
                    <br />
                    <button
                      type="button"
                      className="btn btn-danger text-nowrap"
                      onClick={() => handleShow(contact)}
                    >
                      Delete
                    </button>
                    <div>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Delete Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Are you sure you want to delete {contact.name} from
                          your contact list?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Cancel
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleDeleteClick()}
                          >
                            Delete
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {contacts.length === 0 && (
            <h2 class="no-contacts">No Contacts Added Yet.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
