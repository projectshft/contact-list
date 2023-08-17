import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactList from './ContactList';

const Main = ({contacts}) => (
    <Container>
      <Row>
        <Col><ContactList contacts={contacts}/></Col>
      </Row>
    </Container>
);

export default Main;