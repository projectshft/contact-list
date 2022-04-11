import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Card, ListGroup } from 'react-bootstrap';

const UniqueContact = ({ getContact }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { uniqueContactId } = useParams();
  const contact = getContact(parseInt(uniqueContactId, 10));
  const navigate = useNavigate();

  if (!contact) {
    return (
      <div>
        <h1>Error: This contact does not exist!</h1>
        <Button 
          role="button" 
          className="btn btn-secondary btn-sm d-block mx-auto" 
          onClick={() => navigate("/")}>
            Back
        </Button>
      </div>
    );
  }

  const { name, email, phone, image_url } = contact;

  return (
    <div>
      <Container>
        <Button 
          role="button" 
          className="btn btn-secondary btn-sm d-block mx-auto"
          onClick={() => navigate("/")}>
            Back
        </Button>

        <Card className="text-center" style={{ width: '18rem' }}>
          <Card.Header><strong>{name}</strong></Card.Header>
          <Card.Img variant="top" src={image_url} alt="" />
            <ListGroup variant="flush">
              <ListGroup.Item>{email}</ListGroup.Item>
              <ListGroup.Item>{phone}</ListGroup.Item>
            </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

UniqueContact.propTypes = {
  getContact: PropTypes.func.isRequired,
};

export default UniqueContact;