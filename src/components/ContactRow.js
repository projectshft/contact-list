import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

function ContactRow({ user, removeUser }) {
  const FALLBACK = 'https://placekitten.com/400/400';
  const navigate = useNavigate();
  function deleteUser() {
    removeUser(user.id);
  }
  // Using a modal proved more difficult than expected
  function handleDeleteUserClick() {
    const text = `Are you sure you want to delete ${user.name} from the contacts list?`;
    return window.confirm(text) ? deleteUser(user.id) : false;
  }

  function handleEditUserClick() {
    navigate(`${user.id}/edit`);
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

ContactRow.defaultProps = {
  user: {
    name: '',
    email: '',
    phone_number: '',
    image_url: '',
    id: '',
  },
};
ContactRow.propTypes = {
  user: PropTypes.object,
  removeUser: PropTypes.func.isRequired,
};
