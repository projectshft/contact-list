import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to={'/'}>
            <h1>Goodenough Contacts</h1>
          </Link>
        </Navbar.Brand>
        <Button>
          <Link to={'/new-contact'}>Add Contact</Link>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
