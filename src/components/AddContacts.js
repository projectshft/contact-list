
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



return (
  <div>
    <h3>Add information below:</h3>
    <form>
      <span>Image URL: <input value={img} onChange={handleImgChange}/></span>
      <br></br>
      <span>Name: <input value={name} onChange={handleNameChange}/></span>
      <br></br>
      <span>Email: <input /></span>
      <br></br>
      <span>Phone Number: <input /></span>
      <br></br>
    </form>
  </div>
)
}

export default AddContacts