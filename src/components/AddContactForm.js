import {useHistory} from "react-router-dom"
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types";

//function component used to take user input and store in local component and then using addContact function add the new contact to the contact state in main.
const AddContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setNumber] = useState("");
  const [image_url, setImageURL] = useState("");
  const [id, setID] = useState();
 
  const history = useHistory();

  const back = () => history.push("/");
  const generatedId = () => Math.round(Math.random() * 100000000);
 
  useEffect(()=>{
    const newID = generatedId();
    setID(newID);
  },[])

  const handleSubmitClick = () => {
    props.addContact({
      name,
      email,
      phone_number,
      image_url,
      id
    });
    back();
  };
  
  return (
    <form>
      <div className="form-group">
        <label htmlFor="newName">Name</label>
        <input onChange={event => setName(event.target.value)} type="text" className="form-control" id="name" placeholder="Enter Name"/>
      </div>
      <div className="form-group">
        <label htmlFor="newEmail">Email address</label>
        <input onChange={event => setEmail(event.target.value)} type="email" className="form-control" id="email" placeholder="Enter Email"/>
      </div>
      <div className="form-group">
        <label htmlFor="newphoneNumber">Phone Number</label>
        <input onChange={event => setNumber(event.target.value)} type="number" className="form-control" id="newNumber" placeholder="Enter Phone Number"/>
      </div>
      <div className="form-group">
        <label htmlFor="newimageURL">Image URL</label>
        <input onChange={event => setImageURL(event.target.value)} type="text" className="form-control" id="newImage" placeholder="Enter Image URL"/>
      </div>
      <button onClick={event => handleSubmitClick(event.target)} type="submit" className="btn btn-primary">Submit</button>
      <button onClick={() => history.push("/")} className="btn btn-secondary">Go back</button>
    </form>
  )
}

AddContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
}


export default AddContactForm;