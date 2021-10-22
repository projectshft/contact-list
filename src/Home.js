import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            width="60"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          <strong>KONTAX</strong>
        </Navbar.Brand>
        <Link to="/contacts">Contacts</Link>
      </Container>
    </Navbar>
    <br />
  </>
);

export default Home;
