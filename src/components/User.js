import React from 'react';
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
  console.log(contactInfo.imageUrl);
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

export default User;
