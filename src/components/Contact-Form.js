import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';

const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  let history = useHistory()
  let directToMainBtn = () => {
    return history.push('/')
  }

   const handleAddContact = (e) => {
     e.preventDefault()
     console.log(name, email, number, imageUrl);
   }
  

  return (
     
      <form onSubmit={handleAddContact}>
        <div className="mb-3">
          <label htmlFor="full-name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="full-name" onChange={(e)=>{setName(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
        </div>
      
        <div className="mb-3">
          <label htmlFor="phone-number" className="form-label">Phone number</label>
          <input type="number" className="form-control" id="phone-number" onChange={(e) => {
            setNumber(e.target.value)
          }}/>
        </div>

        <div className="mb-3">
          <label htmlFor="image-url" className="form-label">Image url</label>
          <input type="text" className="form-control" id="image-url" onChange={(e) => {
            setImageUrl(e.target.value)
          }} />
        </div>
        <input type="submit" className="btn btn-primary" value="Add Contact"/>
        <button onClick={directToMainBtn} className="btn btn-primary ml-3">Cancel</button>
      </form>
   
     
  )
}

export default ContactForm;