import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ContactListItem({ contact }) {
  const noName = <i>No Name</i>;

  return (
    <NavLink
      to={`${contact.contactId}`}
      className="list-group-item border-end-0 d-inline-block text-truncate"
    >
      {contact.name || noName}
    </NavLink>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.object,
};
