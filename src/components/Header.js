import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/contacts/new">Add new contact</Link>
    </nav>
  );
}
