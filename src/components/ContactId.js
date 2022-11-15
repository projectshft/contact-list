import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const ContactId = ({
  contactInfo,
  setCurrentContact,
  deleteContact,
  history,
}) => {
  if (!contactInfo) {
    return (
      <Container className="main-container">
        <h1>Sorry we could not find this contact</h1>
        <Button><Link to="/">Back</Link></Button>     
      </Container>
    );
  }

  const handleDeleteClick = () => {
    deleteContact(contactInfo.id);
    history.push('/');
  };

  const handleEditClick = () => {
    history.push(`${contactInfo.id}/edit`);
  };

  return (
    <Container className="main-container">
      <Row>
        <Col xs={12} md={6} className="offset-md-3">
          <Card bg="secondary" className="contact-card">
            <Card.Title>
              <h1>{contactInfo.name}</h1>
            </Card.Title>
            <Card.Img
              className="profile-img"
              variant="top"
              src={contactInfo.imageUrl}
            />
            <Card.Body>
              <p>
                <strong>Email:</strong> {contactInfo.email}
              </p>
              <p>
                <strong>Phone:</strong> {contactInfo.phone}
              </p>
              <div>
                <i
                  onClick={handleDeleteClick}
                  className="fa-solid fa-trash icon"
                />
                <i
                  onClick={handleEditClick}
                  className="fa-solid fa-file-pen icon"
                />
              </div>
              <Button onClick={() => setCurrentContact(null)}>
                <Link to="/">Back</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

ContactId.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  }),
  setCurrentContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default ContactId;
