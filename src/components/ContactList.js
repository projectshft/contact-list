import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ContactRow from './ContactRow';

const ContactList = (props) => {
  const { contacts } = props;

  // returns individual contact rows for each contact
  const contactItems = contacts.map((contact, index) => (
    <ContactRow key={index} contact={contact} />
  ));

  return (
    <div>
      <Link to="/new">
        <button type="button" className="btn btn-primary">
          Add Contact
        </button>
      </Link>
      <br />
      <br />
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>{contactItems}</tbody>
      </table>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
