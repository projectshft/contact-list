import { Link } from 'react-router-dom';
import {Table, Button} from 'react-bootstrap'

const AllContacts = ({contacts}) => (
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="page-header">
        <h1 style={{display:'flex', justifyContent: 'center'}}>
          Contact List
        </h1>
      </div>
      <div>
        <Link to="/rolodex/new">
          <Button variant="primary">
            Add New Contact
          </Button>
        </Link>
      </div>
      <br></br>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {
        contacts.map(p => (
          <tr key={p.id}>
              <td><img style={{height: '200px', width: '300px'}} src={p.img_url} alt='portrait'/></td>
              <td><Link to={`/rolodex/${p.id}`}>{p.contact_name}</Link></td>
              <td>{p.email}</td>
              <td>{p.phone_number}</td>
          </tr>
        ))
          }
        </tbody>
      </Table>
    </div>
  </div>
)

export default AllContacts