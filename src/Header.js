import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const navigate = useNavigate();
  const handleAddContactClick = () => navigate('/contacts/add');

  return (
  <div style={{display: 'flex'}}>
    <h1>My Contacts</h1>
    <Button variant="primary" className="ms-auto" onClick={handleAddContactClick}>Add New Contact</Button>
  </div>
  )
};

export default Header;