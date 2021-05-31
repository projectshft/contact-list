import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {formatPhoneNumber} from '../util'; 

const ContactForm = (props) => {
  //state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); 
  const [picture, setPicture] = useState(''); 

  const phoneInputHandler = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber); 
  };

  const submitContactHandler = (e) => {
    e.preventDefault(); 

    if(name === '' || email === '' || phone === '' || picture === '') {
      alert('All fields required.');
      return; 
    };

    props.addContact({
      name: name,
      email: email,
      phone_number: phone,
      image_url: picture,
      id: uuidv4()
    });

    props.history.push("/")
  };

  return (
    <div className="col-md-6 offset-3">
      <h1 className="header">Contact List</h1>
      <div className="contact-form">
        <form >
        <div className="form-group">
           <label><strong>Name:</strong></label>
            <input type="text" className="form-control" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="form-group">
           <label><strong>Email address:</strong></label>
            <input type="email" className="form-control" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
           <label><strong>Phone Number:</strong></label>
            <input type="text" className="form-control" placeholder="(000)-000-0000" value={phone} required onChange={(e) => phoneInputHandler(e)}/>
          </div>

          <div className="form-group">
           <label><strong>Image URL:</strong></label>
            <input type="text" className="form-control" placeholder="Image URL" value={picture} required onChange={(e) => setPicture(e.target.value)}/>
          </div>

         <button onClick={submitContactHandler} type="submit" className="btn btn-primary">Submit</button>

        </form>

        <Link to="/" className="btn btn-primary btn" >Home</Link>

      </div>
    </div>
  );
};

export default ContactForm; 