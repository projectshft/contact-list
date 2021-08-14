
//  functional component below
import React, { Component, useState } from 'react';
const ContactList = (props) => {
  
  

  return(
  <>
    contactList
    { 
      props.contacts.length === 0
      && "no contacts"
    }
    <ol>
      {
        props.contacts.map((contact) => {
          return (<li>{contact.fullName}</li>)
        })
      }
    </ol>
  </>
  );
}


export default ContactList;
