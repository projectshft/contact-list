import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Contacts from "./Contacts";
import AddContacts from "./AddContacts";

function App() {

  // const [test, setTest] = useState([]);

  // const tester = (arr) => {
  //   setTest([
  //     ...test,
  //     arr
  //   ])
  //   console.log(test)
  // }

  const [button, setButton] = useState(false)

  const addContactToggle = () => {
    setButton(!button)
  }

  const addContactButton = (
    <Link to='/contacts/new'>
      <button className="btn btn-primary" >Add Contact</button>
    </Link>   
  )

  return (
    <div>
      <div>
        <h1>React Contact List</h1>
        {!button && addContactButton}
      </div>
      <Routes>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/contacts/new' element={<AddContacts />} />
      </Routes>
    </div>
  );
}

export default App;
