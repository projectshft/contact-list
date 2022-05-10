import React from "react";
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddContact({addContact}) {

  const [contact, setContact] = useState({ picUrl: "", name: "", email: "", phone: ""});

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(contact.picUrl && contact.name && contact.email && contact.phone) {
    addContact(contact);
    history.push("/contacts");
    } else {
      alert("Please fill out every field");
    }
  };
  
  const history = useHistory();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Picture URL</label>
          <input 
            type="text"
            name="picUrl"
            className="form-control" id="inputUrl"
            aria-describedby="emailHelp"
            placeholder="Enter profile pic url"
            value={contact.picUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            placeholder="Enter full name"
            value={contact.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone #</label>
          <input
            type="number"
            name="phone"
            className="form-control"
            id="inputPhone#"
            aria-describedby="emailHelp"
            placeholder="Enter phone #"
            value={contact.phone}
            onChange={handleChange}
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit Contact
        </button>

      </form>
    </div>
  );
};

export default AddContact;