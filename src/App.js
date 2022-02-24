import { Switch, Route, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import IndexPage from './IndexPage';
import ContactPage from './ContactPage'
import NewContact from './NewContact';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'

const App = () => {

  const [contacts, setContacts] = useState([
    {
      id: 0,
      name: 'Dio DeBon',
      image_url: 'https://images.ctfassets.net/usf1vwtuqyxm/40Sp4ysyqcYKkQSwWG8WI6/8fa8b6ffdb3490d62c722d056b8bec48/Dragon-calendar-carousel.jpg?fm=jpg&q=70&w=2560',
      email: 'cdebon97@gmail.com',
      phone_number: 2342343242
    },
    {
      id: 1,
      name: 'Lauren',
      image_url: 'https://images.ctfassets.net/usf1vwtuqyxm/40Sp4ysyqcYKkQSwWG8WI6/8fa8b6ffdb3490d62c722d056b8bec48/Dragon-calendar-carousel.jpg?fm=jpg&q=70&w=2560',
      email: 'fdggfdg@gmail.com',
      phone_number: 1213
    }
  ])

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    })
  }


  const Header = () => (
    <header>
      <Navbar bg="dark" variant="dark" fixed='top'>
      <Container>
      <Navbar.Brand href="/">React Contact List</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Index</Nav.Link>
        <Nav.Link href="/new-contact">Add New Contact</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
    </header>
  )

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/indexpage' />
        </Route>
        <Route exact path='/indexpage' render={() => (
          <IndexPage contacts={contacts} />
        )}/>
        <Route path='/new-contact' render={(routerProps) => (
          <NewContact addContact={addContact} contacts={contacts} history={routerProps.history} />
        )}/>
        <Route path='/:id' render={(routerProps) => (
          <ContactPage contacts={contacts} contactId={routerProps.match.params.id} />
        )}/>
      </Switch>
    </div>
  )

}

export default App;
