import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const YourContacts = ({ contacts, history }) => {
  const handleAddNewContactClick = () => {
    history.push('/contacts/new');
  };

  return (
    <div className="container">
      <div className="row contacts-header">
        <div className="col-md-4 offset-md-4" align="center">
          <h1>Your Contacts</h1>
          <button
            type="button"
            className="btn btn-info btn-lg"
            onClick={handleAddNewContactClick}
          >
            Add New Contact
          </button>
        </div>
      </div>

      <div className="row">
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Picture</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr>
                <td>
                  <Link to={`/contacts/${c.id}`}>{c.name}</Link>
                </td>
                <td>
                  <img src={c.pictureUrl} alt="" width="200" height="200" />
                </td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

YourContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      picture_url: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  history: PropTypes.any,
};

export default YourContacts;
