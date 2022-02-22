import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactsList = (props) => {
  const { contacts } = props;

  const contactsListDisplay = contacts.map((contact) => (
    <div key={contact.id} className="contact-list-item">
      <Link to={`/contacts/${contact.id}`}>
        <img src={`${contact.image_url}`} alt="_test_" />
      </Link>
      <h2>{contact.name}</h2>
    </div>
  ));

  return (
    <div className="contact-list">
      <h2 className="heading">All Contacts</h2>
      <hr />
      {contactsListDisplay}
      <Link to="/contacts/new">
        <button type="button" className="btn btn-primary">
          Add a New Contact
        </button>
      </Link>
      <br />
      <Link to="/">
        <button className="btn btn-primary back-button" type="button">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactsList;
