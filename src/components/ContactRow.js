import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactRow({ user, removeUser, editUser }) {
  const FALLBACK = 'https://placekitten.com/400/400';
  function handleDeleteUserClick() {
    removeUser(user.id);
  }

  function handleEditUserClick() {
    editUser(user.id);
  }

  return (
    <section className="row">
      <Link to={`${user.id}`} className="row__inner">
        <div className="row__image-box">
          <img
            src={user.image_url}
            alt={`Profile pic of ${user.name}`}
            className="row__image"
            onError={(e) => {
              e.target.src = FALLBACK;
            }}
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
      <button type="submit" className="btn-row" onClick={handleDeleteUserClick}>
        Delete
      </button>
      <button type="submit" className="btn-row" onClick={handleEditUserClick}>
        Edit
      </button>
    </section>
  );
}

export default ContactRow;

ContactRow.propTypes = {
  user: PropTypes.object.isRequired,
  removeUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};
