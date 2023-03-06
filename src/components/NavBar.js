import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand">Contact List</h1>
        <form className="d-flex" role="search">
          <Link to="/">
            <button className="btn btn-outline-primary" type="submit">
              Home
            </button>
          </Link>
          <Link to="/addContact">
            <button className="btn btn-outline-primary" type="submit">
              Add Contact
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
