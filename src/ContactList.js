import React, { useContext } from "react";
import { ContactContext } from "./App";
import Contact from "./Contact";
import { Link } from "react-router-dom";

export default function ContactList() {
  const contacts = useContext(ContactContext);
  return (
    <>
      <Link to="/new">
        <button type="button" className="btn btn-primary">
          Add Contact
        </button>
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </tbody>
      </table>
    </>
  );
}
