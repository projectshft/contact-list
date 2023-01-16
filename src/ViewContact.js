import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';


const ViewContact = ({ contacts }) => {
  const { id } = useParams()
  console.log(id)
  const isContact = c => c.id === Number(id);
  const contact = contacts.find(isContact);
  return ( 
    <Card className="mt-4" style={{ width: '18rem' }}>
      {contact ? 
        <>
          <Card.Img variant="top" src={contact.image_url} />
          <Card.Body className="text-center">
            <Card.Title>{contact.name}</Card.Title>
            <Card.Text>{contact.email}</Card.Text>
            <Card.Text>{contact.phone}</Card.Text>
            <LinkContainer to="/contacts">
              <Button variant="dark">Back</Button>
            </LinkContainer>
          </Card.Body>
        </>
        : <Card.Body className="text-center">
            <Card.Text><FontAwesomeIcon className="fa-5x" icon={ faUserSecret } /></Card.Text>
            <Card.Text>Sorry, the contact was not found in your rolodex.</Card.Text>
            <LinkContainer to="/contacts">
              <Button variant="dark">Back</Button>
            </LinkContainer>
          </Card.Body>
        }
      </Card>
   );
}
 
export default ViewContact;