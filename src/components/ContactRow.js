import React from "react";
import { useHistory } from "react-router-dom";

const ContactRow = ({ contact }) => {
  const history = useHistory();
  const handleRowClick = () => {
    history.push(`/contact/${contact.phone}`);
  };

  return (
    <tr onClick={handleRowClick}>
      <th scope="row">
        <img src={contact.URL} width="160" height="170" alt="" />
      </th>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;
