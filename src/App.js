import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import ListOfContacts from './components/ListOfContacts';
import ContactForm from './components/ContactForm';

const Main = () => (
  <Routes>
    <Route path="/" element={<ListOfContacts />} />
    <Route path="form" element={<ContactForm />} />
  </Routes>
);

const App = () => (
  <Container fluid>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <h1 className="display-3 text-center m-4">Contact List</h1>
        <hr />
        <Main />
      </Col>
    </Row>
  </Container>
);

export default App;
