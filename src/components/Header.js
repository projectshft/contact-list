import { Container, Button } from 'react-bootstrap';

// Container Classes Header //
const containerStyleHeader =
  'd-flex justify-content-around align-items-center pt-3';
const onClick = () => {
  console.log('Click the Button');
};
const Header = () => (
  <Container className={containerStyleHeader}>
    <h1>Contact List</h1>
    <Button className="btn-warning" onClick={onClick}>
      Click To Add
    </Button>
  </Container>
);

export default Header;
