import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactsList from "./ContactsList";
import NewContact from "./NewContact";
import ContactInfo from "./ContactInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  //add state for array of contacts
  const [contacts, setContacts] = useState([]);

  //Add new contact to end of the array of contacts
  function addContact(contact) {
    setContacts(contacts.concat([contact]));
  }

  return (
    <>
      <div>
        <h1>Contact List</h1>
        <Link to="/contacts">
          <button type="button" className="btn btn-primary">
            List
          </button>
        </Link>
        <Link to="contacts/new">
          <button type="button" className="btn btn-primary">
            Add Contact
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<ContactsList contacts={contacts} />} />
        <Route
          path="/contacts"
          element={<ContactsList contacts={contacts} />}
        />
        <Route
          path="/contacts/new"
          element={<NewContact addContact={addContact} />}
        />
        <Route path="/contacts/:profileID" element={<ContactInfo />} />
      </Routes>
    </>
  );
};

export default App;
