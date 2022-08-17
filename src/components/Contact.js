import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

function Contact({ users }) {
  // Get user ID from url
  const { id } = useParams();
  // Try to find user with id
  const user = _.find(users, { id });
  // If no user with id provided in url exists, let user know
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
