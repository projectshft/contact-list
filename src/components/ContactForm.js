import { Link } from 'react-router-dom';
import './ContactForm.css';
 
const ContactForm = ({name, setName, email, setEmail, phone, setPhone}) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  }; 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  
  return (
    <div className="contact-content">
      <h1 className="contact-title">New Contact</h1> 
      <form>
        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
        />
 
        <label>Phone</label>
        <input
          type='text'
          value={phone}
          onChange={handlePhoneChange}
        />
 
        <label>Email</label>
        <input
          type='text'
          value={email}
          onChange={handleEmailChange}
        />

      </form> 
        <Link to="/"><button className='submit'>Submit</button></Link>
 
    </div>
  )
}
 
export default ContactForm;
 
 
