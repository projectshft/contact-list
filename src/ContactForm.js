import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm({addContact}) {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState('')
  const [contactName, setContactName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  function handleClick () {
    const contact = {
      imageUrl: imageUrl,
      contactName: contactName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber
     }
   addContact(contact);
   navigate('/');
  } 

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4" >
        <form className="contact-form">
          <br/>
          <h3><center>Add a New Contact</center></h3>
          <br/>
          <div className="form-group">
            <h6>Full Name</h6>
            <input
            className="form-control"
            placeholder="Enter Full Name"
            value={contactName}
            onChange={(e) => {
            setContactName(e.target.value)
            }}
            />

            <br/>
            <h6>E-mail Address</h6>
            <input
            className="form-control"
            placeholder="Enter E-mail"
            value={emailAddress}
            onChange={(e) => {
              setEmailAddress(e.target.value)
            }}
            />

            <br/>
            <h6>Phone Number</h6>
            <input
            className="form-control"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value)
            }}
            /> 
          
            <br/>
            <h6>Image URL</h6>
            <input
            className="form-control"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value)
            }}
            />
            <br/>
          </div> 
          <button onClick={handleClick} type="button" className="btn btn-primary add-contact">Add Contact</button>
        </form>
      </div>
    </div>
  );

}

export default ContactForm;