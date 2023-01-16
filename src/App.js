import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import AddContact from './AddContact';
import Home from './Home';
import NavBar from './NavBar';
import ViewContact from './ViewContact';
import data from './data.json';

const App = () => {
  const [contacts, setContacts] = useState(data.contacts);

  return ( 
    <>
      <NavBar />
      <Container fluid="sm" style={{width: "max-content"}}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contacts">
            <Contacts contacts={contacts}/>
          </Route>
          <Route path="/contacts/new">
            <AddContact contacts={contacts} setContacts={setContacts}/>
          </Route>
          <Route path="/contacts/:id">
            <ViewContact contacts={contacts}/>
          </Route>
        </Switch>  
      </Container>
    </>
   );
}
 
export default App;