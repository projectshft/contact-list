import Table from 'react-bootstrap/Table';

const ContactList = ({contacts}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <tr>
              <td><img src={contact.image_url} alt="" className="contact-image"/></td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default ContactList;