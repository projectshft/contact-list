import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const ContactsList = ({contacts}) => {
  const navigate = useNavigate();

  const contactClick = (data) => {
    navigate(`/contacts/${data.id}`, {state: data} )
  }

  return (
    <div>
      <h2>Contacts List</h2>

      <Link to="new">
        <button className="btn btn-dark">Create New Contact</button>
      </Link>

      <hr />

      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index} onClick={() => contactClick(contact)}>
                <td width='250px'>
                  <img className='contactPhoto' src={contact.image_url} alt="A photo of the contact"  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.phone_number}</td>
                <td>{contact.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
};

export default ContactsList;