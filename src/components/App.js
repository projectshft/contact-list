import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Contacts from "./Contacts";
import AddContacts from "./AddContacts";

function App() {
  return (
    <div>
      <div>Header</div>
      <Routes>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/contacts/new' element={<AddContacts />} />
      </Routes>
    </div>
  );
}

export default App;
