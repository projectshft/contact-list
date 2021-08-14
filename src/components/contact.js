import { PropTypes } from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export default function Contact({ contacts, contactId, deleteContact }) {
  const targetContact = _.find(contacts, { id: contactId });

  const handleDeleteClick = function () {
    deleteContact(contactId);
  };

  if (!contacts) {
    return <div>This contact does not exist</div>;
  }

  return (
    <div className="singleContact">
      <img src={targetContact.avatar} alt={targetContact.name} />
      <h2>{targetContact.name}</h2>
      <h3>{targetContact.email}</h3>
      <h3>{targetContact.number}</h3>
      <button type="button" className="btn btn-primary">
        <Link to="/">Back</Link>
      </button>
      <button type="button" className="btn btn-warning">
        <Link to={`/contacts/${contactId}/edit`}>Edit Contact</Link>
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDeleteClick}
      >
        <Link to="/">Delete Contact</Link>
      </button>
    </div>
  );
}
Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contactId: PropTypes.number,
  deleteContact: PropTypes.func,
};
