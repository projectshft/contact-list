import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 

  return (
    <div className="contact-content">
      <h1 className="contact-title">New Contact</h1>
      <form>
        <label>Name</label>
        <input 
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Phone</label>
        <input 
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)} 
        />

        <label>Email</label>
        <input 
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <Link to="/">
          <button>Submit</button>
        </Link>      

      </form>
    </div>
  )
}

export default ContactForm;

