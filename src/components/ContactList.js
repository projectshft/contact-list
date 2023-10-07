import ContactListItem from "./ContactListItem";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function ContactList({allContacts}) {
  const contactList = allContacts();
  
  if (contactList.length <= 0) {
    return (
      <div className="list-group border-0 rounded-0 text-md-start">
        <NavLink
          to="/new"
          className="list-group-item border-end-0 d-inline-block text-truncate text-center"
        >
          <i>Add a new contact</i>
        </NavLink>
      </div>
    )
  }

  const contacts = contactList.map((contact, index) => {
    return <ContactListItem key={index} contact={contact} />;
  });

  return (
    <div className="list-group border-0 rounded-0 text-md-start">
    {contacts}
    </div>
  )
}

ContactList.propTypes = {
  allContacts: PropTypes.func
};