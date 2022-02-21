import { Link } from 'react-router-dom'; 
import React, { useState } from 'react';

const NewContact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [img_url, setImgUrl] = useState('') 

  //const generateId = () => Math.round(Math.random() * 100000000);
  //const makeId = () => {
    //let newId = generateId();
    //while (listOfIds.includes(newId)) {
      //newId = generateId();
   // }
   // return newId;
  //};

  const handleClick = () => { 
    props.addContact({
      name,
      email,
      phone,
      img_url,
    })

    props.history.push('/');
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value)
  }

  function handleImgUrlChange(e) {
    setImgUrl(e.target.value)
  }
    
  return (
    <div>
      <form className="post-form">

        <div className="form-group">
          <h6>Full Name</h6> 
          <input
            type="text"
            className="form-control text-white bg-dark font-weight-bold"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            />

          <br/>
          
            <h6>Email Address  <i className="fa fa-envelope"></i></h6>
            <input
              type="email"
              className="form-control text-white font-weight-bold bg-dark"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />

          <br/>

          <h6>Phone Number  <i className="fa fa-phone"></i></h6>
          <input
            type="tel"
            className="form-control text-white bg-dark font-weight-bold"
            placeholder="555-555-5555"
            maxLength="12"
            value={phone}
            onChange={handlePhoneChange}
            />

          <br/>

          <h6>Image URL    <i className="fa fa-user-circle-o"></i></h6>
          <input
            type="url"
            className="form-control text-white bg-dark font-weight-bold"
            placeholder="http://"
            value={img_url}
            onChange={handleImgUrlChange}
            />
        </div>

        <button onClick={handleClick} type="button" className="btn btn-warning add-post">Create Contact  <i className="fa fa-plus"></i></button>
      </form>
      <Link to='/'>Contacts</Link>
    </div>
  )
};

export default NewContact;
