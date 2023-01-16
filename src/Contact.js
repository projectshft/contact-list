import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from './data.json'
import { Button } from 'react-bootstrap';

const Contact = () => {
  const { id } = useParams();
  const contact = data.contacts.find(c => c.id === parseInt(id));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  if (!contact) {
    return <div>Contact not found</div>;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>{contact.name}</h1>
      <img src={contact.image_url} alt={contact.name} width={100} height={100} />
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phone_number}</p>
      <Button onClick={handleClick} variant="primary">Back to Contacts</Button>
    </div>
  )
}

export default Contact
