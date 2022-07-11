import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SingleContact from './components/SingleContact';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import Error from './components/Error';

// Container Classes App //
const containerStyleApp =
  'd-flex flex-column bg-primary border border-warning p-2';

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Braydon Sutherland',
      email: 'BraydonSutherland@gmail.com',
      phoneNumber: 2052402240,
      img: 'https://images.squarespace-cdn.com/content/v1/5b6e2e06506fbe88e59208e5/ea4b5cad-46bc-4bea-950c-cdbc78aaff24/DSCF5782.jpeg?format=750w',
    },
    {
      id: 2,
      name: 'Sally Sutherland',
      email: 'SallySutherland@gmail.com',
      phoneNumber: 2052402255,
      img: 'https://images.squarespace-cdn.com/content/v1/5b6e2e06506fbe88e59208e5/ea4b5cad-46bc-4bea-950c-cdbc78aaff24/DSCF5782.jpeg?format=750w',
    },
    {
      id: 3,
      name: 'Colin Sutherland',
      email: 'ColinSutherland@gmail.com',
      phoneNumber: 2052402266,
      img: 'https://images.squarespace-cdn.com/content/v1/5b6e2e06506fbe88e59208e5/ea4b5cad-46bc-4bea-950c-cdbc78aaff24/DSCF5782.jpeg?format=750w',
    },
  ]);
  // Adding a Contact with Random ID //
  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 5000) + 1;
    // New Obj with id plus copy of contact //
    const newContact = { id, ...contact };
    // App State with existing contacts plus new //
    setContacts([...contacts, newContact]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Container className={containerStyleApp}>
              <Header />
              <hr />
              <h1 className="h1-home text-warning">Please Add A Contact</h1>
            </Container>
          }
        />
        <Route path="addcontact" element={<AddContact onAdd={addContact} />} />
        <Route
          path="contacts"
          element={
            <Container className={containerStyleApp}>
              <Header />
              <hr />
              <Contacts contacts={contacts} />
            </Container>
          }
        />
        <Route
          path="contacts/:contactId"
          element={<SingleContact contacts={contacts} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
