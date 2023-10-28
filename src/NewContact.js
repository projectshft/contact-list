import { Link } from 'react-router-dom';
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const NewContact = ({ contacts, addContact }) => {
  const destructuredProps = { contacts, addContact };
  const contactsArr = destructuredProps.contacts;

  const generatedIndex = Math.round(Math.random() * 100);

  const index = generatedIndex;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imgURL, setPic] = useState('');

  const handleAddContactClick = () => {
    const newContact = {
      index,
      name,
      email,
      phone,
      imgURL: <img src={imgURL} alt="Invalid Link" width="250" height="250" />,
    };
    contactsArr.push(newContact);
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <form>
        <label>
          Full Name
          <input
            id="full-name"
            type="text"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email Address
          <input
            id="email"
            type="text"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Phone Number
          <input
            type="text"
            className="form-control"
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <label>
          Image URL
          <input
            type="text"
            className="form-control"
            onChange={(event) => setPic(event.target.value)}
          />
        </label>
        <Link to="/">
          <button type="button" onClick={handleAddContactClick}>
            Add Contact
          </button>
        </Link>
        <div>
          <Link to="/" contacts={contactsArr}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewContact;
