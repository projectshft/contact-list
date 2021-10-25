import React, {useState} from 'react';
import {Form, Row, Col, Card, Container, Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './index.css';


const NewContact = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  

  const handleSubmitContactClick = () => {
    const id = props.contacts.length;
    props.addContact({id, firstName, lastName, imageURL, email, phoneNumber});
    props.history.push('/');
  }


  
  return (
    <>
        <br />
        <Row>
          <Col xs={{span:6, offset:3}}>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand >
                    <img
                      alt=""
                      src="/logo.png"
                      width="60"
                      height="30"
                      className="d-inline-block align-top"
                    />{'    '}
                    <strong>Add New Contact</strong>
                  </Navbar.Brand>
                </Container>
            </Navbar>
            <Card>
              <Container>
                <br />
                <Form onSubmit={handleSubmitContactClick}>
              
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required type="name" placeholder="First Name"
                      onChange={event => setFirstName(event.target.value)
                      }/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required type="name" placeholder="Last Name"
                      onChange={event => setLastName(event.target.value)
                      }/>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control required type="name" placeholder="(555) 555-5555" 
                      onChange={event => setPhoneNumber(event.target.value)
                      }/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="name@example.com" 
                      onChange={event => setEmail(event.target.value)
                      }/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control required type="url" placeholder="https://upload.wikimedia.org/wikipedia/picture.jpg"
                      onChange={event => setImageURL(event.target.value)
                      }/>
                  </Form.Group>
                  
                  <div className="d-grid gap-2" style={{marginBottom:"10px"}}>
                    <Button variant="primary" size="lg"
                      type="submit">
                      <strong>Submit</strong>
                    </Button>
                  </div>

                  <Link to={'/'} style={{textDecoration:"none"}}>
                    <div className="d-grid gap-2">
                      <Button variant="secondary" size="lg">
                        <strong>Cancel</strong>
                      </Button>
                    </div>
                  </Link>
                  <br  />



                </Form>
              </Container>
            </Card>
          </Col>
        </Row>
    </>
  )



}

export default NewContact;
