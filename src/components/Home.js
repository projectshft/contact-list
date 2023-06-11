import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Contact from './Contact';

const Home = ({ contacts, deleteContact }) => {
  const [redirect, setRedirect] = useState(false);

  const contactList = contacts.map((c) => (
    <Contact contact={c} deleteContact={deleteContact} key={c.id} />
  ));

  const handleAddContactClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect push to="/contacts/new" />;
  }

  return (
    <div className="row">
      <div className="col-md-10 offset-md-1 text-left">
        <button
          onClick={handleAddContactClick}
          type="button"
          className="btn btn-primary add-contact-button"
        >
          Add New Contact
        </button>
        <table className="table table-hover table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Options:</th>
            </tr>
          </thead>
          <tbody>{contactList}</tbody>
        </table>
      </div>
    </div>
  );
};

Home.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};

export default Home;