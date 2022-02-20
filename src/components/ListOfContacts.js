import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ListOfContacts = () => (
  <div>
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <div className="d-flex justify-content-evenly">
      <LinkContainer to="form">
        <Button variant="outline-dark" size="lg">
          Add Contact
        </Button>
      </LinkContainer>
    </div>
  </div>
);

export default ListOfContacts;
