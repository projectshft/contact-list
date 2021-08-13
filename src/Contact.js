import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ProfilePic from './ProfilePic';

// Renders a single contact as a table row
const Contact = ({contact}) => {
  return (
    <tr key={contact.id.toString()}>
      <th scope="row"><ProfilePic imgUrl={contact.imgUrl} imgType="table-view-img"></ProfilePic></th>
      <td><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
      <td>{contact.email}</td>
      <td>{contact.number}</td>
    </tr>
  )
}

export default Contact;