import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {formatPhoneNumber} from '../util'; 

const EditContactForm = (props) => {
  const contacts = props.contacts; 
  const selectedId = props.selectedContactId;

  //contact selected for editing
  const editContact = contacts.find(c => c.id === selectedId);

  //state
  //pre-filled with the contact that is being edited
  const [name, setName] = useState(editContact.name);
  const [email, setEmail] = useState(editContact.email);
  const [phone, setPhone] = useState(editContact.phone_number); 
  const [picture, setPicture] = useState(editContact.image_url); 

  const phoneInputHandler = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber); 
  };

  const submitChangesHandler = (e) => {
    if(name === '' || email === '' || phone === '' || picture === '') {
      alert('All fields required.');
      return; 
    };

    const index = contacts.findIndex(c => c === editContact);

    props.editContact(index, {
      name: name,
      email: email,
      phone_number: phone,
      image_url: picture,
      id: editContact.id
    }); 

    props.history.push('/');
    e.preventDefault(); 
  };

  return (
    <div className="col-md-6 offset-3">
      <h1 className="header">Contact List</h1>
      <div className="contact-form">
        <form>
        <div className="form-group">
           <label><strong>Name:</strong></label>
            <input type="text" className="form-control" value={name} required onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="form-group">
           <label><strong>Email address:</strong></label>
            <input type="email" className="form-control" value={email} required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
           <label><strong>Phone Number:</strong></label>
            <input type="text" className="form-control" value={phone} required onChange={(e) => phoneInputHandler(e)}/>
          </div>

          <div className="form-group">
           <label><strong>Image URL:</strong></label>
            <input type="text" className="form-control" value={picture} required onChange={(e) => setPicture(e.target.value)}/>
          </div>

          <Link to="/"><button onClick={submitChangesHandler} type="submit" className="btn btn-primary">Submit Changes</button></Link>

        </form>

        <Link to="/"><button type="button" className="btn btn-primary">Home</button></Link>

      </div>
    </div>
  );
};

export default EditContactForm; 