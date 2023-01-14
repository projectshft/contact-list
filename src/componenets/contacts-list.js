import Table from 'react-bootstrap/Table'
import ContactItem from "./contact-item";
import { Link } from "react-router-dom";


const ContactsList = (props) => {
  
  // props.contacts is an object with an array of contact objects
  // console.log(props.contacts.contacts);

  const contactsObject = props.contacts

  // contactsObject.contacts.map((contact) => {
  //   return <ContactItem key={contact.id} contact={contact} />
  // });

  return (
    <div>
      <h2>Contacts List</h2>

      <Link to="new">
        <button className="btn btn-dark">Create New Contact</button>
      </Link>

      <hr />
      <ContactItem />

      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Photo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
};

export default ContactsList;