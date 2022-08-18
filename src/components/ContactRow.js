import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactRow({ user }) {
  return (
    <Link to={`${user.id}`}>
      <div className="card">
        <img src={user.image_url} alt={`Profile pic of ${user.name}`} />
        <h1>{user.name}</h1>
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
