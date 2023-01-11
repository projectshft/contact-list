import React from 'react';
import {  Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return ( 
    <Row>
      <LinkContainer to="/contacts">
        <Button variant="dark">Who Do You Know?</Button>
      </LinkContainer>
    </Row>
   );
}
 
export default Home;