import React, { useState} from "react";
import { useNavigate, Link } from "react-router-dom";

const AddNewContact = ({ addNew }) => {
  const nav = useNavigate();

  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageURL, setImageURL] = useState('');

  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmit = () => {
    const newContact = {
      id: generateId(),
      fullName,
      emailAddress,
      phoneNumber,
      imageURL
    };

    addNew(newContact);
    nav('/');
  };

  return (
    <div className="container">
      <h2 className="text-center">Contact List</h2>
      <div className="row col-md-6 offset-md-3">
        <div>Full Name</div>
        <input className="form-control" 
          type="text" 
          id="fullName" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          placeholder="Enter Full Name" 
          required 
        />
        <div>Email Address</div>
        <input className="form-control" 
          type="text" 
          id="emailAddress" 
          value={emailAddress} 
          onChange={(e) => setEmailAddress(e.target.value)} 
          placeholder="Enter Email Address" 
          required 
        />
        <div>Phone Number</div>
        <input className="form-control" 
          type="text" 
          id="phoneNumber" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          placeholder="Enter Phone Number" 
          required 
        />
        <div>Image URL</div>
        <input className="form-control" 
          type="text" 
          id="imageURL" 
          value={imageURL} 
          onChange={(e) => setImageURL(e.target.value)} 
          placeholder="Enter Email" 
          required 
        />
      </div>
      <button className="btn btn-primary offset-md-3" onClick={handleSubmit} to="/contact_list">
        Add Contact
      </button>
      <Link className="btn btn-primary offset-md-4" to="/">Back to Contact List</Link>
    </div>
  )
};

export default AddNewContact;