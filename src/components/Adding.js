/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import _ from 'lodash';

const Adding = ({ addContact, history }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageURL] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const generateId = () => Math.round(Math.random() * 100000000);
  // const idGen = _.random(100000000, 19999999);

  const handleSubmitAddingContact = () => {
    addContact({
      id,
      name,
      imageUrl,
      phone,
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
            placeholder="Name"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
          />
          <br />

          <label htmlFor="image-url">Image URL</label>
          <input
            type="text"
            id="image-url"
            placeholder="Image URL"
            className="form-control"
            onChange={(event) => setImageURL(event.target.value)}
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />

          <label htmlFor="phone-number">Phone</label>
          <input
            type="text"
            id="phone-number"
            placeholder="Phone number"
            className="form-control"
            onChange={(event) => setPhone(Number(event.target.value))}
          />
          <br />

          <label htmlFor="id">id</label>
          <input
            type="text"
            id="id"
            placeholder="Type here anything"
            className="form-control"
            onChange={() => setId(Number(`${generateId()}`))}
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSubmitAddingContact}
          >
            Submit
          </button>
        </form>

        <Link to="/contacts">
          <button type="button" className="btn btn-default">
            Back to contacts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Adding;
