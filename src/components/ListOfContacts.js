import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ListOfContacts = ({ contacts }) => (
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
        {contacts.map((contact) => (
          <LinkContainer to={`${contact.id}`} key={contact.id}>
            <tr>
              <td>
                <img src={contact.photoUrl} alt="" className="img-fluid" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          </LinkContainer>
        ))}
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

ListOfContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ListOfContacts;
