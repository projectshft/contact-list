import AddContacts from "./AddContacts";
import individualContact from "./individualContact";
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
        <Route path="/individual-contact" element={<individualContact />}/>
      </Routes>
    </div>
  )
}

export default Main