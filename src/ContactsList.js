import { Link } from 'react-router-dom';
import { CardGroup,Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import styled from "styled-components";


const ListStyle = styled.ul`
a {
  text-decoration: none;
}
margin-bottom:0;
`;


const ContactsList = ({ contacts }) => (
  <>
    <Container>
      <CardGroup>

        {contacts.map((c) => (
          <ListStyle>
            <Link to={`/contacts/${c.id}`}>
              <Card key={c.id}>
                <Card.Img variant="top" src/>
                <Card.Body>
                  <Card.Title>{`${c.firstName} ${c.lastName}`}</Card.Title>
                </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                  </ListGroup>
              </Card>
            </Link>
          </ListStyle>
        ))}

      </CardGroup>
    </Container>
  </>
);

export default ContactsList;
