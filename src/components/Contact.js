import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Contact = ({ contact }) => {
  const [redirect, setRedirect] = useState(false);

  const handleContactClick = () => {
    setRedirect(true);
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
    </tr>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};

export default Contact;
