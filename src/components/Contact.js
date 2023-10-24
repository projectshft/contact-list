import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  formatPhoneNumber,
  parsePhoneNumber,
  formatPhoneNumberIntl,
} from 'react-phone-number-input';
import NotFound from './NotFound';

export default function Contact({ getContact, deleteContact }) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentContactId = location.pathname.replace(/^\//, '');

  if (!getContact(currentContactId)) {
    return <NotFound />;
  }

  const contact = getContact(currentContactId);
  let displayPhoneNumber = '';

  if (contact.phone) {
    const phoneNumber = parsePhoneNumber(contact.phone);
    displayPhoneNumber = formatPhoneNumberIntl(phoneNumber.number);

    if (phoneNumber.country === 'US') {
      displayPhoneNumber = formatPhoneNumber(phoneNumber.number);
    }
  }

  const handleDelete = () => {
    if (
      window.confirm(
        'Are you sure you want to delete this contact? This action cannot be undone.'
      )
    ) {
      deleteContact(contact);
      navigate('/');
    }
  };

  const noName = <i>No Name</i>;

  return (
    <div className="d-flex flex-wrap">
      <div className="p-2">
        <img
          src={
            contact.profilePicture ||
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          }
          alt="contact"
          className="img-thumbnail custom-img"
        />
      </div>
      <div className="p-2">
        <h1>{contact.name || noName}</h1>
        <h3>{displayPhoneNumber}</h3>
        {contact.email ? (
          <p>
            <strong>Email: </strong>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        ) : (
          ''
        )}
        <div className="d-flex flex-wrap">
          <button
            type="button"
            className="btn btn-success me-2 mt-2"
            onClick={() =>
              navigate(`/${contact.contactId}/edit`, { state: contact })
            }
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  getContact: PropTypes.func,
  deleteContact: PropTypes.func,
};
