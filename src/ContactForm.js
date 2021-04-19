import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const ContactForm = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  const handleClick = () => {
    props.addContact({
      name,
      email,
      phoneNumber,
      profilePicture
    })

    props.history.push('/contacts')
  }

  ContactForm.propTypes = {
    name: PropTypes.string,
    phoneNumber: PropTypes.number.isRequired,
    email: PropTypes.string,
  }

  return (
    <div >

      <form className="contact-form col-md-6 offset-md-3">
        <h3>Add a New Contact</h3>
        <br />
        <div className="form-group">
          <input required
            onChange={event => setName(event.target.value)}
            type="text" id="name-text" className="form-control" placeholder="Insert name" />

          <br />

          <input
            onChange={event => setEmail(event.target.value)}
            type="text" id="email-text" className="form-control" placeholder="Insert email" required />

          <br />

          <input
            onChange={event => setPhoneNumber(event.target.value)}
            type="text" id="phone-number" className="form-control" placeholder="Insert phone number" required />

          <br />

          <input
            onChange={event => setProfilePicture(event.target.value)}
            type="url" id="pic-link" className="form-control" placeholder="Insert profile picture" required />
        </div>

        <button onClick={handleClick} type="button" className="btn btn-primary add-post">Add Contact</button>
      </form>
    </div>
  )
};

export default ContactForm;
