import PropTypes from 'prop-types';
import ContactRow from './ContactRow';

export default function FullContacts({ users }) {
  return users.map((user, index) => <ContactRow user={user} key={index} />);
}
FullContacts.propTypes = {
  users: PropTypes.array.isRequired,
};
