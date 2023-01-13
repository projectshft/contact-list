import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';


const ViewContact = ({ contacts }) => {
  const { id } = useParams()
  console.log(id)
  const isContact = c => c.id === Number(id);
  const contact = contacts.find(isContact);
  console.log(contacts);
  return ( 
    
    <>
      <Card className="mt-4" style={{ width: '18rem' }}>
        {/* { error && <h2>{ error }</h2>} */}
        {contact && (
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
        )}
      </Card>
      
    </>
   );
}
 
export default ViewContact;