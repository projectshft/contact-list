import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import styled from "styled-components";


const ListStyle = styled.ul`
a {
  text-decoration: none;
  // color:#6c757d;
}
margin-left:0;
margin-bottom:20px;
padding-left:0;
`;


const ContactsList = ({ contacts }) => (
  <>
    <Row>
      <Col xs={{span:6, offset:3}}>
        {contacts.map((c) => (
          <ListStyle key={c.id}>
            <Link to={`/contacts/${c.id}`}>
              <Card>
                <Row>
                  <Col lg={3}>
                    <Card.Img variant="top" src={c.imageURL}/>
                  </Col>
                  <Col lg={9}>
                    <Card.Body>
                      <Card.Title><strong>{c.firstName} {c.lastName}</strong></Card.Title>
                      <br />
                      <Card.Subtitle className="mb-2 text-muted">Phone Number: {c.phoneNumber}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">Email: {c.email}</Card.Subtitle>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Link>
          </ListStyle>
        ))}
      </Col>
    </Row>
  </>
);

export default ContactsList;
