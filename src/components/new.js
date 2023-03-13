import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';


const NewContact = ({addContact}) => {

  const history = useHistory();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [phone, setPhone] = useState(null)

  const handleName = (e) => setName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handleImageURL = (e) => setImageURL(e.target.value)
  const handlePhone = (e) => setPhone(e.target.value)

  const contactsPage = () => {
    history.push("/contacts")
  }

  const handleClick = () => {
    const generateId = () => Math.round(Math.random() * 100000000);
    let newID = generateId();
    const newContact = {
      id: newID,
      name: name,
      email: email,
      phone_number: phone,
      image_url: imageURL,
    }
    addContact(newContact);
    contactsPage();

  }

  
  

  return (
    <div className="container-fluid" id="form">
      <form className="row g-3">
        <div className="col-12">
          <label className="col-sm-2 col-form-label" > Full Name</label>
          <input className="form-control" onChange={handleName} placeholder="Enter Name Here"/>
        </div>
        <div className="col-12">
          <label className="col-sm-2 col-form-label" >Email</label>
          <input className="form-control" onChange={handleEmail} placeholder="Enter Email Here"/>
        </div>
        <div className="col-12">
          <label className="col-sm-2 col-form-label" >Phone</label>
          <input className="form-control" onChange={handlePhone} placeholder="Enter Phone Number Here"/>
        </div>
        <div className="col-12">
          <label className="col-sm-2 col-form-label" >Profile Pic</label>
          <input className="form-control" onChange={handleImageURL} placeholder="Enter Image URL Here"/>
        </div>
      </form>
      <button type="button" className="btn btn-primary" id="btn-list" onClick={handleClick}>Add Contact</button>
    </div>
  )
}

NewContact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  image_url: PropTypes.string,
  id: PropTypes.number
} 

export default NewContact;