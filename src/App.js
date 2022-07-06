import { React, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import ContactsList from './components/contactsList';
import ContactView from './components/contactView';
import NewContactForm from './components/newContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts(contacts.concat(newContact));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1>Contacts List</h1>
          <hr/>
          <Routes>
            <Route path="/" element={<ContactsList contacts={contacts} />} />
            <Route path="/contacts/new" element={<NewContactForm addContact={addContact} />}/>
            <Route path="/contacts/:id" element={<ContactView contacts={contacts} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
