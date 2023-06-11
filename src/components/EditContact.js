import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

const EditContact = ({ match, contacts, editContact }) => {
  const { id } = match.params;
  const [contact] = contacts.filter((c) => c.id === parseInt(id));

  const [nameInput, setNameInput] = useState(contact.name);
  const [emailInput, setEmailInput] = useState(contact.email);
  const [phoneNumberInput, setPhoneNumberInput] = useState(
    contact.phone_number
  );
  const [imageURLInput, setImageURLInput] = useState(contact.image_url);
  const [redirect, setRedirect] = useState(false);

  const handleEditContactClick = () => {
    if (!nameInput || !imageURLInput || !emailInput || !phoneNumberInput) {
      alert('No field can be left blank');
      return;
    }
    const updatedContactInfo = {
      name: nameInput,
      image_url: imageURLInput,
      email: emailInput,
      phone_number: phoneNumberInput,
      id: parseInt(id),
    };
    editContact(updatedContactInfo);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect push to="/contacts" />;
  }

  return (
    <div className="row">
      <div className="col-md-6 new-contact-form text-left">
        <h2>Edit Contact</h2>
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
          onClick={handleEditContactClick}
        >
          Edit Contact
        </button>
      </div>
    </div>
  );
};

EditContact.propTypes = {
  match: PropTypes.object,
  contacts: PropTypes.array,
  editContact: PropTypes.func,
};

export default EditContact;