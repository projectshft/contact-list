import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => (
  <div>
    <h1>Contact List</h1>
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link to={`/${contact.id}`}>
            {contact.name} {contact.email} {contact.phone_number}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
