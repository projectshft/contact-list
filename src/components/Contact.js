import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Contact = ({ contact }) => {
  const [redirect, setRedirect] = useState(false);
  const handleContact = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect push to={`/contacts/${contact.id}`} />;
  }
  return (
    <tr
      idnum={contact.id}
      onClick={handleContact}
      style={{ cursor: "pointer" }}
    >
      <td>
        <img src={contact.image_url} alt="Not Found" />
      </td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone_number}</td>
    </tr>
  );
};

export default Contact;
