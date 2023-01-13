import { Link, Switch } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Home = () => (
  <Container className="centered">
    <Row>
      <Col>
        <h1>Let's Begin</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Link to={'/contacts'}>View Contacts</Link>
      </Col>
    </Row>
  </Container>
  
)

export default Home