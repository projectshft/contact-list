import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const ContactCard = ({ contacts }) => (
  <div className="col-md-4 offset-md-4">
    {contacts.map((contact) => (
      <Card key={contact.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={contact.imgUrl} />
        <Card.Body>
          <Card.Title>{contact.fullName}</Card.Title>
          <Card.Text>
            {contact.email}
            <br />
            {contact.phoneNumber}
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
    <Link to="/contacts" type="button">
      Back
    </Link>
  </div>
);

ContactCard.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactCard;
