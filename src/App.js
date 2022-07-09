import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Contacts from './components/Contacts';

// Container Classes App //
const containerStyleApp =
  'App d-flex flex-column bg-primary border border-warning';

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
  return (
    <Container className={containerStyleApp}>
      <Header />
      <hr />
      <Contacts contacts={contacts} />
    </Container>
  );
}

export default App;
