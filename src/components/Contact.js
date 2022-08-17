import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import getUser from '../api/getUser';

function Contact({ users }) {
  const { id } = useParams();
  // const [user, setUser] = useState([]);

  // // trying to fix eslint errors and this is the solution I came up with
  // const fetchUser = useCallback(async () => {
  //   const contacts = await getUser(id);
  //   setUser(contacts);
  // }, [id, setUser]);

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser]);
  const user = _.find(users, { id });
  if (!user) {
    return <div>Sorry, the user with id {id} has not been found</div>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.image_url} alt={`Profile pic of ${user.name}`} />
      <h2>Email: {user.email}</h2>
      <h2>Phone Number: {user.phone_number}</h2>
    </div>
  );
}

export default Contact;

Contact.propTypes = {
  users: PropTypes.array.isRequired,
};
