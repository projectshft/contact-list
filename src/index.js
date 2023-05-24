import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactList from './components/contact_list';
import AddNewContact from './components/add_new_contact';
import ContactProfileInfo from './components/contact_profile';

const App = () => (
  <div>
    <Main />
  </div>
);

const Main = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts(previousContact => [...previousContact, newContact])
  }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ContactList contacts={contacts} />} />
        <Route path="/new" element={<AddNewContact addContact={handleAddContact} />} />
        <Route path="/contacts/id" element={<ContactProfileInfo contacts={contacts} />} />
      </Routes>
    </div>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
