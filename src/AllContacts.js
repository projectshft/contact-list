import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//to do: add key to each contact. 
//      display pics


const AllContacts = ({contacts}) => {
  

  return (
  <div className="container-fluid">
    <div className="col-lg-10 mx-auto">
    <h1>Contact List</h1>
    <Link to="/new">
      <button type="button"  className="btn btn-primary" id="addNewContact">
        Create New Contact
      </button>
    </Link>

  <table className="table table-striped table-bordered table-hover">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Profile Pic</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
    <tbody>
      {
      contacts.map(c => (
        // add id or key to row
        <tr>
          <td><img src={c.pic_url} alt={c.name} width="200"></img> </td>
          <td>{c.name}</td>
          <td>{c.email}</td>
          <td>{c.phone}</td>
        </tr>
      ))
      }
    </tbody>
  </table>
  </div>
  </div>
)
}

export default AllContacts