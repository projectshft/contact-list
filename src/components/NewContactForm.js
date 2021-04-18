import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NewContactForm ({contacts, setContacts}) {
    
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone_number: '',
    image_url: '',
    id: Math.round(Math.random()*10000000000)
  })

  newContact.proptypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    image_url: PropTypes.string,
    id: PropTypes.number
  };

  const handleChange = (e) =>{
    const value = e.target.value;
    setNewContact({
      ...newContact,
      [e.target.name]: value
    })
  }

  const submitNewContact = () =>{
    
    const newContacts = contacts.concat(newContact)
    console.log(newContacts)
    setContacts(newContacts)
  }
  
  return (
      <div className="row">
        <div className="col-sm-6 offset-md-2">
          <br></br>
          <h3>add a new contact</h3>
          <form>
            <label>
              <h4>Name</h4>
              <input
                type='text'
                name='name'
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              <h4>email</h4>
              <input
                type='text'
                name='email'
                onChange={handleChange}
                />
            </label>
            <br></br>
            <label>
              <h4>Phone</h4>
              <input
                type='text'
                name='phone_number'
                onChange={handleChange}
                />
            </label>
            <br></br>
            <label>
              <h4>ImageUrl</h4>
              <input
                type='text'
                name='image_url'
                onChange={handleChange}
                />
            </label>
          </form>
          <Link to='/'>
            <button className="btn btn-primary" onClick={submitNewContact}>Submit</button>
            <button className="btn btn-warning">go back</button>
          </Link>
        </div>
      </div>
    );
  }