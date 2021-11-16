import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  function handleBackClick() {
    history.goBack();
  }

  return (
    <div className="container">
      <h1>Contact List</h1>
      <a href="/contacts" className="btn">
        Contacts
      </a>
      <a href="/contacts/new" className="btn">
        New Contact
      </a>
      <button type="button" onClick={handleBackClick} className="btn">
        {' '}
        Back{' '}
      </button>
    </div>
  );
};

export default Header;
