import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const NewContact = (props) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')

  const handleSubmit = () => {
    props.addContact({name, image, email, phoneNumber})

    props.history.push('/contacts')
  }

  return (
    <div>
      <Link to='/contacts'> Contacts </Link>

      <form>
        <label>Name: </label>
        <input 
        type="text" 
        onChange={event => setName(event.target.value)} />

        <br/>

        <label>Image URL: </label>
        <input 
        type="text" 
        onChange={event => setImage(event.target.value)} />

        <br/>

        <label>Email: </label>
        <input 
        type="text" 
        onChange={event => setEmail(event.target.value)} />

        <br/>

        <label>Number: </label>
        <input 
        type="text" 
        onChange={event => setphoneNumber(parseInt(event.target.value, 10))} />
      </form>

      <br/>

      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  )
  
}


export default NewContact