import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

const Contact = ({ contact, deleteContact }) => {
  const [redirect, setRedirect] = useState(false);

  const handleContactClick = () => {
    setRedirect(true);
  };

  const handleDeleteButtonClick = (e) => {
    e.stopPropagation();
    deleteContact(contact.id);
  };

  if (redirect) {
    return <Redirect to={`/contacts/${contact.id}`} />;
  }

  return (
    <tr
      key={contact.id}
      idnum={contact.id}
      onClick={handleContactClick}
      style={{ cursor: 'pointer' }}
    >
      <td>
        <img src={contact.image_url} alt="..." />
      </td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone_number}</td>
      <td>
        <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
        <br />
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleDeleteButtonClick}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
};

export default Contact;
