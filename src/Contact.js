import React from 'react';
import {Link} from 'react-router-dom';

// Renders a single contact as a table row
const Contact = ({contact}) => {
  return (
    <tr key={contact.id.toString()}>
      <th scope="row"><img src={contact.imgUrl} alt="Image not found" className="table-view-img"></img></th>
      <td><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
      <td>{contact.email}</td>
      <td>{contact.number}</td>
    </tr>
  )
}

export default Contact;