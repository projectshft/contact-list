import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import ContactList from './components/ContactList';
import ContactListAPI from './data/ContactListAPI';
import Header from './components/Header';
import NotFound from './components/NotFound';
import EditContact from './components/EditContact';

export default function App() {
  const [contacts, setContacts] = useState(ContactListAPI);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    const newContactList = contacts.filter((item) => item.id !== contactId);
    setContacts(newContactList);
  };

  const editContact = (editedContact) => {
    const updatedContactList = contacts.map((item) =>
      item.id === editedContact.id ? editedContact : item
    );
    setContacts(updatedContactList);
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
          <Route
            path="contacts/:id"
            element={<ContactDetail contacts={contacts} />}
          />
          <Route
            path="contacts/:id/edit"
            element={
              <EditContact contacts={contacts} editContact={editContact} />
            }
          />
          <Route
            path="contacts/new"
            element={<AddContact addContact={addContact} />}
          />
          <Route path="notFound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="notFound" />} />
        </Routes>
      </div>
    </div>
  );
}
