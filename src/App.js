import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactsList from "./ContactsList";
import NewContact from "./NewContact";
import ContactInfo from "./ContactInfo";

const App = () => {
  //add state for array of contacts
  const [contacts, setContacts] = useState([]);

  //Add new contact to end of the array of contacts
  function addContact(contact) {
    setContacts(contacts.concat([contact]));
  }

  return (
    <>
      <nav>
        <h1>Carlys Contact List App</h1>
        <ul>
          <button>
            <Link to="/contacts">List</Link>
          </button>
          <button>
            <Link to="contacts/new">Add Contact</Link>
          </button>
        </ul>
      </nav>

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
