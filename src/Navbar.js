import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return ( 
    <Container>
        <Navbar expand="md" bg="light" variant="light">
          <Container>
            <LinkContainer to="/contacts">
              <Navbar.Brand>Contacts Rolodex <FontAwesomeIcon icon={ faAddressBook } /></Navbar.Brand>
              
            </LinkContainer>
            <Nav>
              <LinkContainer to="/contacts/new">
                <Nav.Link className="nav-links">Add Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </Container>
   );
}
 
export default NavBar;