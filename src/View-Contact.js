import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"
import Card from 'react-bootstrap/Card';
import { Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";


const ViewContact = ({contactId, contacts, history}) => {

  const contactArray = contacts.filter((contact) => {
    return contact.Id == contactId});

  const specificContact = contactArray[0]
  
  if(!specificContact) {
    return <div>
      <h1>Contact Does Not Exist</h1>
      <Link to={'/contacts'}>Contacts</Link>
    </div>
  }

  const handleClick = () => {
    history.push('/contacts')
  }
  
  return (
    <div className="view-contact">
      <Container className="centered">
        <Row>
          <Col sm='auto'>
            <Card style={{ width: '18rem' }} className={'ms-5'}>
              <Card.Img variant="top" src={`${specificContact.image}`} />
              <Card.Body>
                <Card.Title>{specificContact.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{specificContact.email}</ListGroup.Item>
                <ListGroup.Item>{specificContact.phoneNumber}</ListGroup.Item>
              </ListGroup>
              <Button onClick={handleClick} variant="primary">Contacts</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
  
}

ViewContact.propTypes = {
  contactId: PropTypes.number.isRequired
};


export default ViewContact