import PropTypes from 'prop-types';
import React from 'react';

const Contact = ({ name, imageUrl, email, phoneNumber }) => (
  <div>
    <h3>{name}</h3>
    <img src={imageUrl} alt={name} />
    <h2>{email}</h2>
    <h2>{phoneNumber}</h2>
    <hr />
  </div>
);

Contact.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default Contact;
