import { NavLink } from "react-router-dom";

export default function ContactListItem({ contact }) {
  return (
    <NavLink
      to={`${contact.contactId}`}
      className="list-group-item border-end-0 d-inline-block text-truncate"
    >
      {contact.name}
    </NavLink>
  );
}
