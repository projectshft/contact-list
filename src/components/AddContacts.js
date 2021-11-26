
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const AddContacts = (props) => {

  const [img, setImg] = useState('')
  const handleImgChange = (e) => {
    setImg(e.target.value)
  }

  const [name, setName] = useState('')
  const handleNameChange = (e) => {
  setName(e.target.value)
  }

  const [email, setEmail] = useState('')
  const handleEmailChange = (e) => {
  setEmail(e.target.value)
  }

  const [phone, setPhone] = useState('')
  const handlePhoneChange = (e) => {
  setPhone(e.target.value)
  }

  const passState = () => {
    const contact = {
      img: {img},
      name: {name},
      email: {email},
      phone: {phone}
    }
    props.mainState(contact)
  }


return (
  <div>
    <Link to="/">Back</Link>
    <h3>Add information below:</h3>
    <form>
      <span>Image URL: <input value={img} onChange={handleImgChange} placeholder="URL link"/></span>
      <br></br>
      <span>Name: <input value={name} onChange={handleNameChange} placeholder="First and Last"/></span>
      <br></br>
      <span>Email: <input value={email} onChange={handleEmailChange} placeholder="e.g. me@webaddress.org"/></span>
      <br></br>
      <span>Phone Number: <input value={phone} onChange={handlePhoneChange} placeholder="e.g. (xxx) xxx-xxxx"/></span>
      <br></br>
      <button type="button" className="btn btn-primary" onClick={passState}>Submit</button>
    </form>
  </div>
)
}

export default AddContacts