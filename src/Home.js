import { Link } from 'react-router-dom';
import ContactList from './ContactList'

const Home = () => (
  <div>
    <h1>Hello! Click below to see your contacts.</h1>
    <ContactList />
    <Link to='/contacts'><button type="button" className="btn btn-primary"> Contacts </button></Link>
  </div>
)

export default Home