
//  functional component below.  Can use React state with this component
import React, { Component, useState } from 'react';
// import this { Link } so we can move back to another page
import { Link } from 'react-router-dom';

const AddContact = (props) => {
  // const [fullName, setFullName] (lines 9 through 12) is the format for State Hook
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const nameEventHandler = (e) => {setFullName(e.target.value)}
  const emailEventHandler = (e) => {setEmailAddress(e.target.value)}
  const phoneEventHandler = (e) => {setPhoneNumber(e.target.value)}
  const imageEventHandler = (e) => {setImageUrl(e.target.value)}
  const submitEventHandler = (e) => {
    //  code below is to generate a unique ID for each contact
    const generateId = () => Math.round(Math.random() * 100000000);
    
    e.preventDefault();
    console.log("submit");
    //  newContact object is created below
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
        <br></br>
        <div>
        <input type="text"  placeholder="Email address" value={emailAddress} onChange={emailEventHandler}/>
        </div>
        <br></br>
        <div>
        <input type="text"  placeholder="Phone Number" value={phoneNumber} onChange={phoneEventHandler} />
        </div>
        <br></br>
        <div>
        <input type="text"  placeholder="Image URL" value={imageUrl} onChange={imageEventHandler}/>
        <hr></hr>
        <input type="submit" onClick={submitEventHandler}></input>
      </div>
      <br></br>
      <Link to="/">Back to contact list</Link>
  </>
  );
}

// export component to App.js
export default AddContact;





// if (fullName === '' || emailAddress === '' || phoneNumber === '' || imageUrl === '') {
    //   return 
    // }