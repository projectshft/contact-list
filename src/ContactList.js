import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => (
  <div>
    <ul>
      {contacts.map((c, index) => (
        <div className="container row">
          <li key={index} className="contact-li">
            <img className="contact-image" alt="contact" src={c.img} />
            <div className="row">
              <Link className="contact-link" to={`/contacts/${index}`}>
                {c.name}
              </Link>
            </div>
          </li>
        </div>
      ))}
    </ul>
  </div>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
