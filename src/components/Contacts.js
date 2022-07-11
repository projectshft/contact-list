import PropTypes from 'prop-types';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Card Bootstrap Classes //
const cardClass =
  'd-flex flex-row m-3 align-items-center border border-warning';
// Card-img Bootstrap Classes //
const cardImg = 'img m-3 border border-warning';

const Contacts = ({ contacts }) => (
  <Container className="contacts-container p-2">
    {contacts.map((contact) => (
      <Card key={contact.id} className={cardClass}>
        <Card.Img className={cardImg} src={contact.img} />
        <Card.Body className="card-body">
          <Card.Title>{contact.name}</Card.Title>
          <hr />
          <Card.Text>{contact.email}</Card.Text>
          <Card.Text>{contact.number}</Card.Text>
          <Link to={`/contacts/${contact.id}`}>
            <Button>Click To View</Button>
          </Link>
        </Card.Body>
      </Card>
    ))}
  </Container>
);

// PropTypes //
Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
// "contacts/:contactId"
