import ContactsList from './ContactsList';
import { Button,Row,Col,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Contacts = ({ contacts, addContact }) => (
  <>
    <Container>
    <ContactsList contacts={contacts} />
    
    <Link to={'/contacts/new'}>
      <Row>
        <Col xs={{span:6, offset:3}}>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
            <strong>Add New Contact</strong>
            </Button>
          </div>
        </Col>
      </Row>
    </Link>

    </Container>
  </>
)

export default Contacts;
