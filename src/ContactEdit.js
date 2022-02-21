import React, { useState} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import _ from 'lodash'


const ContactEdit = (props) => {

  let params = useParams(); 
  let navigate = useNavigate();
  const contact = _.find(props.contacts, { id: parseInt(params.id, 10)});

  const [name, setName] = useState(contact.name)
  const [email, setEmail] = useState(contact.email)
  const [phone, setPhone] = useState(contact.phone)
  const [image_url, setImage_url] = useState(contact.image_url)
  
  const handleSubmitEditClick = () => {
    props.editContact({
      id: contact.id,
      name: name,
      email: email,
      phone: phone,
      image_url: image_url
    })

    navigate("/")
  }
 
  
  return (
    <div className="col-md-5 offset-md-3">
      <div className="row">
        <Link to='/'>Back</Link>
        <form onSubmit={handleSubmitEditClick}>
          <div className="form-group">
            <label htmlFor="nameInput">Full Name</label>
            <input type="text" className="form-control" id="nameInput" value={name} 
              onChange={event => setName(event.target.value)} required/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="form-control" id="emailInput" value={email}  
              onChange={event => setEmail(event.target.value)} required/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="phoneInput">Phone Number</label>
            <input type="tel" className="form-control" id="phoneInput" value={phone} 
              onChange={event => setPhone(event.target.value)} required/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="imageInput">Image Url</label>
            <input type="text" className="form-control" id="imageInput" value={image_url} 
              onChange={event => setImage_url(event.target.value)}/>
          </div>
          <br/>
          <button type="submit" className="btn btn-primary">Update Contact</button>
        </form> 
      </div>
    </div>
    )
}

export default ContactEdit