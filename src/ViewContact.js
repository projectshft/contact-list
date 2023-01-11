import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const ViewContact = () => {
  const { id } = useParams()
  const { data: contact, error } = useFetch("data.json/contacts/" + id)
  console.log(error)
  return ( 
    
    <Card>
      { error && <h2>{ error }</h2>}
      { contact && (
          <>
            <Card.Img variant="top" src={contact.image_url} />
            <Card.Body>
              <Card.Title>{contact.name}</Card.Title>
              <Card.Text>{contact.email}</Card.Text>
              <Card.Text>{contact.phone}</Card.Text>
            </Card.Body>
          </>
      )}
    </Card>
   );
}
 
export default ViewContact;