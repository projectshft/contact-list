import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddContacts from "./AddContacts";
import Contacts from "./Contacts";

function App() {

  const [display, setDisplay] = useState(true)

  const addContactToggle = () => {
    setDisplay(!display)
  }

  const [formData, setFormData] = useState([]);

  const submitHandler = (name, email, phone, img) => {
    setFormData([
      ...formData,
      {
      name: name,
      email: email, 
      phone: phone,
      img: img
    }])

    addContactToggle();
  }

  submitHandler.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    img: PropTypes.string
  }

  return (
    <div>
      <div>
        <h1>React Contact List</h1>
      </div>
      <Routes>
        <Route path='/contacts/new' element={<AddContacts addContactToggle={addContactToggle} submitHandler={submitHandler}/>} />
        <Route path='/contacts' element={<Contacts formData={formData} addContactToggle={addContactToggle} />} />
      </Routes>
    </div>
  );
}


export default App;
