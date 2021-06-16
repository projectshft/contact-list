import React from "react";
import { Link } from "react-router-dom";
import { ContactsStateData } from "./ContactsStateData.js"

// ////
// import PropTypes from "prop-types";

// Hello.propTypes = {
//   // `name` must be a string, and it can't be `null` or `undefined`!
//   name: PropTypes.string.isRequired,
// };

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   //we simply state that this component should expect an array of objects to be passed as props
//   apiData: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
// ////

export default function AddContact() {
  // could write getter and setter and export them from ContactsStateData
  
  return (
    <div className="AddContact">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="post-form">
            <h3>Add a New Post</h3>

            <div className="form-group">
              Full Name
              <input type="text" className="form-control full-name" value="" />
              <br />
              Email Address
              <input
                type="text"
                className="form-control email-address"
                value=""
              />
              <br />
              Phone Number
              <input
                type="text"
                className="form-control phone-number"
                value=""
              />
              <br />
              Image URL
              <input type="text" className="form-control image-url" value="" />
              <br />
            </div>

            <Link to="/">
              <button
                type="button"
                className="btn btn-primary add-contact-and-return"
              >
                Add Contact
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
