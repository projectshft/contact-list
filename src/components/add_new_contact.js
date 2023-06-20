import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useNavigate, Link } from 'react-router-dom';

const AddNewContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [ImageUrl, setImageUrl] = useState('');

  const nav = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
};

const handleNumberChange = (e) => {
  setNumber(e.target.value);
};

const handleImageUrlChange = (e) => {
  setImageUrl(e.target.value);
};

const giveId = () => Math.round(Math.random() * 100000000);

const handleSubmit = (e) => {
  e.preventDefault();
  const newContact = {
    id: giveId(),
    name,
    email,
    phoneNumber,
    ImageUrl,
  };

  addContact(newContact);
  nav('/contactList');
};



return (
  <div className="container">
  <h2>Add Contact</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter Full Name"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        className="form-control"
        id="phone"
        onChange={handleNumberChange}
        value={phoneNumber}
        pattern="[0-9]{10}"
        placeholder="5552223333"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className="form-control"
        id="email"
        onChange={handleEmailChange}
        value={email}
        placeholder="example@email.com"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        className="form-control"
        id="image"
        onChange={handleImageUrlChange}
        value={ImageUrl}
        placeholder="https://URL.jpg"
        required
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Add Contact
    </button>
    <Link to="/contactList" className="btn btn-primary" > Back to Contact List
    </Link>
  </form>
</div>
);
};

 
AddNewContact.propTypes = {
  addContact :PropTypes.func.isRequired,
};

export default AddNewContact;