import React from 'react';
import {  Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return ( 
    <Row>
    <Button variant="dark" href="/contacts">Who Do You Know?</Button>
    </Row>
   );
}
 
export default Home;