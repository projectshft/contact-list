import React from "react";

const ContactRow = ({contact}) => {
  return (
    <tr>
      <th><img className="img-thumbnail" src={contact.image_url} alt=""/></th>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone_number}</td>
    </tr>
  )
}

export default ContactRow