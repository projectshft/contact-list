import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handleImageChange(e) {
    setImage(e.target.value);
  }
  function handleAddContact() {
    const generateId = () => Math.round(Math.random() * 100000000);
    const newContact = {
      id: generateId(),
      name,
      email,
      phone,
      image,
    };

    // setName('');
    // setEmail('');
    // setPhone('');
    // setImage('');
    addContact(newContact);
    navigate('/Index');
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/AddContact"
                >
                  Add Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Index">
                  Index
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="page-header">
            <h1>Add Contact</h1>
            <hr />
          </div>
          <label htmlFor="Full Name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First and Last Name"
            value={name}
            onChange={handleNameChange}
          />
          <br />
        </div>
        <div className="col-md-6 offset-3">
          <label htmlFor="Email Address" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
        </div>
        <div className="col-md-6 offset-3">
          <label htmlFor="Phone Number" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <br />
        </div>
        <div className="col-md-6 offset-3">
          <label htmlFor="Image Url" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={image}
            onChange={handleImageChange}
          />
          <br />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-dark addcontact2-btn"
        onClick={handleAddContact}
      >
        Add Contact
      </button>
    </div>
  );
};
AddContactForm.propTypes = {
  addContact: PropTypes.func,
};
export default AddContactForm;
