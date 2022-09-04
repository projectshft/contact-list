import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'

const NewContact = (props) => {
  const [contact_name, setContact_name] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [img_url, setImg_url] = useState('')
  const uniqueId = Math.round(Math.random() * 100000000);

  const [id] = useState(uniqueId)

  const handleSubmitContactClick = () => {
    props.addContact({
      contact_name,
      email,
      phone_number,
      img_url,
      id
    })
    
    props.history.push('/rolodex')
  }

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Form>
        <h1>Add New Contact</h1>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label> 
            Full Name 
          </Form.Label>
          <Col sm={15}>
            <Form.Control
               type='text' 
               className='form-control'
               placeholder='your full name'
               onChange={event =>
              setContact_name(event.target.value)
            }/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label> 
            Email 
          </Form.Label>
          <Col sm={15}>
            <Form.Control
               type='email' 
               className='form-control'
               placeholder='myemail@example.com'
               onChange={event =>
              setEmail(event.target.value)
            }/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label> 
            Phone Number 
          </Form.Label>
          <Col sm={15}>
            <Form.Control
               type='text' 
               className='form-control'
               pattern="[-()0-9]*"
               placeholder='(xxx)xxx-xxxx'
               onChange={event =>
              setPhone_number(event.target.value)
            }/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label> 
            Image URL 
          </Form.Label>
          <Col sm={15}>
            <Form.Control
               type='text' 
               className='form-control'
               placeholder="https://yourimageurl.jpg"
               onChange={event =>
              setImg_url(event.target.value)
            }/>
          </Col>
        </Form.Group>
    
        <Button variant="primary" onClick={handleSubmitContactClick}>Submit</Button>
          {'    '}
        <Link to='/rolodex'>
          <Button variant="success">Back to Contact List</Button>
        </Link>
      </Form>
    </div>
    
  )
};

export default NewContact