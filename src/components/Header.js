import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/contacts/new">Add new contact</Link>
    </>
  );
}
