import React from 'react';
import Contact from './Contact';
import propTypes from 'prop-types';

const ContactList = ({contacts, setContacts}) => {

  ContactList.propTypes = {
    contacts: propTypes.array,
    setContacts: propTypes.func
  };  

  return (
    <div>
      <table className="table table-hover">
        <thead className="table-header">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {contacts.map((contact) => {
            return (
              <Contact contact={contact} key={contact.id} contacts={contacts} setContacts={setContacts} />
            );
          })}
        </tbody>
     </table>
    </div>
  );
};

export default ContactList; 