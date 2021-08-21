import React, { useState } from 'react'

const ContactNew = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')


  const handleSubmitContactClick = () => {
    props.addContact({
      name,
      image,
      email,
    })

    props.history.push('/contacts')
  }

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
        setName(event.target.value)}/>
          

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
   </div>
  
 )
  
}

export default ContactNew