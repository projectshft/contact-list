import React from "react";
import PropTypes from 'prop-types';

//returning jsx to add new contact to contacts list
const Contact = ({contact, handleRowClick}) => {
  
  return(
    <tbody>
        <tr id={contact.id} onClick={handleRowClick}>
          <td className='col-md-3'><img src={contact.imageUrl} className='col-md-12 border' alt='' /></td>
          <td>{contact.fullName}</td>
          <td>{contact.email}</td>
          <td>{contact.phoneNumber}</td>
        </tr>
      </tbody>
  )
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;