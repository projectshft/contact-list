import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';

const ContactRow = ({ contact }) => {
  const history = useHistory();

  /* generates a url for the contact with its id
  and naviagates to the contactDetail page for that contact */
  const handleContactClick = (e) => {
    const contactDetailURL = `/contacts/${e.target.id}`;
    history.push(contactDetailURL);
  };

  return (
    <tr onClick={handleContactClick}>
      <td id={contact.id} className="text-center">
        <img
          src={contact.avatarURL}
          alt="File not found"
          width="200"
          height="200"
          id={contact.id}
        />
      </td>
      <td id={contact.id}>{contact.fullname}</td>
      <td id={contact.id}>{contact.email}</td>
      <td id={contact.id}>{contact.phone}</td>
    </tr>
  );
};

ContactRow.propTypes = {
  contact: PropTypes.object,
};

export default ContactRow;
