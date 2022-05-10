import React from 'react';
import { useHistory, useParams } from 'react-router-dom';



const Contact = ({contacts, deleteContact}) => {
      const phone = useParams();
      const history = useHistory();
      const displayContact = contacts.find((contact) => contact.phone === phone.id);
      const index = contacts.indexOf(displayContact);
    
      return (
      <div>
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
            <tr>
              <td>{displayContact.picUrl}</td>
              <td>{displayContact.name}</td>
              <td>{displayContact.email}</td>
              <td>{displayContact.phone}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={()=>history.push("/contacts")}    >Back to Contacts</button>
        <button className="btn btn-primary" onClick={()=> {
              deleteContact(index);
              history.push("/contacts")
             }}>Delete This</button>
      </div>
      );
}

export default Contact;