import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactRow({ user }) {
  const BASE_URL = 'contacts/';
  return (
    <Link to={`${BASE_URL}${user.id}`}>
      <div>
        <h1>{user.name}</h1>
        <img src={user.image_url} alt={`Profile pic of ${user.name}`} />
        <h2>Email: {user.email}</h2>
        <h2>Phone Number: {user.phone_number}</h2>
      </div>
    </Link>
  );
}

export default ContactRow;

ContactRow.propTypes = {
  user: PropTypes.object.isRequired,
};
