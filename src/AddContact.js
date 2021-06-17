import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContactsStateData } from "./ContactsStateData.js"
import PropTypes from "prop-types";

export default function AddContact(props) {
  // use "useState" from Hooks section of Parsity
  // PLUS
  // https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np
  // and maybe even this:
  // https://reactjs.org/docs/hooks-reference.html#functional-updates

  // what goes in useState()?
  const [name, setName] = useState([]);
  const [image_url, setImageUrl] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone_number, setPhoneNumber] = useState([]);
  const [id, setId] = useState([]);

  const new_id = Math.round(Math.random() * 100000000);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleImageUrlChange(e) {
    setImageUrl(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleClick(e) {
    setId(new_id);
    console.log()
  }
  // Hello.propTypes = {
  //   // `name` must be a string, and it can't be `null` or `undefined`!
  //   name: PropTypes.string.isRequired,
  // };

  return (
    <div className="AddContact">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="post-form">
            <h3>Add a New Post</h3>

            <div className="form-group">
              Full Name
              <input
                type="text"
                className="form-control full-name"
                value={name}
                onChange={handleNameChange}
              />
              <br />
              Email Address
              <input
                type="text"
                className="form-control email-address"
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              Phone Number
              <input
                type="text"
                className="form-control phone-number"
                value={phone_number}
                onChange={handlePhoneNumberChange}
              />
              <br />
              Image URL
              <input
                type="text"
                className="form-control image-url"
                value={image_url}
                onChange={handleImageUrlChange}
              />
              <br />
            </div>

            <Link to="/">
              <button
                onClick={handleClick}
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
