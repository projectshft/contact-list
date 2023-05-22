import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NewContact = ({onSubmit}) => {
  const navigate = useNavigate();

  //creating individual states for each user input
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  //id generator to give unique id for each contact created
  const generateId = () => Math.round(Math.random() * 1000000000);

  //creating contact object that will be added to the contacts state in index.js. Clicking will also result in navigating back to ContactsList
  const handleSubmit = () => {
    const contact = {
      id: generateId(),
      fullName,
      email,
      phoneNumber,
      imageUrl
    };

    onSubmit(contact);
    navigate('/');
  }

  return (
    <div>
    <h1 className='text-center'>Add Contact</h1>
    <div className='row offset-md-3 col-md-6'>
      <div>Full Name</div>
      <input className='form-control' onChange={(e) => setFullName(e.target.value)}></input>
      <div>Email Address</div>
      <input className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
      <div>Phone Number</div>
      <input className='form-control' onChange={(e) => setPhoneNumber(e.target.value)}></input>
      <div>Image URL</div>
      <input className='form-control' onChange={(e) => setImageUrl(e.target.value)}></input>
      <hr />
    </div>
    
    <button to='/contacts' className='btn btn-primary offset-md-3' onClick={handleSubmit}>Add Contact</button>
    <Link to='/' className='btn btn-primary offset-md-4'>Back</Link>
  </div>
  )
};

export default NewContact;