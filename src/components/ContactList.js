import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Post from './Contact';

const ContactList = (props) => {
  const { posts } = props;
  const postItems = posts.map((post, index) => (
    <Post key={index} index={index} post={post} />
  ));

  return (
    <div>
      <Link to="/new">
        <button type="button" className="btn btn-primary">
          Add Contact
        </button>
      </Link>
      <br />
      <br />
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>{postItems}</tbody>
      </table>
    </div>
  );
};

ContactList.propTypes = {
  posts: PropTypes.any,
};

export default ContactList;
