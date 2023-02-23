import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [imageUrl, setImage] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: generateId(),
      name,
      phoneNumber,
      email,
      imageUrl,
    };
    addContact(newContact);
    navigate('/contacts');
  };

  return (
    <div className="container">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
            pattern="[0-9]{10}"
            placeholder="2223334444"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@email.org"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={imageUrl}
            onChange={handleChangeImage}
            placeholder="https://URL.jpg"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/contacts" className="btn btn-primary">
          Go back to Contacts
        </Link>
      </form>
    </div>
  );
};

AddContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default AddContactForm;
