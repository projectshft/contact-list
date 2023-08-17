import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import ContactList from './ContactList';

const Main = ({contacts}) => (
    <Container>
      <Header />
      <Row>
        <Col><ContactList contacts={contacts}/></Col>
      </Row>
    </Container>
);

export default Main;