/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import urlPropType from 'url-prop-type';

const Adding = ({ addContact, history }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageURL] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmitAddingContact = () => {
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
    <div className="row justify-content-md-center">
      <div className="col-5">
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
            onChange={(event) => setNumber(Number(event.target.value))}
          />
          <br />

          <button type="button" onClick={handleSubmitAddingContact}>
            Submit
          </button>
        </form>

        <Link to="/contacts">Back to Contact List</Link>
      </div>
    </div>
  );
};

/* // Adding.propTypes = {
//   name: PropTypes.string.isRequired,
//   imageUrl: PropTypes.bigint.isRequired,
// }; */

export default Adding;
