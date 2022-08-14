import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

const FullContacts = ({ contacts }) => (
  <div>
    <Link to="/contacts/new">
      <button type="submit" className="btn btn-primary" id="addcontact-btn">
        Add Contact
      </button>
    </Link>
    <table className="table-center table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c, index) => (
          <tr key={index}>
            {/* <Link to={`/contacts/${index}`}></Link> */}
            <td className="profile-pic">
              <img
                src={c.image_url}
                // scr="https://en.wikipedia.org/wiki/Chow_Chow#/media/File:ChowChow2Szczecin.jpg"
                alt=""
                height="150"
                width="150"
              />
            </td>

            <td>
              <Link to={`/contacts/${index}`}>{c.name}</Link>
            </td>

            <td>{c.email}</td>

            <td>{c.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


export default FullContacts;
