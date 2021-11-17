/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  const handleDeleteClick = (e) => {
    const id = e.target.value;
    props.deleteContact(id);
    props.history.push('/contacts');
  };

  return (
    <div>
      <ul>
        {props.contacts.map((c) => (
          <div className="container row">
            <li key={c.userId} className="contact-li">
              <button
                type="button"
                className="btn"
                value={c.userId}
                onClick={(e) => handleDeleteClick(e)}
              >
                delete
              </button>
              <img className="contact-image" alt="contact" src={c.img} />
              <div className="row">
                <Link className="contact-link" to={`/contacts/${c.userId}`}>
                  {c.name}
                </Link>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};
