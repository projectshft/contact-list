import {Link} from 'react-router-dom'; 
import ContactList from './ContactList'; 

const Home = ({contacts}) => {

  return (
    <div className="home">
      <h1 className="header">Contact List</h1>
      <Link to="/contact-form" className="btn btn-primary btn add-button">Add Contact</Link>
      <ContactList contacts={contacts} />
      
    </div>
  );
};

export default Home; 