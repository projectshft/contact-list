import React from "react";
import PropTypes from 'prop-types';

const ContactRow = ({newContact, handleContactRowClick}) => {
  return (
    <tbody>
      <tr id={newContact.id} onClick={handleContactRowClick}>
        <td className="col-md-3"><img src={newContact.imageURL} className="thumbnail" alt="contact profile" /></td>
        <td>{newContact.fullName}</td>
        <td>{newContact.emailAddress}</td>
        <td>{newContact.phoneNumber}</td>
      </tr>
    </tbody>
  )
};

ContactRow.propTypes = {
  newContact: PropTypes.object.isRequired,
};

export default ContactRow;