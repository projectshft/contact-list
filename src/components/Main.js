import AddContacts from "./AddContacts";
import FullList from "./FullList";
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

const Main = () => {
  const  [contacts, setContacts] = useState([])

  

  const mainState = (e) => {
    setContacts(contacts.concat([e]))
  }

  return (
    <div>
      <Routes>
        <Route exact path ="/" element={<FullList contacts={contacts}/>}/>
        <Route path="/add-contacts" element={<AddContacts mainState={mainState}/>}/>
      </Routes>
    </div>
  )
}

export default Main