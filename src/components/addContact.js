
//  functional component below
import React, { Component, useState } from 'react';
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
    if (fullName === '' || emailAddress === '' || phoneNumber === '' || imageUrl === '') {
      return 
    }
    e.preventDefault();
    console.log("submit");
    const newContact = {
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
  </>
  );
}



// class ContactList extends Component {
//   constructor () {
//     super()
//   }



//   render() {
//     return (
//       <><h1>Contact List</h1>
// {/* /* //  Full Name
// //  Email address
// //  Phone Number
// //  Image URL
// //  Add Contact blue button */ }
//       <div>
//       <input type="text" placeholder="Full Name" />
//       </div>
//       <div>
//       <input type="text"  placeholder="Email address" />
//       </div>
//       <div>
//       <input type="text"  placeholder="Phone Number" />
//       </div>
//       <div>
//       <input type="text"  placeholder="Image URL" />
//       <hr></hr>
//       <input type="submit"></input>
//       </div></>
      
      
    

//     )
//   }
// }

export default AddContact;
