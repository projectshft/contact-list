import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const User = ({ contactInfo, setCurrentContact }) => {
  if (!contactInfo) {
    return (
      <div>
        <h1>Sorry we could not find this contact</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="offset-md-3">
          <Card bg='secondary' className="contact-card">
            <Card.Title><h1>{contactInfo.name}</h1></Card.Title>
            <Card.Img className="profile-img" variant="top" src={contactInfo.imageUrl} />
            <Card.Body>
              <p>{contactInfo.email}</p>
              <p>{contactInfo.phone}</p>
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

User.propTypes = {
  contacInfo: PropTypes.shape({ name: PropTypes.string, email: PropTypes.string, phone: PropTypes.string, imageUrl: PropTypes.string, id: PropTypes.number }),
  setCurrentContact: PropTypes.func.isRequired
}

export default User;
