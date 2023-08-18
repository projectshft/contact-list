import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddContact = ({addContact}) => {
  const navigate = useNavigate();

  const generateId = () => Math.round(Math.random() * 100000000);

  const handleNewContactFormSubmit = (event) => {
    event.preventDefault();
    addContact({
      id: generateId(),
      name: event.target.name.value,
      image_url: event.target.url.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    });

    navigate('/');
  };

  const handleCancelClick = () => navigate('/');

  return (
    <Container>
      <Row>
        <Col className="col-4 offset-4">
          <h2>Add a New Contact</h2>
          <Form onSubmit={handleNewContactFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImageUrl">
              <Form.Label>Profile Image URL</Form.Label>
              <Form.Control type="text" name="url" placeholder="Enter URL of profile image" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="tel" name="phone" placeholder="Enter phone" required/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
            <Button variant="secondary" onClick={handleCancelClick}>Cancel</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default AddContact;