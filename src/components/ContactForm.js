import React, { useState } from 'react';

const ContactForm = () => {
  const [newContact, setNewContact] = useState({
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    imageUrl: '',
  });

  const inputHandler = (e) => {
    setNewContact({ [e.target.name]: e.target.value });
    // console.log(setNewContact);
  };

  const submitButton = (e) => {
    e.preventDefault();
    setNewContact(newContact);
    console.log(e);
  };
  return (
    <form action="submit">
      <div>
        <input
          type="text"
          name="name"
          onChange={inputHandler}
          placeholder="Name"
          value={newContact.name}
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={inputHandler}
          placeholder="Email"
          value={newContact.email}
        />
        <br />
        <input
          type="tel"
          name="phoneNumber"
          onChange={inputHandler}
          placeholder="Phone Number"
          value={newContact.phoneNumber}
        />
        <br />
        <input
          type="text"
          name="imageUrl"
          onChange={inputHandler}
          placeholder="Submit an image (optional)"
          value={newContact.imageUrl}
        />
        <br />
        <button type="submit">Submit Now</button>
      </div>
    </form>
  );
};

export default ContactForm;
