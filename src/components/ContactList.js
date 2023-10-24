/* eslint-disable no-shadow */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

export default function ContactList({ allContacts, sortedContacts }) {
  let contactList = allContacts();

  const sortContacts = (contactList, value) => {
    const regex = value.toLowerCase();

    const contacts = contactList
      .map((contact) => {
        const clone = { ...contact };
        return clone;
      })
      .filter((contact) => {
        if (contact.name.toLowerCase().match(regex)) {
          return true;
        }

        return false;
      });

    return contacts;
  };

  if (sortedContacts !== null && sortedContacts.length > 0) {
    contactList = sortContacts(contactList, sortedContacts);
  }

  if (contactList.length <= 0) {
    return (
      <div className="list-group border-0 rounded-0 text-md-start">
        <NavLink
          to="/contacts/new"
          className="list-group-item border-end-0 d-inline-block text-truncate text-center"
        >
          <i>Add a new contact</i>
        </NavLink>
      </div>
    );
  }

  const contacts = contactList.map((contact, index) => (
    <ContactListItem key={index} contact={contact} />
  ));

  return (
    <div className="list-group border-0 rounded-0 text-md-start">
      {contacts}
    </div>
  );
}

ContactList.propTypes = {
  allContacts: PropTypes.func,
  sortedContacts: PropTypes.string,
};
