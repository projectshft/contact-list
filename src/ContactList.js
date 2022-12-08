import { Link } from 'react-router-dom';
import React from 'react';

const ContactList = ({contacts}) => (
  
  <div>
    <h1>Contact List</h1>
    <table className="table table-striped table-hover">
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
        <tr  key={contact.number}>
          <td><img src={contact.profilePic} alt={contact.name + "'s profile pitcure"} /></td>
          {/* <td>{contact.name}</td> */}
          <td><Link to={`/contacts/${contact.number}`}>{contact.name}</Link></td>
          <td>{contact.email}</td>
          <td>{contact.phoneNumber}</td>
        </tr>
        )
      )

      }

    </tbody>
    </table>
    <Link to="/new"><button type="button" className="btn btn-primary">Add Contact</button></Link>

  </div>
  );
  


export default ContactList