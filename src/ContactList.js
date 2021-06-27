import React from "react";
import { Link } from "react-router-dom";
import ButtonAddContact from "./ButtonAddContact.js"

export default function ContactList({contacts, addContact}) {
  // a function with addContact passed in to be further passed into ButtonAddContact and ultimately AddContact.js
  // contacts in App.js will be presented in a table on this "index" sort of page
  return (
    <div className="ContactList">
      
      <ButtonAddContact contacts={contacts} addContact={addContact}/>
    
      <div className="ContactTable">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Profile Pic</th>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Phone Number</th>  
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(c => {
                    return (
                      <tr key={c.id}>
                        <td>
                          <Link to={`/contacts/${c.name}`}>{c.name}</Link>
                        </td>
                        <td>
                          <img src={c.image_url} alt="{c.name} headshot"/>
                        </td>
                        <td>{c.email}</td>
                        <td>{c.phone_number}</td>
                        <td>{c.id}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

