import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NewContact = (props) => {
  const [Id, setId] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')

  const handleSubmit = () => {
    props.addContact({Id, name, image, email, phoneNumber})

    props.history.push('/contacts')
  }

  useEffect (() => {
    setId(Math.random() * 100000000)
  }, []);

  return (
    <div>
      <Link to='/contacts'> Contacts </Link>
      <Container>
        <Row>
          <Col md={8}>
            <Form>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="name" placeholder="ex: Connor Cook" onChange={event => setName(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control type="URL" placeholder="ex: https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Feinstein%2F&psig=AOvVaw2CL1kMLuVk5fZX8B5YU_v9&ust=1673730333972000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPj2isK5xfwCFQAAAAAdAAAAABAE" onChange={event => setImage(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="ex: connor@thebest.com" onChange={event => setEmail(event.target.value)} />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control type="number" placeholder="ex: 480-999-9999" onChange={event => setphoneNumber(parseInt(event.target.value, 10))} />
              </Form.Group>        

            </Form>
          </Col>
        </Row>
      </Container>

      <br/>
      <button onClick={handleSubmit}>Save</button>
      
    </div>
  )
  
}


export default NewContact

{/* <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form> */}
