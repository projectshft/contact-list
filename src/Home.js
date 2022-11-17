import 'bootstrap/dist/css/bootstrap.css';
import New from './New'
import { Link } from 'react-router-dom'


const Home = ({contacts}) => (
    <div>
    <h1>CONTACT LIST</h1>
    <Link to='/New'>Add New</Link>
    <table className="table">
    <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Email</th>
    </tr>
    </thead>
    <tbody>
    {contacts.map(item => (
    <tr>
      <th scope="row"></th>
     <td>{item.name}</td>
      <td>{item.number}</td>
      <td>{item.email}</td>
    </tr>
    ))}
    </tbody>
    </table>
</div>
)

export default Home