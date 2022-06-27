import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Stack from 'react-bootstrap/Stack';



const ContactNew = (props) => {
  const [profilePic, setProfilePic] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  let history = useHistory()

  const handleSubmitContactClick = () => {
    props.addContact({
      profilePic,
      name,
      phoneNumber,
      email,
      number : Math.round(Math.random() * 100000000)
    })
    
    history.push('/Roster')
  }

  return (
    <div className='justify-content-md-center'>
      <form className='justify-content-md-center'>
      <label>Profile Picture</label>
        <input type='text' className='form-control'onChange={event =>
          setProfilePic(event.target.value)
        }/>

        <br/>

        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          setName(event.target.value)
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='form-control'onChange={event =>
          setPhoneNumber(parseInt(event.target.value))
        }/>

        <br/>

        <label>Email</label>
        <input type='email' className='form-control'onChange={event =>
          setEmail(event.target.value)
        }/>

        <Stack gap={2} className="col-md-5 mx-auto">
        <button type="button" onClick={handleSubmitContactClick}>Submit</button>
        <Link to='/Roster'><button type="button">Roster</button></Link>
        </Stack>
      </form>

      
    </div>
  )
};

export default ContactNew