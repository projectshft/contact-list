import PropTypes from 'prop-types';

function ContactRow({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.image_url} alt={`Profile pic of ${user.name}`} />
      <h2>Email: {user.email}</h2>
      <h2>Phone Number: {user.phone_number}</h2>
    </div>
  );
}

export default ContactRow;

ContactRow.propTypes = {
  user: PropTypes.object.isRequired,
};
