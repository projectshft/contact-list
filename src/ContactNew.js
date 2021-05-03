//import { Link } from 'react-router-dom'
import React, { useState } from 'react'


const ContactNew = (props) => {
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmitContactClick = () => {
    props.addContact({
      picture,
      name,
      email,
      phone,
    })
    
    props.history.push('/contacts')

    
  }

  return (
    <div>
      <form>
        <label>Full Name</label>
        <input type='text' className='form-control'onChange={event =>
          setName(event.target.value)
        }/>

        <br/>

        
        <label>Email Address</label>
        <input type='text' className='form-control'onChange={event =>
          setEmail(event.target.value)
        }/>
        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          setPhone(event.target.value)
        }/>

        <label>Image URL</label>
        <input type='img' className='form-control'onChange={event =>
          setPicture(event.target.value)
        }/>

        <br/>

        <button type="button" class="btn btn-primary search" onClick={handleSubmitContactClick}>Add Contact</button>
      </form>

    </div>
  )
};

export default ContactNew