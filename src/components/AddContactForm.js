import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from 'react-router-dom';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const getName = (e) => {
    setName(e.target.value);
  };

  const getPhone = (e) => {
    setPhone(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const pressSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h2>Add Contact</h2>
      <form onSubmit={pressSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={getName}
          />
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
