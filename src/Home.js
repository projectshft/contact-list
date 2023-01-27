import React from 'react';
import {  Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Home = () => {
  return ( 
    <Row className="text-center">
      <h1>Your Personal Contacts</h1>
      <LinkContainer to="/contacts">
        <Button variant="dark">Click to Enter</Button>
      </LinkContainer>
    </Row>
   );
}
 
export default Home;