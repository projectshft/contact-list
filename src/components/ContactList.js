import React from 'react';
import Contact from './Contact';

const ContactList = ({contacts}) => {
 
  const contactItems = contacts.map((contact) => {
    return (
      <Contact contact={contact} key={contact.id} contacts={contacts} />
    );
  });

  return (
    <div className="col-md-10 offset-1">
    
      <table className="table">
        <thead className="table-haeader">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contactItems}
        </tbody>
     </table>

    </div>
  );
};

export default ContactList; 
