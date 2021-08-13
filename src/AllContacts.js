import React from 'react';
import {Link} from 'react-router-dom';

const AllContacts = ({contacts}) => {
  return (
    <div>
      <div className="row">      
        <div className="col-md-6 offset-md-3">
          <h1>Contact List</h1>
          <button className="add-btn btn btn-primary"><Link to={'/add-contact'} className="link">Create Contact</Link></button>
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
                    <th scope="row"><img src={contact.imgUrl}></img></th>
                    <td>{contact.name}</td>
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
