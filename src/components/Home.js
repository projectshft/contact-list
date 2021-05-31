import {Link} from 'react-router-dom'; 
import ContactList from './ContactList'; 
import propTypes from 'prop-types';

const Home = ({contacts, setContacts}) => {

  Home.propTypes = {
    contacts: propTypes.array,
    setContacts: propTypes.func
  };  

  return (
    <div className="home col-md-10 offset-1">
      <h1 className="header">Contact List</h1>

      <Link to="/contacts/new"><button type="button" className="btn btn-primary add-contact">Add Contact</button></Link>

      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default Home; 