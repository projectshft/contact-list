import React from "react";
import { Link } from "react-router-dom";

const ContactsList = (props) => {
  return (
    <div>
      <div className='header'>
        <h1 className='contact-title'>Contact List</h1>
        <button className="add-button btn-primary" onClick={() => window.location.href = `http://localhost:3000/new`}>Add Contact</button>
      </div>

      <table className="table table-striped table-bordered" id="contacts-table">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map(p => (
            <tr key={p.id} id={p.id} post={p}>
              <th scope="row">
                <img src={p.img_url} alt="profile pic here" width="200"></img>
              </th>
              <td><Link to={`/${p.id}`}>{p.name}</Link></td>
              <td>{p.email}</td>
              <td>{p.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactsList;