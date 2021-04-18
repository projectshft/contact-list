import { Link } from 'react-router-dom';

const addTableRow = (contact, index) => {
  return (
    <tr key={index}>
      <td >
        <img className="profile-picture" src={contact.profilePicture} width="150" ></img>
      </td>
      <td>
        <Link to={`/contacts/${index}`}>{contact.name}</Link>
      </td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
    </tr>
  )
}

const ContactsList = ({ contacts }) => (
  < div className="container contact-list" >
    <h1>Contact List</h1>
    <br />
    <table className="table table-bordered col-md-8 offset-md-2">
      <thead>
        <tr>
          <th>Profile Picture</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((contact, index) => {
          return addTableRow(contact, index)
        }
        )}
      </tbody>
    </table>

    <div className="addNewButton col-md-8 offset-md-2">
      <button type="button" className="btn btn-warning"><Link to='/contacts/new' >Add New Contact</Link></button>
    </div>
  </div >
);

export default ContactsList;