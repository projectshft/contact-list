import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Index({ contacts }) {
  const navigate = useNavigate();

  const handleRowClick = (contactId) => {
    navigate(`${contactId}`);
  };

  return (
    <main>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Home
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/AddContact">
                    Add Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Index">
                    Index
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>Index Page</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-1">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr className="table-active">
                    <th scope="col">Profile Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      onClick={() => handleRowClick(contact.id)}
                    >
                      <td>
                        <img
                          src={contact.image}
                          alt="Profile"
                          width="200"
                          height="200"
                        />
                      </td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
Index.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Index;
