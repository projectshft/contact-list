import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="page-header">
          <h1>Contact List</h1>
        </div>
        <Link to="/newContact">
          <button type="button" className="btn btn-primary">
            Add Contact
          </button>
        </Link>
        <table className="index">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.ID}>
                <th scope="row">{index + 1}</th>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <img
                    src={contact.img}
                    alt={contact.name}
                    className="user-img"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.func,
};

export default ContactList;
