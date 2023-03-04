import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Contacs List</a>
      <form class="d-flex" role="search">
        <Link to="/addContact">
        <button class="btn btn-outline-success" type="submit">Add Contact</button>
        </Link>
      </form>
    </div>
  </nav>
  );
};

export default Nav;
