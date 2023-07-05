import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactsList from "./ContactsList";
import NewContact from "./NewContact";

const App = () => {
  //add state for array of contacts
  const [contacts, setContacts] = useState([]);

  function addContact(contact) {
    setContacts(contacts.push(contact));
  }

  return (
    <>
      <nav>
        <h1>Carlys Contact List App</h1>
        <ul>
          <button>
            <Link to="contacts">List</Link>
          </button>
          <button>
            <Link to="contacts/new">Add Contact</Link>
          </button>
        </ul>
      </nav>

      <Routes>
        <Route path="contacts" element={<ContactsList contacts={contacts} />} />
        <Route
          path="contacts/new"
          element={<NewContact addContact={addContact} />}
        />
      </Routes>
    </>
  );
};

export default App;
