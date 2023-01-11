import React from 'react';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import AddContact from './AddContact';
import Home from './Home';
import NavBar from './Navbar';

const App = () => {
  return ( 
    <>
      <NavBar />
      <Container fluid="md">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route path="/contacts/new">
            <AddContact />
          </Route>
        </Switch>  
      </Container>
    </>
   );
}
 
export default App;