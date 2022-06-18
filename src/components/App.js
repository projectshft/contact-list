import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Contacts from "./Contacts";
import AddContacts from "./AddContacts";

function App() {
  return (
    <div>
      <div>
        <h1>React Contact List</h1>
        <button className="btn btn-primary">Add Contact</button>
      </div>
      <Routes>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/contacts/new' element={<AddContacts />} />
      </Routes>
    </div>
  );
}

export default App;
