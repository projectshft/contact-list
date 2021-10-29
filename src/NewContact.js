import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewContact = ({ addContact, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  const generateId = () => Math.round(Math.random() * 100000000);

  // regex objects to validate phone number and email address inputs
  const rePhone = new RegExp(/\b\d{10}\b/);
  const reEmail = new RegExp(/.{1,}@.{1,}\..{1,}/);

  const handleSubmitContactClick = () => {
    if (!name || !email || !phone || !pictureUrl) {
      alert('Please fill out all fields before creating a new contact');
    } else if (!email.match(reEmail)) {
      alert(
        'Please enter an email address in the correct format, for example: yourname@email.com'
      );
    } else if (!phone.match(rePhone)) {
      alert('Please enter a 10-digit phone number, for example: 1234567890');
    } else {
      const newContactId = generateId();
      addContact({
        id: newContactId,
        name,
        email,
        phone,
        pictureUrl,
      });

      history.push('/contacts');
    }
  };

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
        <h1>Create New Contact</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
          />

          <br />

          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter 10-digit phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />

          <label htmlFor="picture-url">Profile picture URL</label>
          <input
            type="text"
            className="form-control"
            id="picture-url"
            placeholder="Enter URL for profile picture"
            onChange={(e) => setPictureUrl(e.target.value)}
          />
          <br />

          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={handleSubmitContactClick}
          >
            Submit
          </button>
        </form>
      </div>
      <br />
      <div align="center">
        <Link to="/contacts">
          <button type="button" className="btn btn-outline-primary btn-sm">
            Back to Your Contacts
          </button>
        </Link>
      </div>
    </div>
  );
};

NewContact.propTypes = {
  history: PropTypes.any,
  addContact: PropTypes.func,
};

export default NewContact;
