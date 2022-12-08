import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'


const ContactNew = (props) => {
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  let history = useHistory();

  const handleSubmitContactClick = () => {
    let generateId = Math.round(Math.random() * 100000000);

    if (profilePic && name && phoneNumber && email) {
        console.log(true);

        props.addContact({
            profilePic,
            name,
            email,
            phoneNumber,
            number: generateId
          })

          history.push('/contacts')

    } else {
        alert("Please fill out all fields");
    }
  }

  return (
    
    <div className="container">
        <h1>Add Contact</h1>
      <form className='justify-content-md-center'>
      <input className='form-control'
        onChange={event => setProfilePic(event.target.value)}
        name="img"
        placeholder="Profile Picture URL"
        />
        <br/>
        <br/>

        <input className='form-control'
        onChange={event => setName(event.target.value)}
        name="name"
        placeholder="Enter Your Name"
        />
        <br/>
        <br/>

        <input className='form-control'
        onChange={event => setEmail(event.target.value)}
        name="email"
        placeholder="Email"
        />
        <br/>
        <br/>

        <input className='form-control'
        onChange={event => setPhoneNumber(event.target.value)}
        name="phone"
        placeholder="Phone Number"
        />
        <br/>
        <br/>

        <button type="button" onClick={handleSubmitContactClick} className="btn btn-primary">Submit Contact</button>
        <br/>
        <br/>
        <Link to='/contacts'><button type="button" className="btn btn-primary"> Back </button></Link>
      </form>
    </div>
  )
};

export default ContactNew