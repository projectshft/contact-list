import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Adding = (props) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageURL] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmitAddingContact = ({ addContact, history }) => {
    setId(generateId());
    addContact({
      id,
      name,
      imageUrl,
      phoneNumber,
      email,
    });

    history.push('/contacts');
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label htmlFor="image-url">Image URL</label>
        <input
          type="text"
          id="image-url"
          className="form-control"
          onChange={(event) => setImageURL(event.target.value)}
        />

        <br />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="form-control"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />

        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="text"
          id="phone-number"
          className="form-control"
          onChange={(event) => setNumber(parseInt(event.target.value, 10))}
        />
        <br />

        <button type="button" onClick={handleSubmitAddingContact}>
          Submit
        </button>
      </form>

      <Link to="/contacts">Back to Contact List</Link>
    </div>
  );
};

Adding.PropTypes = {
  // to define types
};

export default Adding;
