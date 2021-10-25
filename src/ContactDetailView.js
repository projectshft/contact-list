import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Button, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './index.css';


const ContactDetailView = ({contactId, contacts}) => {

  const contactToDisplay = _.find(contacts, { id:contactId});

  if (!contactToDisplay) {
    return (
    <Row>
      <Col xs={{span:4, offset:4}}>
        <br />
        <h4 style={{textAlign:"center"}}>Sorry, that contact could not be found.</h4>
        <br />
        <Link to={'/'}>
          <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
              <strong>Back</strong>
              </Button>
          </div>
        </Link>
      </Col>
    </Row>
    )
  }

  return (
    <>
    <Row style={{paddingTop:"50px"}}>
      <Col lg={{span:4, offset:4}}>
        <Card>
          <Card.Header as="h4">
              <img alt="" src="/logo.png" width="60" height="30" className="d-inline-block align-top"/>
            {contactToDisplay.firstName} {contactToDisplay.lastName}
          </Card.Header>
          <Card.Img variant="top" src={contactToDisplay.imageURL}/>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Phone Number: </strong>{contactToDisplay.phoneNumber}</ListGroup.Item>
            <ListGroup.Item><strong>Email: </strong>{contactToDisplay.email}</ListGroup.Item>
          </ListGroup>
        </Card>
        
        <br />
        <div className="d-grid gap-2" style={{marginBottom:"10px"}}>
            <Button variant="secondary" size="lg">
              <strong>Edit</strong>
            </Button>
        </div>
        <Link to={'/'}>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              <strong>Back</strong>
            </Button>
          </div>
        </Link>
      </Col>
    </Row>
  </>
  )

}

export default ContactDetailView