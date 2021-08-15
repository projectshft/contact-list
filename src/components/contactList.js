
//  functional component below
import React, { Component, useState } from 'react';
const ContactList = (props) => {
  
  

  return(
  <>
    
    { 
      props.contacts.length === 0
      ? <p>No Contacts</p> : <p>Contacts List</p>
    }
    <ol>
      {
        props.contacts.map((contact) => {
          return (<li key={contact.phoneNumber}><p>Name: {contact.fullName}</p> <p>E-mail address: {contact.emailAddress}</p> <p>Phone number: {contact.phoneNumber}</p> <img src={contact.imageUrl}/></li>
        )})
      }
    </ol>
  </>
  );
}


export default ContactList;
