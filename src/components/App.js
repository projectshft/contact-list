import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import AddContacts from "./AddContacts";
import PropTypes from 'prop-types';

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

  const addContactButton = (
    <Link to='/contacts/new'>
      <button className="btn btn-primary" onClick={addContactToggle}>Add Contact</button>
    </Link>   
  )

  const listContacts = formData.map((data, i) => {
    const imageToString = String(data.img)
    const altToString = String(data.name)
    
    const fullContact = (
      <ul key={i}>
        <li>{data.name}</li>
        <li>{data.email}</li>
        <li>{data.phone}</li>
        <li><img className="list-img" src={imageToString} alt={altToString}/></li>
      </ul>
    )
    return fullContact;
  })

  return (
    <div>
      <div>
        <h1>React Contact List</h1>
        {display && addContactButton}
        <ul>{display && listContacts}</ul>
      </div>
      <Routes>
        <Route path='/contacts/new' element={<AddContacts addContactToggle={addContactToggle} submitHandler={submitHandler}/>} />
      </Routes>
    </div>
  );
}


export default App;
