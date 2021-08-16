import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const ContactNew = (props) => {
  const [pic_url, setPicUrl] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  
  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmitContactClick = (event) => {

    event.preventDefault()

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

  

  return (
    <div className="container-fluid"> 
      <div className="col-lg-10 mx-auto form-page">   
      <form onSubmit={handleSubmitContactClick} >
        <div className="form-group">
        <div className="form-control form-control-lg">
        <label>Name</label>
        <input type='text' className='form-control' required value={name}onChange={event =>
          setName(event.target.value)
        }/>
        </div>

        
        <div className="form-control form-control-lg">
        <label>Email</label>
        <input type='text' className='form-control' required value={email} onChange={event =>
          setEmail(event.target.value)
        }/>
        </div>
        

        <div className="form-control form-control-lg">
        <label>Phone</label>
        <input type='text' className='form-control' required value={phone} onChange={event =>
          setPhone(event.target.value)
        }/>
        </div>
        

        <div className="form-control form-control-lg">
        <label>Picture URL</label>
        <input type="text" className='form-control' required value={pic_url} onChange={event => setPicUrl(event.target.value)
        }/>
        </div>

        <button type="submit" className="btn btn-primary"  >Submit</button>
        </div>
      </form>

      <Link to='/contacts'>All Contacts</Link>
    </div>
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