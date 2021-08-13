import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ContactNew = (props) => {
  const [pic_url, setPicUrl] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  const handleSubmitContactClick = () => {
    props.addContact({
      pic_url,
      name,
      email,
      phone
    })
    setName('')
    setEmail('')
    setPhone('')
    setPicUrl('')
  
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' className='form-control' required value={name}onChange={event =>
          setName(event.target.value)
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'  value={email} onChange={event =>
          setEmail(event.target.value)
        }/>

        <br/>

        <label>Phone</label>
        <input type='text' className='form-control' value={phone} onChange={event =>
          setPhone(event.target.value)
        }/>

        <br/>

        <label>Picture URL</label>
        <input type="text" className='form-control' value={pic_url} onChange={event => setPicUrl(event.target.value)
        }/>

        <button type="button" onClick={handleSubmitContactClick}>Submit</button>
      </form>

      <Link to='/'>All Contacts</Link>
    </div>
  )
};

export default ContactNew