import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';

// Container Classes App //
const containerStyleApp =
  'App d-flex flex-column bg-primary border border-warning';

function App() {
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
    <Container className={containerStyleApp}>
      <Header />
      <hr />
      <AddContact onAdd={addContact} />
      <hr />
      <Contacts contacts={contacts} />
    </Container>
  );
}

export default App;
