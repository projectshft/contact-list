import { useHistory, Link } from "react-router-dom";
import "./index.css";

const ContactList = ({ contacts }) => {
  const history = useHistory();
  const handleRowClick = (contact) => {
    history.push(`/${contact.id}`);
  };

  return (
    <div>
      <button type="button" className="btn btn-dark add-contact-button">
        <Link to="/new">Add a Contact</Link>
      </button>
      <div className="row justify-content-md-center">
        <table className="col-10 table table-dark table-primary">
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone #</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr
                onClick={() => handleRowClick(contact)}
                key={contact.id}
                className="contact"
              >
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
