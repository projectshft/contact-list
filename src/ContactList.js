import React from 'react';

import { useHistory } from 'react-router-dom';


const ContactList = ({contacts}) => {

  const history = useHistory();

  return (
  <div>
    
      <button type="submit" className="btn btn-primary" onClick={()=> history.push("/contacts/new")}>Add Contact</button>
    
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Profile Pic</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
    <tbody>
      { contacts.map((contact) => (
          <tr key={contact.phone} onClick={()=> {
            history.push(`/contacts/${contact.phone}`);
          }}>
            <td>{contact.picUrl}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        )
      )
        
      }
      
    </tbody>
    </table>
  </div>
  );
  
};

 export default ContactList;
 
