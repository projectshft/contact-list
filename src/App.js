import React, { useState, useEffect} from "react";
import './App.css';
import Home from "./componenets/home";
import ContactItem from "./componenets/ContactItem";
import ContactsList from "./componenets/ContactList";
import AddContact from "./componenets/AddContact";
import NotFound from "./componenets/NotFound";
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import data from "./data.json";


function App() {
  // Rename Document Title (using as componentDidMount)
  useEffect(() => {
    document.title = "Contacts App";
  }, []);
  
  // Define initial state of contacts and define setContacts method(?) -- setup useState hook
  const [contacts, setContacts] = useState(data)

  // Func to add new contact
  const addNewContact = (newContact) => {
    console.log(newContact);
    console.log(contacts);
    setContacts(contacts => [...contacts.contacts, newContact])
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
              <Route index element={<ContactsList contacts={contacts} />} />
              <Route path=":id" element={<ContactItem />} />
              <Route path="new" element={<AddContact onSubmit={addNewContact} />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;