import React from "react";
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard";


const ContactList = (props) => {
  console.log(props);


  const renderContactList = props.contacts.map((contact) => {
    return (
       <ContactCard 
       contact={contact} 
       />
    );
  });
  
  return (
  <div class= 'main'>
    <Link to='/add'> 
      <button className="ui blue button left">Add Contact</button>
    </Link>
  <div className="ui celled list">{renderContactList}</div>
  </div>
 );
};

export default ContactList;