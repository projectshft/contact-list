import React, { useContext } from "react";
import { ContactContext } from "./App";
import ContactRow from "./ContactRow";
import { useHistory } from "react-router-dom";

export default function ContactList() {
  const { contacts } = useContext(ContactContext);
  const history = useHistory();

  const changeRoute = () => {
    history.push("/contacts/new");
  };

  return (
    <>
      <button onClick={changeRoute} type="button" className="btn btn-primary">
        Add Contact
      </button>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </>
  );
}
