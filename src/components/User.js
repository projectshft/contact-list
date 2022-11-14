import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

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
      <img src={contactInfo.imageUrl} alt="profile" className="profile-img" />
      <h1>{contactInfo.name}</h1>
      <p>{contactInfo.email}</p>
      <p>{contactInfo.phone}</p>
      <Button onClick={() => setCurrentContact(null)}>
        <Link to="/">Back</Link>
      </Button>
    </Container>
  );
};

User.propTypes = {
  contacInfo: PropTypes.shape({ name: PropTypes.string, email: PropTypes.string, phone: PropTypes.string, imageUrl: PropTypes.string, id: PropTypes.number }),
  setCurrentContact: PropTypes.func.isRequired
}

export default User;
