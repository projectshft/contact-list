import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Header Bootstrap Classes //
const containerStyleHeader =
  'd-flex justify-content-around align-items-center pt-3';

const Header = () => (
  <Container className={containerStyleHeader}>
    <h1 className="h1-header text-warning">Contact List </h1>
    <Link to="/addcontact">
      <Button className="btn-warning">Click To Add</Button>
    </Link>
  </Container>
);

export default Header;
