import React from 'react';
import Contact from './Contact';

const ContactList = ({contacts}) => {
 
  const contactItem = contacts.map((contact) => {
    return (
      <Contact contact={contact} key={contact.id} contacts={contacts} id={contact.id}/>
    );
  });
  
  return (
    <div>
     <table className="table">
     <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
    </tr>
      {contactItem}
     </table>
    </div>
  );
};

export default ContactList; 
