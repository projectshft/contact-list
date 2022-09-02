import {Link} from 'react-router-dom'
import RenderContacts from '../components/RenderContacts';
import {Table, Button} from 'react-bootstrap'


const ContactList = () => (
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="page-header">
        <h1 style={{display:'flex', justifyContent: 'center'}}>
          Contact List
        </h1>
      </div>
      <div>
        <Link to="/addcontact">
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
        <RenderContacts/>
      </Table>
    </div>
  </div>
 );

 export default ContactList;