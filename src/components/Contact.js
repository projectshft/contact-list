import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import './Contact.css';

const Contact = ({ id, fName, lName, imageUrl, email, phoneNumber }) => {
  const fullName = `${fName} ${lName}`;
  return (
    <div className="contact">
      <Link to={`/contacts/${id}`}>
        <h3>{lName}</h3>
        <h3>{fName}</h3>
      </Link>
      <img src={imageUrl} alt={fullName} />
      <h2>{email}</h2>
      <h2>{phoneNumber}</h2>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.number,
  fName: PropTypes.string,
  lName: PropTypes.string,
  imageUrl: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default Contact;
