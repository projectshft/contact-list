import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const ContactList = ({ contacts, deleteContact }) => {
  const navigate = useNavigate();

  const handleContactSelection = (event) => {
    if (!event.target.classList.contains('click-delete')) {
      const { id } = event.target.parentElement.dataset;
      navigate(`contacts/${id}`);
    }
  };

  const handleContactDeletion = (event) => {
    let { id } = event.target.parentElement.dataset;

    if (event.target.classList.contains('click-delete-icon')) {
      id = event.target.parentElement.parentElement.dataset.id;
    }

    deleteContact(id);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete Contact</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  data-id={contact.id}
                  onClick={handleContactSelection}
                >
                  <td className="text-center">
                    <img
                      src={contact.image_url}
                      alt=""
                      className="contact-image"
                    />
                  </td>
                  <td className="align-middle">{contact.name}</td>
                  <td className="align-middle">{contact.email}</td>
                  <td className="align-middle">{contact.phone}</td>
                  <td
                    className="align-middle text-center click-delete"
                    onClick={handleContactDeletion}
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="click-delete click-delete-icon"
                      onClick={handleContactDeletion}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
