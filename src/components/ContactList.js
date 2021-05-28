import React from 'react';
import Contact from './Contact';
import propTypes from 'prop-types';

const ContactList = ({contacts, setContacts, setEditStatus, editStatus}) => {

  ContactList.propTypes = {
    contacts: propTypes.array
  };  
 
  const contactItems = contacts.map((contact) => {
    return (
      <Contact contact={contact} key={contact.id} contacts={contacts} setContacts={setContacts} setEditStatus={setEditStatus} editStatus={editStatus} />
    );
  });

  return (
    <div>
    
      <table className="table table-hover">
        <thead className="table-haeader">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="body">
          {contactItems}
        </tbody>
     </table>

    </div>
  );
};

export default ContactList; 
