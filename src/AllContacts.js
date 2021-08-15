import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const AllContacts = ({contacts}) => {
  const handleContactClick = (id) => {
    // this does work, so the id is passing and click happening -- 
    console.log(id)
    //Add function to link to contact page. Custom hook?
    
    
  }

  return (
  <div className="container-fluid">
    <div className="col-lg-10 mx-auto">
    <h1>Contact List</h1>
    <Link to="/contacts/new">
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
        
        <tr key={c.contactId} onClick={() =>handleContactClick(c.contactId)} >
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