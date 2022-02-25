import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
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
      name: 'Bruce Lee',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
      email: 'blee@gmail.com',
      phone_number: 2324456343
    },
    {
      id: 1,
      name: 'Naruto Uzumaki',
      image_url: 'https://cdn.vox-cdn.com/thumbor/UswYUb9Ve-sg9EN1f0KMAkOUizE=/0x0:1280x721/1200x800/filters:focal(544x281:748x485)/cdn.vox-cdn.com/uploads/chorus_image/image/70124512/naruto.0.jpg',
      email: 'hokage7@gmail.com',
      phone_number: 3354457597
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
        <NavLink to={'/contacts'} className='mx-3'>Contacts</NavLink>
        <NavLink to={'/contacts/new'}>Add New Contact</NavLink>
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
          <Redirect to='/contacts' />
        </Route>
        <Route exact path='/contacts' render={(routerProps) => (
          <IndexPage contacts={contacts} history={routerProps.history}/>
        )}/>
        <Route path='/contacts/new' render={(routerProps) => (
          <NewContact addContact={addContact} contacts={contacts} history={routerProps.history} />
        )}/>
        <Route path='/contacts/:id' render={(routerProps) => (
          <ContactPage contacts={contacts} contactId={parseInt(routerProps.match.params.id, 10)} />
        )}/>
      </Switch>
    </div>
  )

}

export default App;
