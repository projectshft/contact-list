import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactRow({ user }) {
  return (
    <Link to={`${user.id}`} className="row">
      <div className="row__image-box">
        <img
          src={user.image_url}
          alt={`Profile pic of ${user.name}`}
          className="row__image"
        />
      </div>

      <div className="row__name-box">
        <span className="row__name">{user.name}</span>
      </div>

      <div className="row__email-box">
        <span className="row__email">{user.email}</span>
      </div>

      <div className="row__phone-box">
        <span className="row__phone">{user.phone_number}</span>
      </div>
    </Link>
  );
}

export default ContactRow;

ContactRow.propTypes = {
  user: PropTypes.object.isRequired,
};
