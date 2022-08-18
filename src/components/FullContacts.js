import PropTypes from 'prop-types';
import ContactRow from './ContactRow';

export default function FullContacts({ users }) {
  const contactRows = users.map((user, index) => (
    <ContactRow user={user} key={index} />
  ));
  return (
    <section className="contacts">
      <div className="row">
        <div className="row__image-box">
          <h2 className="row__image-header">Profile Picture</h2>
        </div>

        <div className="row__name-box">
          <h2 className="row__name-header">Name</h2>
        </div>

        <div className="row__email-box">
          <h2 className="row__email-header">Email</h2>
        </div>

        <div className="row__phone-box">
          <h2 className="row__phone-header">Phone Number</h2>
        </div>
      </div>
      {contactRows}
    </section>
  );
}
FullContacts.propTypes = {
  users: PropTypes.array.isRequired,
};
