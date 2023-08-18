import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  const navigate = useNavigate();

  const handleContactSelection = (event) => {
    const { id } = event.target.parentElement.dataset;
    navigate(`contacts/${id}`);
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
  contacts: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default ContactList;
