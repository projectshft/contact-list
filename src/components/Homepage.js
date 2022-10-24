import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Contact from "./Contact";

const Homepage = ({ contacts }) => {
  const [redirect, setRedirect] = useState(false);

  const contactList = contacts.map((c) => <Contact contact={c} key={c.id} />);

  const handleAddClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect push to="/contacts/new" />;
  }

  return (
    <div className="row">
      <div className="col-md-10 offset-md-1 text-left">
        <button
          onClick={handleAddClick}
          type="button"
          className="btn btn-primary add-contact-button"
        >
          Add Contact
        </button>
        <table className="table table-bordered table-hover mt-3">
          <tbody>{contactList}</tbody>
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Homepage;
