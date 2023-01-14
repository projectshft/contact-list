import React, { useState, useEffect} from "react";
import './App.css';
import "./Navbar.css";
import Home from "./componenets/home";
import ContactItem from "./componenets/contact-item";
import ContactsList from "./componenets/contacts-list";
import AddContact from "./componenets/add-contact";
import NotFound from "./componenets/not-found";
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


function App() {
  // Rename Document Title (using as componentDidMount)
  useEffect(() => {
    document.title = "Contacts App";
  }, []);
  
  // Define initial state of contacts and define setContacts method(?) -- setup useState hook
  const [contacts, setContacts] = useState([])

  // Fetch contacts data from JSON file. (using as componentDidUpdate)
  useEffect(() => {
    fetch('data.json')
    .then((response) => response.json())
    .then((data) => setContacts(data))
    .catch(error => {
      console.error(error);
    });
  }, []);


  // Func to add new contact
  const addNewContact = (contact) => {
    setContacts(setContacts([...contacts, contact])
    )
  }

  return (
    <>
      <Navbar bg="purple" className="gradient-navbar" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Contacts App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/contacts/new">New Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <div className="row">
          <h1 className="text-center gradient-color">Contacts App</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" >
              <Route index element={<ContactsList />} />
              <Route path=":id" element={<ContactItem />} />
              <Route path="new" element={<AddContact />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;