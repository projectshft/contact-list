import './App.css';
import {useState} from "react";
import { getDefaultContacts } from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactList from './components/contact-list';
import NewContact from './components/new-contact';
import ContactDetails from './components/contact-details';
import EditContact from './components/edit-contact';

const App = () => {
  const [contacts, setContacts] = useState(getDefaultContacts());
  
  const getContact = (id) => {
    return contacts.find(
      contact => contact.id === id
    );
  }

  const addNewContact = (newContact) => {
    const newContacts = [...contacts];
    newContacts.unshift(newContact);
    setContacts(newContacts);    
  }

  const editContact = (contact) => {
    const newContacts = [...contacts];
    const i = newContacts.findIndex((c) => c.id === contact.id);
    newContacts[i] = contact;
    setContacts(newContacts);
  }

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contacts" element={<ContactList contacts={contacts} deleteContact={deleteContact}/>}/>
          <Route path="contacts/new" element={<NewContact addNewContact={addNewContact}/>}/>
          <Route path="contacts/:contactId" element={<ContactDetails getContact={getContact}/>}/>
          <Route path="contacts/:contactId/edit" element={<EditContact getContact={getContact}editContact={editContact} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
