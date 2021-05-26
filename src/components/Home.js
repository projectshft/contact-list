import {Link} from 'react-router-dom'; 
import ContactList from './ContactList'; 

const Home = ({contacts, setContacts}) => {

  return (
    <div className="home col-md-10 offset-1">
      <h1 className="header">Contact List</h1>
      <Link to="/contacts/new" className="btn btn-primary btn add-button">Add Contact</Link>
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default Home; 