import React, {useState} from 'react';
import { Link } from 'react-router-dom'
//import { v4 as uuidv4 } from "uuid";

const EditContactForm = (props) => {
  const contacts = props.contacts; 
  const selectedId = props.selectedContactId
  const editContact = contacts.find(c => c.id === selectedId);

  //state
  const [name, setName] = useState(editContact.name);
  const [email, setEmail] = useState(editContact.email);
  const [phone, setPhone] = useState(editContact.phone_number); 
  const [picture, setPicture] = useState(editContact.image_url); 

  const submitChangesHandler = (e) => {

    const index = contacts.findIndex(c => c === editContact);

    props.editContact(index, {
      name: name,
      email: email,
      phone_number: phone,
      image_url: picture,
      id: editContact.id
    });

    const editStatus = props.editStatus; 
    props.setEditStatus(!editStatus); 

    e.preventDefault(); 

   // props.history.push('/');
  };

  return (
    <div className="col-md-6 offset-3">
      <h1 className="header">Contact List</h1>
      <div className="contact-form">
        <form>
        <div className="form-group">
           <label><strong>Name:</strong></label>
            <input type="text" className="form-control" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="form-group">
           <label><strong>Email address:</strong></label>
            <input type="email" className="form-control" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
           <label><strong>Phone Number:</strong></label>
            <input type="text" className="form-control" placeholder="Phone Number"  value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>

          <div className="form-group">
           <label><strong>Image URL:</strong></label>
            <input type="text" className="form-control" placeholder="Image URL"  value={picture} onChange={(e) => setPicture(e.target.value)}/>
          </div>

          <Link to="/"><button onClick={submitChangesHandler} type="submit" className="btn btn-primary">Submit Changes</button></Link>

        </form>

        <Link to="/"><button type="button" className="btn btn-primary">Home</button></Link>

      </div>
    </div>
  );
};

export default EditContactForm; 