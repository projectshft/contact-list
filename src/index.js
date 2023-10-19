// Use Prototypes

// Routes that will be needed. Index, adding a contact, individual contacts,
// The add contact button will route to the add contact page
// We will need a type form for user input to add a contact
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import AddContact from './AddContact.Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Index from './AllContacts';

const App = () => {
  const [contact, setContacts] = useState([]);
  const addNewContact = (newContact) => {
    setContacts([contact, newContact]);
  };
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Index" element={<Index contact={contact} />} />
          <Route
            path="/AddContact"
            element={<AddContact addNewContact={addNewContact} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
