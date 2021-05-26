import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";

const ContactList = ({ contacts, deleteContact }) => {
  const history = useHistory();

  const handleRowClick = (contact) => {
    history.push(`/contacts/${contact.id}`);
  };

  return (
    <div className="col-10 offset-1 justify-content-md-center">
      <div className="row">
        <button
          type="button"
          className="btn btn-dark add-contact-button text-nowrap"
        >
          <Link to="/contacts/new">Add a Contact</Link>
        </button>
      </div>
      <div className="row">
        <table className=" table table-dark table-primary">
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone #</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr className="contact" key={contact.id}>
                <td>
                  <img
                    src={contact.image_url}
                    alt="image_url"
                    className="rounded d-block"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone_number}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleRowClick(contact)}
                  >
                    View
                  </button>
                  <br />
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                  <br />
                  <button
                    type="button"
                    className="btn btn-danger text-nowrap"
                    onClick={() => deleteContact(contact)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
