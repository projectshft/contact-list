import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllContacts = ({contacts}) => (
  <div className="container-fluid">
    <h1>Contact List</h1>
  <table className="table table-striped table-bordered">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Profile Pic</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
  </table>
  </div>
)

export default AllContacts