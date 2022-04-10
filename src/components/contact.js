import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const ContactTile = ({ id, contacts }) => {
  const contact = contacts.find((c) => c.id.toString() === id);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <div className="main-display">
            <h1>Contact</h1>
            <br />
            <img className="image-tile" src={contact.img} alt={contact.name} />
            <h2>{contact.name}</h2>
            <h3>{contact.email}</h3>
            <h3>{contact.phone}</h3>
            <br />
            <Link to="/contactList" className="btn btn-primary">
              Return to Contacts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactTile.propTypes = {
  id: PropTypes.string,
  contacts: PropTypes.object,
};

export default ContactTile;
