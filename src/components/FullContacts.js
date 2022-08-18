import React from 'react';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

const FullContacts = ({ contacts }) => {
  const history = useHistory();
  function handleRowClick(index) {
    history.push(`/contacts/${index}`);
  }
  return (
    <div>
      <Link to="/contacts/new">
        <button type="submit" className="btn btn-primary" id="addcontact-btn">
          Add Contact
        </button>
      </Link>
      <table className="table-center table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Profile Pic</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, index) => (
            <tr key={index} onClick={() => handleRowClick(index)}>
              <td className="profile-pic">
                <img src={c.imageUrl} alt="" height="150" width="150" />
              </td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

FullContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default FullContacts;
