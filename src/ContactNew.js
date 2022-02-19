import React, { useState} from 'react';

const ContactNew = (props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmitContactClick = () => {
    
    props.addContact({
      id: 3,
      name,
      email,
      phone,
      imageUrl
    })
    
    props.history.push('/')
  }

  
  return (

    <div className="col-md-5 offset-md-3">
      <div className="row">
        <form>
          <div className="form-group">
            <label htmlFor="nameInput">Full Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="John Doe" 
              onChange={event => setName(event.target.value)} />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="form-control" id="emailInput" placeholder="John@email.com" 
              onChange={event => setEmail(event.target.value)} />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="phoneInput">Phone Number</label>
            <input type="tel" className="form-control" id="phoneInput" placeholder="111-111-1111" 
              onChange={event => setPhone(event.target.value)}/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="imageInput">Image Url</label>
            <input type="text" className="form-control" id="imageInput" placeholder="Image Url" 
              onChange={event => setImageUrl(event.target.value)}/>
          </div>
          <br/>
          <button type="button" className="btn btn-primary" onClick={handleSubmitContactClick}>Add Contact</button>
        </form>
      </div>
    </div>
  )
};

export default ContactNew