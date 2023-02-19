import { Link, useHistory } from "react-router-dom";
import Contacts from "./Contacts";

const ContactList = ({ contacts }) => {
  const history = useHistory();

  const handleRowClick = () => {
    history.push("/contacts/num");
  };

  return (
    <div>
      <h1 className="text-center mt-5">Contact List</h1>
      <div className="align-content-center mx-5 w-75 mx-auto">
        <Link to="/contacts/new">
          <button className="btn btn-primary">Add Contact</button>
        </Link>
        <table className="table table-hover table-bordered mt-3">
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr onClick={handleRowClick} key={contact.id}>
                <td className="">
                  <img
                    className="mx-auto d-block img-fluid"
                    src={contact.image_url}
                  />
                </td>
                <td className="align-middle">{contact.name}</td>
                <td className="align-middle">{contact.email}</td>
                <td className="align-middle">{contact.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
