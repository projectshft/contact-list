import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export default function ContactRow({ contact }) {
  const { id, name, image_url, email, phone_number } = contact;
  const history = useHistory();

  return (
    <>
      <tr onClick={() => history.push(`/contacts/${id}`)}>
        <td>
          <img src={image_url} alt="person" height="150" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone_number}</td>
      </tr>
    </>
  );
}
ContactRow.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};
