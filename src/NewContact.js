import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const generateId = () => Math.round(Math.random() * 100000000);

const NewContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const history = useHistory();

  const handleAddContactClick = (event) => {
    addContact({
      id: generateId(),
      name,
      email,
      phoneNumber,
      imageUrl,
    });

    event.preventDefault();
    history.push('/');
  };

  return (
    <div className="container">
      <h1>Add New Contact</h1>
      <hr />
      <form onSubmit={handleAddContactClick}>
        <div className="mb-3">
          <label htmlFor="name">Full Name</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            required
            type="number"
            className="form-control"
            placeholder="Enter your phone number"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Profile Pic Url</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter a url for your profile pic"
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>
        <div>
          <Link to="/">
            <button type="button" className="btn btn-primary back">
              Back
            </button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

NewContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default NewContact;
