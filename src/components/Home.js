import React from "react";
import ContactRow from "./ContactRow";
import { Link } from "react-router-dom";

const Home = ({ contacts }) => {
  return (
    <div className="flexbox-container w-50">
      <table className="table table-hover">
        {contacts.length === 0 ? null : (
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
        )}
        <tbody>
          {contacts.map((contact, index) => (
            <ContactRow contact={contact} key={index} />
          ))}
        </tbody>
      </table>
      <Link to="/add-contact">
        <button className="btn btn-primary" id="add">
          Add Contact
        </button>
      </Link>
    </div>
  );
};

export default Home;
