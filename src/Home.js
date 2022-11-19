import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';


const Home = ({contacts, removeItem, history}) => (
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
        
    <tr className="table-row" data-key={item.contactId}>
      <th onClick={()=> history.push(`/${item.contactId}`)}key={item.number} scope="row">
    </th>
    <td onClick={()=> history.push(`/${item.contactId}`)}><img src={`unsplash.com/photos/${item.img}`}></img></td>
     <td onClick={()=> history.push(`/${item.contactId}`)}>{item.name}</td>
      <td onClick={()=> history.push(`/${item.contactId}`)}>{item.number}</td>
      <td onClick={()=> history.push(`/${item.contactId}`)}>{item.email}</td>
      <td data-key={item.contactId} className="delete-button" onClick={removeItem}><FaTrash data-key={item.contactId}/></td>
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
        email: PropTypes.string,
        contactId: PropTypes.number
    }))
  }

export default Home