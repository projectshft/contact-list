import { Link } from 'react-router-dom';

const ContactsList = ({ contacts }) => (
  <div>
    <ul>
      {contacts.map((p) => (
        <li key={p.id}>
          <Link to={`/contacts/${p.key}`}>{p.lastName}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactsList;
