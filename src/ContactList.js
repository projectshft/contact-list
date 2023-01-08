import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const ContactList = ({contacts, handleDelete}) => {
  // component to display the  contacts state 
  return (
    <div className="container contact-list">
      <h1 className='text-center mt-4'>Contact List</h1>
      <div className="row text-center">
        <div className="col ms-1">
          <NavLink to='/contacts/new' className='btn btn-primary m-2'>Add Contact</NavLink>
        </div>
      </div>
      <div>
      {contacts.map(contact => (
        <div className="row border border-dark rounded m-4 text-center d-flex align-items-center" key={contact.id}>
          <div className="col-md-6">
            <NavLink className='text-decoration-none text-dark d-block' to={`/contacts/${contact.id}`}>
              <img className='img-fluid' src={contact.profilePicture} alt='contact profile' style={{'height': '250px'}}/>
            </NavLink>
          </div>
          <div className="col-md-6">
            <NavLink className='text-decoration-none text-dark d-block' to={`/contacts/${contact.id}`}>
              <p><strong>Name: </strong>{contact.name}</p>
              <p><strong>Email: </strong>{contact.email}</p>
              <p><strong>Phone: </strong>{contact.phoneNumber}</p>
            </NavLink>
            <button onClick={() => handleDelete(contact.id)} className='btn btn-danger'>Delete Contact</button>
          </div>
        </div>  
          ))}
      </div>
    </div>
  );
}

// propTypes check
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired
}
 
export default ContactList;