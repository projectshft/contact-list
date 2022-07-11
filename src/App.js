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

const App = () => {
  // Global State //
  const [contacts, setContacts] = useState([]);
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
};

export default App;
