import React from 'react';
import {Link} from 'react-router-dom';

const AllContacts = ({contacts}) => {
  return (
    <div>
      <div className="row">      
        <div className="col-md-6 offset-md-3">
          <h1>Contact List</h1>
          <Link to={'/add-contact'} className="button btn btn-primary">Create Contact</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Profile Pic</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
              </tr>
            </thead>
            
            <tbody>
              {contacts.map((contact) => {
                return (
                  <tr key={contact.id.toString()}>
                    <th scope="row"><img src={contact.imgUrl} alt="Image not found"></img></th>
                    <td><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllContacts;
