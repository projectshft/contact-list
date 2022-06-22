import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddContacts from "./AddContacts";
import Contacts from "./Contacts";
import EditContact from "./EditContact";

function App() {

  const [formData, setFormData] = useState([]);

  const submitHandler = (name, email, phone, img) => {
    
    const idGenerator = () => {
      const id = Math.floor(Math.random() * 1000000);
      return id;
    }

    let id = idGenerator();

    if (formData.includes(id)) {
      const newNumber = Math.random() * 100000;
      id = newNumber;
    }
    

    setFormData([
      ...formData,
      {
      id: id,
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

  const editHandler = (id, name, email, phone, img) => {
    // eslint-disable-next-line
    // const currentData = formData.find(data => data.id == id);
    // eslint-disable-next-line
    const currentIndex = formData.findIndex(el => el.id == id);

    setFormData([
      ...formData.slice(0, currentIndex),
      {
        id: id,
        name: name,
        email: email, 
        phone: phone,
        img: img
      },
      ...formData.slice(currentIndex + 1, formData.length)
    ])
    
  }

  submitHandler.propTypes = {
    id: PropTypes.number,
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
        <Route path='/contacts/:id/edit' element={<EditContact formData={formData} editHandler={editHandler}/>} />
      </Routes>
    </div>
  );
}


export default App;
