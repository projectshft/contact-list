import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';

const Post = ({ contact }) => {
  const history = useHistory();

  const handleContactClick = (e) => {
    const contactDetailURL = `/contacts/${e.target.id}`;
    history.push(contactDetailURL);
  };

  return (
    <tr onClick={handleContactClick}>
      <td id={contact.id}>
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

Post.propTypes = {
  contact: PropTypes.any,
};

export default Post;
