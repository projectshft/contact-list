import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddContacts from "./AddContacts";
import Contacts from "./Contacts";
import EditContact from "./EditContact";

function App() {

  const [formData, setFormData] = useState([]);

  const submitHandler = (name, email, phone, img) => {
    
    // const idGenerator = () => {
    //   const id = Math.floor(Math.random() * 1000000);
    //   return id;
    // }

    setFormData([
      ...formData,
      {
      // id: idGenerator(),
      name: name,
      email: email, 
      phone: phone,
      img: img
    }])
  }

  const deleteHandler = (i) => {
    setFormData([
      ...formData.slice(0, i),
      ...formData.slice(i + 1, formData.length)
    ])
  }

  //use this for editHandler()

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
        <Route path='/contacts/new' element={<AddContacts submitHandler={submitHandler}/>} />
        <Route path='/contacts' element={<Contacts formData={formData} deleteHandler={deleteHandler}/>} />
        <Route path='/contacts/:id/edit' element={<EditContact />} />
      </Routes>
    </div>
  );
}


export default App;
