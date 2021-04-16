import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const IndividualContact = ({ match, contacts }) => {
  const { id } = match.params;
  const [contact] = contacts.filter((c) => c.id === parseInt(id));
  return (
    <div>
      <p>
        <Link to="/contacts">Go Back</Link>
      </p>
      <img src={contact.image_url} alt="..." />
      <h2>{contact.name}</h2>
      <h4>{contact.email}</h4>
      <h4>{contact.phone_number}</h4>
    </div>
  );
};

IndividualContact.propTypes = {
  match: PropTypes.object,
  contacts: PropTypes.array,
};

export default IndividualContact;
