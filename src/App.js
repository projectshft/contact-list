import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import ListOfContacts from './components/ListOfContacts';
import ContactForm from './components/ContactForm';
import ContactView from './components/ContactView';
import { dummyData } from './dummyData';

const App = () => {
  const [contacts, setContacts] = useState(dummyData);

  const listOfIds = contacts.map((contact) => contact.id);

  const addContact = (newContact) => {
    setContacts(contacts.concat(newContact));
  };

  const getContact = (id) => {
    const isContact = (contact) => contact.id === id;
    return contacts.find(isContact);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="display-3 text-center m-4">Contact List</h1>
          <hr />
          <Routes>
            <Route
              path="form"
              element={
                <ContactForm addContact={addContact} listOfIds={listOfIds} />
              }
            />
            <Route
              path=":contactId"
              element={<ContactView getContact={getContact} />}
            />
            <Route path="/" element={<ListOfContacts contacts={contacts} />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
