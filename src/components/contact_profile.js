import React from "react";
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const ContactProfileInfo = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(id, 10));

  return (
    <div className="container">
      <div className="card">
        <img src={contact.imageURL} alt="contact profile" />
        <div className="card-body">
          <h4 className="card-title">{contact.fullName}</h4>
          <h5 className="card-text">Email: {contact.emailAddress}</h5>
          <h5 className="card-text">Phone Number: {contact.phoneNumber}</h5>
        </div>
        <div className="card-footer">
          <Link className="btn btn-primary" to="/">Back</Link>
        </div>
      </div>
    </div>
  )
};

ContactProfileInfo.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactProfileInfo;