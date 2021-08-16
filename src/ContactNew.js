import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

const ContactNew = (props) => {
  const [pic_url, setPicUrl] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  
  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmitContactClick = () => {
//send alert if prop type is violated?
    console.log (pic_url)

    const contactId = generateId();

    props.addContact({
      pic_url,
      name,
      email,
      phone,
      contactId
    })
    setName('')
    setEmail('')
    setPhone('')
    setPicUrl('')
  
  }

  //required tags arent stopping submit

  return (
    <div>     
      <form>
        <label>Name</label>
        <input type='text' className='form-control' required value={name}onChange={event =>
          setName(event.target.value)
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control' required value={email} onChange={event =>
          setEmail(event.target.value)
        }/>

        <br/>

        <label>Phone</label>
        <input type='text' className='form-control' required value={phone} onChange={event =>
          setPhone(event.target.value)
        }/>

        <br/>

        <label>Picture URL</label>
        <input type="text" className='form-control' required value={pic_url} onChange={event => setPicUrl(event.target.value)
        }/>

        <button type="submit" onClick={handleSubmitContactClick} >Submit</button>
      </form>

      <Link to='/contacts'>All Contacts</Link>
    </div>
  )
};

ContactNew.propTypes =  {
  data: PropTypes.shape({
    pic_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,})
  
}


export default ContactNew