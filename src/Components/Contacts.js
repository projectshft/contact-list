import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Contacts = ({ contactList }) => (
  <div>
    <ul>
      {contactList.map((contact) => (
        <li key={contact.id}>
          <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

Contacts.propTypes = {
  contactList: PropTypes.array,
};

export default Contacts;
