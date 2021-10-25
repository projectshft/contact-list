import { Link } from 'react-router-dom';
import { Row, Col, Card, Navbar, Container, Button, Nav } from 'react-bootstrap';
import styled from "styled-components";


const ListStyle = styled.ul`
a {
  text-decoration: none;
}
margin-left:0;
margin-top:10px;
margin-bottom:10px;
padding-left:0;
`;


const ContactsList = ({contacts, sortContacts}) => {

  const handleSortSelection=(e)=>{
    sortContacts(e);
  }

  return (
  <>
    <br />
    <Row>
      <Col xs={{span:6, offset:3}}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <img
                alt=""
                src="/logo.png"
                width="60"
                height="30"
                className="d-inline-block align-top"
              />{'    '}
              <strong>Your Contacts</strong>
            </Navbar.Brand>
            
            <Nav variant="pills" defaultActiveKey={'dateAdded'} onSelect={handleSortSelection}>
              <Nav.Item>
                <Nav.Link eventKey='dateAdded'>Date Added</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="firstName">First Name</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="lastName">Last Name</Nav.Link>
              </Nav.Item>
            </Nav>

          </Container>
        </Navbar>
        {contacts.map((c) => (
          <ListStyle key={c.id}>
            <Link to={`/contacts/${c.id}`}>
              <Card>
                <Row>
                  <Col lg={4}>
                    <Card.Img variant="top" src={c.imageURL}/>
                  </Col>
                  <Col lg={8}>
                    <Card.Body>
                      <Card.Title><strong>{c.firstName} {c.lastName}</strong></Card.Title>
                      <br />
                      <Card.Subtitle className="mb-2 text-muted"><strong>Phone Number: </strong>{c.phoneNumber}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted"><strong>Email: </strong>{c.email}</Card.Subtitle>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Link>
          </ListStyle>
        ))}
      </Col>
    </Row>

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
  </>
  );
}

export default ContactsList;
