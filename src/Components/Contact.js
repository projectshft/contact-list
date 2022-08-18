import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, email, phoneNumber, imageUrl }) => (
  // find specific contact object matching the id passed in through props
  // const contact = contactList.find((c) => c.id === contactId);
  <div>
    <h1>{name}</h1>
    <img src={imageUrl} alt="Contact" />
    <h3>{email}</h3>
    <h3>{phoneNumber}</h3>
  </div>
);

// can maybe use proptypes here to set up a default image?

Contact.propTypes = {
  // contactList: PropTypes.array,
  // contactId: PropTypes.number,
  // contact: PropTypes.object,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  imageUrl: PropTypes.string,
};

Contact.defaultProps = {
  imageUrl:
    'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
};

export default Contact;
