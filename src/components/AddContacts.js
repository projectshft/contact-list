
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const AddContacts = () => {

  const [img, setImg] = useState('Josh\'s face')
  const handleImgChange = (e) => {
    setImg(e.target.value)
  }

  const [name, setName] = useState('Josh')
  const handleNameChange = (e) => {
  setName(e.target.value)
  }

  const [email, setEmail] = useState('me@me.com')
  const handleEmailChange = (e) => {
  setEmail(e.target.value)
  }

  const [phone, setPhone] = useState('1234')
  const handlePhoneChange = (e) => {
  setPhone(e.target.value)
  }

  const passState = () => {
    console.log('pass state works')
  }


return (
  <div>
    <Link to="/">Back</Link>
    <h3>Add information below:</h3>
    <form>
      <span>Image URL: <input value={img} onChange={handleImgChange}/></span>
      <br></br>
      <span>Name: <input value={name} onChange={handleNameChange}/></span>
      <br></br>
      <span>Email: <input value={email} onChange={handleEmailChange}/></span>
      <br></br>
      <span>Phone Number: <input value={phone} onChange={handlePhoneChange}/></span>
      <br></br>
      <button type="button" className="btn btn-primary" onClick={passState}>Submit</button>
    </form>
  </div>
)
}

export default AddContacts