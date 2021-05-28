import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";

const ContactForm = (props) => {
  //state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); 
  const [picture, setPicture] = useState(''); 

  const submitContactHandler = (e) => {
    props.addContact({
      name: name,
      email: email,
      phone_number: phone,
      image_url: picture,
      id: uuidv4()
    });

    e.preventDefault(); 
  
   // props.history.push('/');
  };

  return (
    <div className="col-md-6 offset-3">
      <h1 className="header">Contact List</h1>
      <div className="contact-form">
        <form>
        <div className="form-group">
           <label><strong>Name:</strong></label>
            <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="form-group">
           <label><strong>Email address:</strong></label>
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
           <label><strong>Phone Number:</strong></label>
            <input type="text" className="form-control" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>

          <div className="form-group">
           <label><strong>Image URL:</strong></label>
            <input type="text" className="form-control" placeholder="Image URL" value={picture} onChange={(e) => setPicture(e.target.value)}/>
          </div>

          <Link to="/"><button onClick={submitContactHandler} type="submit" className="btn btn-primary">Submit</button></Link>

        </form>

        <Link to="/" className="btn btn-primary btn" >Home</Link>

      </div>
    </div>
  );
};

export default ContactForm; 