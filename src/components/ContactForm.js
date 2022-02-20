import { Col, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ContactForm = () => (
  <Col md={{ span: 6, offset: 3 }}>
    <div className="d-flex justify-content-evenly">
      <div>
        <h2>Add Contact</h2>
      </div>
      <div>
        <LinkContainer to="/">
          <Button variant="outline-dark">Back</Button>
        </LinkContainer>
      </div>
    </div>

    <Form className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <div className="d-flex justify-content-evenly">
        <Button variant="outline-dark" size="lg" type="submit" className="mt-2">
          Submit
        </Button>
      </div>
    </Form>
  </Col>
);

export default ContactForm;
