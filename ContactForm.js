
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import Submit from './Submit'; 

const ContactForm = (props) => {
 
  const HandleSubmit = () => {
    // route back to the newcontact and create a new contact
    // newContact will create the contact and route to contact list
    return(
        <>
            <Link to="submit" > </Link>
                <Routes>
                    <Route path="submit" element={<Submit />}/>
                </Routes>
        </> 
    )
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ProfilePicture">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control type="profile" placeholder="URL" />
        <Form.Text className="text-muted">
        </Form.Text>
          {/* <input
            value={input}
            onChange={ChangeInput}>
          </input> */}
      </Form.Group>   

      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else. Because I don't know how to get your email.
        </Form.Text>
      </Form.Group>

      
      <Button onClick={HandleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;