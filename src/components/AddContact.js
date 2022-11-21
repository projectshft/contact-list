import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AddContact({addContact}) {
  // manage new contact's state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrl, setImageURL] = useState('');

  const navigate = useNavigate();
  
  // function that calls the addContact function on form submit, and generates a random Id for the new contact
  const handleSaveContact = e => {
    e.preventDefault();

    const generateId = () => Math.round(Math.random() * 100000000);

    addContact({id: generateId(), name, email, phoneNumber, imageUrl});

    alert("Contact saved successfully!");
    
    navigate("/");
  };

  // Add New Contact form
  return (
  <>
    <h1>Add New Contact</h1>
    <div className="container col-sm-8" id="back-button">
      <Link to="/">Back</Link>
    </div>
    <br></br>
    <form onSubmit={handleSaveContact}>
      <div className="container">
        <div className="form-group mb-3 col-sm-5">
          <label htmlFor="nameInput" className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="nameInput" 
            placeholder="Enter Full Name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required/>
        </div>

        <div className="form-group mb-3 col-sm-5">
          <label htmlFor="emailInput" className="form-label">Email Address</label>
          <input 
            type="email" 
            className="form-control" 
            id="emailInput" 
            placeholder="Enter Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required/>
        </div>

        <div className="form-group mb-3 col-sm-5">
          <label htmlFor="phoneInput" className="form-label">Phone Number</label>
          <input 
            type="text" 
            className="form-control" 
            id="phoneInput" 
            placeholder="Enter Phone Number" 
            value={phoneNumber} 
            onChange={e => setPhoneNumber(e.target.value)} 
            required/>
        </div>

        <div className="form-group mb-3 col-sm-5">
          <label htmlFor="imageInput" className="form-label">Image URL</label>
          <input 
            type="text" 
            className="form-control" 
            id="imageInput" 
            placeholder="Enter Image URL" 
            value={imageUrl} 
            onChange={e => setImageURL(e.target.value)} 
            required/>
        </div>

        <div className="mb-3 col-sm-5">
          <button type="submit" className="btn btn-primary">Save Contact</button>
        </div>
      </div>
    </form>
  </>
  );
};

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
}