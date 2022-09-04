import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import {Col, Row, Button, Container} from 'react-bootstrap'

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if (!contact) {
    return<div>
      <h1>Sorry, but the contact was not found</h1>
        <Link to='/rolodex'>
          <Button variant='success'>Back to Contact List</Button>
        </Link>
      </div>
  }
  
  return (
    <Container>
      <Row>
        <Col></Col>
      <Col xs={6}>
      <h1>{contact.contact_name}</h1> 
      
      <h2>email: {contact.email}</h2>
      <h2>phone: {contact.phone_number}</h2>
      <img style={{height: '200px', width: '300px'}} src={contact.img_url} alt='portrait'/>
      <br></br>
      <br></br>
      <Link to='/rolodex'>
        <Button variant='success'>Back to Contact List</Button>
        </Link>
      </Col>
      <Col></Col>
      </Row>
    </Container>
  )
}

export default Contact