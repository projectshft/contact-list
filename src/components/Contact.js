import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import './Contact.css';

const Contact = ({ id, fName, lName, imageUrl, email, phoneNumber }) => {
  const fullName = `${fName} ${lName}`;
  return (
    <tr>
      <Link to={`/contacts/${id}`}>
        <td className="table-pic">
          <img src={imageUrl} alt={fullName} />
        </td>
      </Link>

      <td>
        <Link to={`/contacts/${id}`}>
          <td>{lName}</td>
        </Link>
      </td>
      <td>{fName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
    </tr>
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
