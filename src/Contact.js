import React from 'react';

const Contact = ({contact, index}) => {
 
  return (
    <tr>
      <span><img width="96" height="96" src={contact.imageUrl} />  {contact.contactName} | {contact.emailAddress} | {contact.phoneNumber} </span>
      <br></br>
      
      <hr></hr>
    </tr>
  )
}

export default Contact
