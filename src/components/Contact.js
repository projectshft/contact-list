import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';

function Contact({ users }) {
  const FALLBACK = 'https://placekitten.com/400/400';
  const navigate = useNavigate();
  // Get user ID from url
  const { id } = useParams();
  // Try to find user with id
  const user = _.find(users, { id });
  // If no user with id provided in url exists, let user know
  if (!user) {
    return <div>Sorry, the user with id {id} has not been found</div>;
  }
  function handleBackClick() {
    navigate('../', { replace: true });
  }

  return (
    <section className="card">
      <div className="card__inner">
        <h1 className="card__name">{user.name}</h1>
        <img
          src={user.image_url}
          alt={`Profile pic of ${user.name}`}
          className="card__image"
          onError={(e) => {
            e.target.src = FALLBACK;
          }}
        />
        <h2 className="card__email">Email: {user.email}</h2>
        <h2 className="card__phone">Phone Number: {user.phone_number}</h2>
        <button type="submit" className="card__btn" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </section>
  );
}

export default Contact;

Contact.propTypes = {
  users: PropTypes.array.isRequired,
};
