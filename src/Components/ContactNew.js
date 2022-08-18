import React, { useState } from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const ContactNew = ({ setContactList }) => {
  // setting up state for the different properties on the contact object
  // do I need to use state for the unique id?
  const [contactName, setContactName] = useState('');
  const [contactImageUrl, setContactImageUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhoneNumber, setContactPhoneNumber] = useState('');

  const updateContacts = (newContact) => {
    setContactList((oldList) => [...oldList, newContact]);
  };

  const resetFields = () => {
    setContactName('');
    setContactImageUrl('');
    setContactEmail('');
    setContactPhoneNumber('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: uniqid(),
      name: contactName,
      image_url: contactImageUrl,
      email: contactEmail,
      phone_number: contactPhoneNumber,
    };

    updateContacts(newContact);
    resetFields();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          id="nameInput"
          value={contactName}
          onChange={(event) => setContactName(event.target.value)}
        />
        <br />
        <label htmlFor="imageUrlInput">Image URL</label>
        <input
          type="text"
          id="imageUrlInput"
          value={contactImageUrl}
          onChange={(event) => setContactImageUrl(event.target.value)}
        />
        <br />
        <label htmlFor="emailInput">Email</label>
        <input
          type="text"
          id="emailInput"
          value={contactEmail}
          onChange={(event) => setContactEmail(event.target.value)}
        />
        <br />
        <label htmlFor="phoneNumberInput">Phone Number</label>
        <input
          type="text"
          id="phoneNumberInput"
          value={contactPhoneNumber}
          onChange={(event) => setContactPhoneNumber(event.target.value)}
        />
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

ContactNew.propTypes = {
  setContactList: PropTypes.func,
};

export default ContactNew;
