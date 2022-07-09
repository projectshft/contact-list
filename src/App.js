import { Container } from 'react-bootstrap';
import Header from './components/Header';

// Container Classes App //
const containerStyleApp =
  'App d-flex flex-column bg-primary border border-warning';

function App() {
  return (
    <Container className={containerStyleApp}>
      <Header />
      <hr />
      <h3>This is where my Contacts will live</h3>
    </Container>
  );
}

export default App;
