import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Home = ({contacts}) => (
    <div>
    <h1>CONTACT LIST</h1>
    <Link to='/New'><button className='btn btn-success'>Add New</button></Link>
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
      <th key={item.number} scope="row"></th>
     <td>{item.name}</td>
      <td>{item.number}</td>
      <td>{item.email}</td>
    </tr>
    ))}
    </tbody>
    </table>
</div>
)


Home.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
        email: PropTypes.string}))
  }

export default Home