import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

const NewContact = ({ addContact }) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [imageURLInput, setImageURLInput] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Generates an id for when a new contact is created
  const generateId = () => Math.round(Math.random() * 100000000);

  // Adds new contact to the contacts array with user provided information
  const handleAddContactClick = () => {
    if (!nameInput || !imageURLInput || !emailInput || !phoneNumberInput) {
      alert('All Fields are Required');
      return;
    }
    const newContact = {
      name: nameInput,
      image_url: imageURLInput,
      email: emailInput,
      phone_number: phoneNumberInput,
      id: generateId(),
    };
    addContact(newContact);
    setRedirect(true);
  };

  // Upon successful addition of a new contact, redirects to the main contacts page
  if (redirect) {
    return <Redirect push to="/contacts" />;
  }

  return (
    <div className="row">
      <div className="col-md-6 new-contact-form text-left">
        <h2>Add New Contact</h2>
        <p>
          <Link to="/contacts">Go Back</Link>
        </p>
        <div className="form-group">
          <label htmlFor="name-input">
            Full Name
            <input
              className="form-control"
              id="name-input"
              type="text"
              placeholder="Enter Name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email-input">
            Email Address
            <input
              className="form-control"
              id="email-input"
              type="text"
              placeholder="Enter Email Address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="phone-number-input">
            Phone Number
            <input
              className="form-control"
              id="phone-number-input"
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumberInput}
              onChange={(e) => setPhoneNumberInput(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="image-url-input">
            Image url
            <input
              className="form-control"
              id="image-url-input"
              type="text"
              placeholder="ImageURL"
              value={imageURLInput}
              onChange={(e) => setImageURLInput(e.target.value)}
            />
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddContactClick}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

NewContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default NewContact;
