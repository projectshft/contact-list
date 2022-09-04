import {Button, Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () => (
  <div>
    <Container stlye>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <h1>Welcome to Your Contact List</h1>
          <Link to='/rolodex'>
            <Button variant='primary'>Contact List</Button>
          </Link>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
)

export default Home