import React from 'react';
import { PropTypes } from 'prop-types';

const Post = ({ post }) => {
  console.log(post);
  return (
    <tr>
      <td>{post.avatarURL}</td>
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
