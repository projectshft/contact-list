import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/fontawesome-free-solid';

const Contacts = ({ contactList, setContactList }) => {
  const icon = <FontAwesomeIcon icon={faTrash} />;

  const deleteContact = (contact) => {
    const newList = contactList.filter((c) => c !== contact);
    setContactList(newList);
  };

  const handleClick = (contact) => {
    const text = 'Are you sure you want to delete this contact?';
    return window.confirm(text) ? deleteContact(contact) : false;
  };

  return (
    <div>
      <ul>
        {contactList.map((contact) => (
          <li key={contact.id}>
            <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
            <button type="button" onClick={() => handleClick(contact)}>
              {icon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contactList: PropTypes.array,
  setContactList: PropTypes.func,
};

export default Contacts;
