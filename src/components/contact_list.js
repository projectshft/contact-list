import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const contactRow = (contact) => (
  <tr key={contact.id}>
    <td>
      <img src={contact.avatar} alt={contact.name} />
    </td>
    <td>{contact.name}</td>
    <td>{contact.number}</td>
    <td>{contact.email}</td>
  </tr>
);

export default function ContactList({ contacts }) {
  return (
    <div>
      <button type="button" className="btn btn-primary add-contact-btn">
        <Link to="/contacts/new">Add Contact</Link>
      </button>
      <div className="row">
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          <tbody>{contacts.map((contact) => contactRow(contact))}</tbody>
        </table>
      </div>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objects),
};
