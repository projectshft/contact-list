import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmitContactClick = () => {
    const newContactId = generateId();
    props.addContact({
      id: newContactId,
      name,
      email,
      phone,
      pictureUrl,
    });

    props.history.push('/contacts');
  };

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <br />

          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />

          <label htmlFor="picture-url">Profile picture URL</label>
          <input
            type="text"
            className="form-control"
            id="picture-url"
            onChange={(e) => setPictureUrl(e.target.value)}
          />
          <br />

          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmitContactClick}
          >
            Submit
          </button>
        </form>
      </div>
      <br />
      <div align="center">
        <Link to="/contacts">Back to Your Contacts</Link>
      </div>
    </div>
  );
};

NewContact.propTypes = {
  addContact: PropTypes.func,
  history: PropTypes.any,
};

export default NewContact;
