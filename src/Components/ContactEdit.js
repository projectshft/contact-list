import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactEdit = ({
  contactId,
  contactName,
  contactImageUrl,
  contactEmail,
  contactPhoneNumber,
  contactList,
  setContactList,
}) => {
  const [newName, setNewName] = useState(contactName);
  const [newImageUrl, setNewImageUrl] = useState(contactImageUrl);
  const [newEmail, setNewEmail] = useState(contactEmail);
  const [newPhoneNumber, setNewPhoneNumber] = useState(contactPhoneNumber);

  const updateContacts = (updatedContact) => {
    const oldContact = contactList.find((c) => c.id === updatedContact.id);
    console.log(oldContact);
    console.log(updatedContact);
    const filteredList = contactList.filter((c) => c !== oldContact);
    console.log(filteredList);
    setContactList([...filteredList, updatedContact]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedContact = {
      id: contactId,
      name: newName,
      image_url: newImageUrl,
      email: newEmail,
      phone_number: newPhoneNumber,
    };

    updateContacts(updatedContact);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          id="nameInput"
          value={newName}
          // placeholder={contactName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <br />
        <label htmlFor="imageUrlInput">Image URL</label>
        <input
          type="text"
          id="imageUrlInput"
          value={newImageUrl}
          // placeholder={contactImageUrl}
          onChange={(event) => setNewImageUrl(event.target.value)}
        />
        <br />
        <label htmlFor="emailInput">Email</label>
        <input
          type="text"
          id="emailInput"
          value={newEmail}
          // placeholder={contactEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <br />
        <label htmlFor="phoneNumberInput">Phone Number</label>
        <input
          type="text"
          id="phoneNumberInput"
          value={newPhoneNumber}
          // placeholder={contactPhoneNumber}
          onChange={(event) => setNewPhoneNumber(event.target.value)}
        />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

ContactEdit.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactImageUrl: PropTypes.string,
  contactEmail: PropTypes.string,
  contactPhoneNumber: PropTypes.string,
  contactList: PropTypes.array,
  setContactList: PropTypes.func,
};

export default ContactEdit;
