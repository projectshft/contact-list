import AddContacts from "./AddContacts";
import FullList from "./FullList";
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

const Main = () => {
  const [contacts, setContacts] = useState('')

  const mainState = (e) => {
    setContacts(e.target.value)
  }

  return (
    <div>
      <Routes>
        <Route exact path ="/" element={<FullList mainState={mainState}/>}/>
        <Route path="/add-contacts" element={<AddContacts/>}/>
      </Routes>
    </div>
  )
}

export default Main