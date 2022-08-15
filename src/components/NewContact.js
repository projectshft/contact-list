import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PropTypes from "prop-types";

const NewContact = ({ contacts, addContact, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmitClick = () => {
    addContact({
      id: generateId(),
      name: name,
      image_url: imageURL,
      email: email,
      phone_number: phoneNumber,
    });

    history.push("/contacts");
  };

  return (
    <div className="row" id="newcontact-info">
      <div className="col-md-4 center">
        <form>
          <div className="form-group">
            <label htmlFor="contact-fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-phoneNumber">Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image-url">Image URL</label>
            <input
              type="url"
              className="form-control"
              placeholder="Image URL"
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>

          <Link to="/contacts">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmitClick}
            >
              Add Contact
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

NewContact.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
};

export default NewContact;
