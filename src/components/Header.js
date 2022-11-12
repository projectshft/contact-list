import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Link to={'/'}>
          <h1>Goodenough Contacts</h1>
        </Link>
        <Link to={'/new-contact'}>Add Contact</Link>
      </Container>
    </Navbar>
  );
};

export default Header;
