import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import Header from './components/Header';
import ContactListAPI from './data/ContactListAPI';

export default function App() {
  const [contacts, setContacts] = useState(ContactListAPI);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    const newContactList = contacts.filter((item) => item.id !== contactId);
    setContacts(newContactList);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate to="contacts" />} />
          <Route
            path="contacts"
            element={
              <ContactList contacts={contacts} deleteContact={deleteContact} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
