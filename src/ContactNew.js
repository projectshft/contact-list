import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import PropTypes from 'prop-types';

const ContactNew = (props) => {
  const generateId = () => Math.round(Math.random() * 1000000)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [id, setID] = useState(generateId())

  const handleSubmitContactClick = () => {
    
    props.addContact({
      name,
      image,
      email,
      id 
    })

    props.history.push('/contacts')
  };

  

 return (

   <div>
     <h1>add a new contact</h1>
     <form>
       <label for='name'>Name</label>
       <input 
       type='text' 
       className='form-control' 
       placeholder='Buddy Tan-Smith'
       onChange={event => 
        setName(event.target.value)

      }/>
      

          

      <br/>

      <label for='email'>Email</label>
      <input
      type='email'
      className='form-control'
      placeholder='buddytsmith@gmail.com'
      onChange={event => setEmail(event.target.value)}/>

      <br/>

      <label for='image-url'>Image URL</label>
      <input
      type='text'
      className='form-control'
      placeholder='a link plz'
      onChange={event => setImage(event.target.value)}/>

      <button type='button' onClick={handleSubmitContactClick}>submit</button>


     </form>
     <Link to='/contacts'>Contacts</Link>
   </div>
 );
}

ContactNew.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}





export default ContactNew