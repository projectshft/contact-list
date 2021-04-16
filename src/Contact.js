import React from 'react';

const Contact = ({ contact }) => {
  return (
    <tr>
      <td>
        <img className="profile-picture" src={contact.profilePicture} width="150" ></img>
      </td>
      <td>{contact.name}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
    </tr>
  )
}

export default Contact