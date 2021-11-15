import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  function handleClick() {
    history.goBack();
    }
  
  return (
    <div className="container">
      <h1>Contact List</h1>
      <a href="/contacts/new" className="btn">New Contact</a>
      <button onClick={handleClick} className="btn"> Back </button>

    </div>
  )
}

export default Header;