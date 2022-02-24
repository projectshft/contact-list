import React, { useState } from 'react'
import {Form, Button, Row, Container, Col} from 'react-bootstrap'

const NewContact = (props) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  

  const handleSubmitContactClick = () => {

    debugger;
    
    if(!props.contacts.length === 0) {
      setId(0)
    } else (
      setId(props.contacts[props.contacts.length - 1].id + 1)  
    );
    

    if (!id || !name || !image_url || !email || !phone_number){
      alert("Please fill out all inputs to add a new contact") 
    } else {
      props.addContact({
        id,
        name,
        image_url,
        email,
        phone_number
      })  
      props.history.push('/indexpage')
    }
  }

  return (
    <>
    <Container fluid className='mt-5 pt-5'>
      <Row>
        <Col xs={{ span: 5, offset: 3}}>
          <h1>Add A New Contact</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={event =>
                setName(event.target.value)  
              }/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profile Picture URL</Form.Label>
              <Form.Control type="text" placeholder="Enter image URL" onChange={event =>
                setImageUrl(event.target.value)  
              }/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" onChange={event =>
                setEmail(event.target.value)  
              }/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" onChange={event =>
                setPhoneNumber(event.target.value)  
              }/>
            </Form.Group>


            <Button variant="primary" type="button" onClick={handleSubmitContactClick}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
  
}

export default NewContact