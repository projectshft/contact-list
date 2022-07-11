import PropTypes from 'prop-types';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

// Container Classes App //
const containerStyleApp =
  'd-flex flex-column bg-primary border border-warning p-2';
// Card Bootstrap Classes //
const cardClass =
  'd-flex flex-row m-3 align-items-center border border-warning';
// Card-img Bootstrap Classes //
const cardImg = 'img m-3 border border-warning';

const SingleContact = ({ contacts }) => {
  const { contactId } = useParams();
  const contactIdNumber = Number(contactId);

  const selectedContact = contacts.find(
    (value) => value.id === contactIdNumber
  );

  const { name, email, phoneNumber, img, id } = selectedContact;

  return (
    <Container className={containerStyleApp}>
      <h1 className="h1-single-contact text-warning">You have selected</h1>
      <Card key={id} className={cardClass}>
        <Card.Img className={cardImg} src={img} />
        <Card.Body className="card-body">
          <Card.Title>{name}</Card.Title>
          <hr />
          <Card.Text>{email}</Card.Text>
          <Card.Text>{phoneNumber}</Card.Text>
          <Link to="/contacts">
            <Button>Back To Contacts</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleContact;

// PropTypes //
SingleContact.propTypes = {
  contacts: PropTypes.array,
};
