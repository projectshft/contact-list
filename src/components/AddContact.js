import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


//Manages state
export default function AddContact({addContact}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageURL, setImageURL] = useState('');

  //Generates contact ID and saves new contact
  const handleSaveContact = e => {
    e.preventDefault();

    const generateId = () => Math.round(Math.random() * 100000000);

    addContact({id: generateId(), name, email, phoneNumber, imageURL});

    alert("Contact added");
  };

  //Input form to add new contacts
  return (
  <div className="container col-sm-8">
    <h1>Add New Contact</h1>
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
            value={imageURL} 
            onChange={e => setImageURL(e.target.value)} 
            required/>
        </div>

        <div className="mb-3 col-sm-5">
          <button type="submit" className="btn btn-dark">Save Contact</button>
          &nbsp;&nbsp;&nbsp;
          <Link to="/"><button className='btn btn-dark'>Back</button></Link>
        </div>
      </div>
    </form>
  </div>
  );
};

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
}