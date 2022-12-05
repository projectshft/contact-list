import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactList = ({contacts}) => (
  <div>
    <h1>ContactList</h1>
    <Link to='/new'>
    <button type="button" className="btn btn-primary">Add Contact</button></Link>
    <hr></hr>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Number</th>
        </tr>
      </thead>
      <tbody>
          {
            contacts.map(c => (
              <tr key={c.number}>
              <td><img src={c.profilePic} alt={c.name + "'s profile pitcure"} /></td>
              <td><Link to={`/${c.number}`}>{c.name}</Link></td>
              <td>{c.email}</td>
              <td>{c.number}</td>
              </tr>
            ))
          }
      </tbody>
    </table>
  </div>
)

export default ContactList
