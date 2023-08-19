import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const ContactCard = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id));

  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate('/');
  };

  return (
    <Container style={{ display: 'flex' }} className="justify-content-center">
      <Row>
        <Col className="pb-3">
          <Button
            variant="primary"
            className="my-2"
            onClick={handleGoBackClick}
          >
            Go Back
          </Button>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={contact.image_url} />
            <Card.Body>
              <Card.Title className="text-center">{contact.name}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span className="fw-bold">Email: </span>
                  {contact.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold">Phone: </span>
                  {contact.phone}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

ContactCard.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactCard;
