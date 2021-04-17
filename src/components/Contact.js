import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';

const Post = ({ post }) => {
  const history = useHistory();

  const handleContactClick = (e) => {
    const contactDetailURL = `/contacts/${e.target.id}`;
    history.push(contactDetailURL);
  };

  return (
    <tr onClick={handleContactClick}>
      <td id={post.id}>
        <img
          src={post.avatarURL}
          alt="File not found"
          width="200"
          height="200"
          id={post.id}
        />
      </td>
      <td id={post.id}>{post.fullname}</td>
      <td id={post.id}>{post.email}</td>
      <td id={post.id}>{post.phone}</td>
    </tr>
  );
};

Post.propTypes = {
  post: PropTypes.any,
};

export default Post;
