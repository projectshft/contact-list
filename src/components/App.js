import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Contacts from "./Contacts";
import AddContacts from "./AddContacts";
import PropTypes from 'prop-types';

function App() {

  const [button, setButton] = useState(false)

  const addContactToggle = () => {
    setButton(!button)
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

  const addContactButton = (
    <Link to='/contacts/new'>
      <button className="btn btn-primary" onClick={addContactToggle}>Add Contact</button>
    </Link>   
  )

  return (
    <div>
      <div>
        <h1>React Contact List</h1>
        {!button && addContactButton}
      </div>
      <Routes>
        <Route path='/contacts' element={<Contacts formData={formData} />} />
        <Route path='/contacts/new' element={<AddContacts addContactToggle={addContactToggle} submitHandler={submitHandler}/>} />
      </Routes>
    </div>
  );
}


export default App;
