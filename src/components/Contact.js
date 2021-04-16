import React from 'react';
import { PropTypes } from 'prop-types';

const Post = ({ post }) => {
  console.log(post);
  return (
    <tr>
      <td>
        <img
          src={post.avatarURL}
          alt="File not found"
          width="200"
          height="200"
        />
      </td>
      <td>{post.fullname}</td>
      <td>{post.email}</td>
      <td>{post.phone}</td>
    </tr>
  );
};

Post.propTypes = {
  post: PropTypes.node,
};

export default Post;
