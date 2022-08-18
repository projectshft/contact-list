import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        Home
      </Link>
      <Link to="/contacts" className="navigation__link">
        Contacts
      </Link>
      <Link to="/contacts/new" className="navigation__link">
        Add new contact
      </Link>
    </nav>
  );
}
