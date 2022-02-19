import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => (
  <Container>
    <Row className="header">
      <Col md={{ span: 6, offset: 3 }}>
        <h1 className="display-3 text-center m-4">Contact List</h1>
        <hr />
      </Col>
    </Row>
  </Container>
);

export default App;
