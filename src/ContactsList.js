import Contact from "./Contact";
import { Link } from "react-router-dom";

const ContactsList = (props) => {
  const contactListItems = props.contacts.map((contact, index) => {
    return <Contact key={index} contact={contact} />;
  });
  return (
    <>
      <div>
        <h1>Contact List</h1>
        <Link to="/contacts/new">
          <button type="button" className="btn btn-primary">
            Add Contact
          </button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>{contactListItems}</tbody>
      </table>
    </>
  );
};

export default ContactsList;
