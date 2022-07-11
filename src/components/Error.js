import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Error Bootstrap Classes //
const containerStyleError =
  'd-flex justify-content-around bg-primary align-items-center p-3 border border-warning';
const Error = () => (
  <Container className={containerStyleError}>
    <h1 className="h1-header text-warning">Page Not Found </h1>
    <Link to="/contacts">
      <Button className="btn-warning">Click To Return</Button>
    </Link>
  </Container>
);

export default Error;
