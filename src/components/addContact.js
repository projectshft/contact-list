
//  functional component below
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

const AddContact = (props) => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const nameEventHandler = (e) => {setFullName(e.target.value)}
  const emailEventHandler = (e) => {setEmailAddress(e.target.value)}
  const phoneEventHandler = (e) => {setPhoneNumber(e.target.value)}
  const imageEventHandler = (e) => {setImageUrl(e.target.value)}
  const submitEventHandler = (e) => {
    const generateId = () => Math.round(Math.random() * 100000000);
    // if (fullName === '' || emailAddress === '' || phoneNumber === '' || imageUrl === '') {
    //   return 
    // }
    e.preventDefault();
    console.log("submit");
    const newContact = {
      id: generateId(),
      fullName : fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      imageUrl: imageUrl
    }
    console.log(newContact);
    const newContactList = [...props.contacts, newContact];
    props.setContacts(newContactList);
    setFullName('');
    setEmailAddress('');
    setPhoneNumber('');
    setImageUrl('');
  }
  
  //  data is taken in from input fields, compiled, and input fields are cleared out.  Now we return data to the Contact List

  return(
  <>
  <h1>Contact List</h1>
      <div>
        <input type="text" placeholder="Full Name" value={fullName} onChange={nameEventHandler}/>
        </div>
        <div>
        <input type="text"  placeholder="Email address" value={emailAddress} onChange={emailEventHandler}/>
        </div>
        <div>
        <input type="text"  placeholder="Phone Number" value={phoneNumber} onChange={phoneEventHandler} />
        </div>
        <div>
        <input type="text"  placeholder="Image URL" value={imageUrl} onChange={imageEventHandler}/>
        <hr></hr>
        <input type="submit" onClick={submitEventHandler}></input>
      </div>
      <Link to="/">Back to contact list</Link>
  </>
  );
}

// export component to App.js
export default AddContact;


const generateId = () => Math.round(Math.random() * 100000000);