import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const AddContact = ({handleContactChange}) => {
  // used this to redirect back to the home page after form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
   // component for adding a new contact to newContact state
  let [newContact, setNewContact] = useState({
    contact: {
      id: Math.round(Math.random() * 100000000),
      name: '',
      email: '',
      phoneNumber: '',
      profilePicture: ''
    }
  })

  // function for retrieving users input from form and adding it to newContact state
  const handleInput = (e) => {
    setNewContact({
      ...newContact,
      contact: {
        ...newContact.contact,
        [e.target.name] : e.target.value
      }
    })
  }

  // function to handle the submission of the user to add a new contact to the contacts array
  const handleSubmit = (e) => {
    e.preventDefault();
    handleContactChange(newContact.contact);
    setIsSubmitted(true);
  }

  return (
    <div className="container add-contact">
      <h1 className='text-center mt-4'>Contact List</h1>
      <form onSubmit={handleSubmit} className="col-8 offset-2">
        <div className="form-group">
          <label className='pt-3 pb-3' htmlFor='full-name-input'>Full Name</label>
          <input name='name' value={newContact.contact.name} onChange={handleInput} className="form-control" id='full-name-input' type="text" placeholder='Enter Full Name' required={true} />
        </div>
        <div className="form-group">
          <label className='pt-3 pb-3' htmlFor='email-input'>Email Address</label>
          <input name='email' value={newContact.contact.email} onChange={handleInput} className="form-control" id='email-input' type="email" placeholder='Enter Email' required={true}/>
        </div>
        <div className="form-group">
          <label className='pt-3 pb-3' htmlFor='phone-number-input'>Phone Number</label>
          <input name='phoneNumber' value={newContact.contact.phoneNumber} onChange={handleInput}className="form-control" id='phone-number-input' type="number" placeholder='Enter Phone Number' required={true}/>
        </div>
        <div className="form-group">
          <label className='pt-3 pb-3' htmlFor='url-input'>Image URL</label>
          <input name='profilePicture' value={newContact.contact.profilePicture} onChange={handleInput} className="form-control" id='url-input' type="text" placeholder='Enter Image URL' required={true}/>
        </div>
        <div className="pt-4">
          <button to='/contacts' className="btn btn-primary">Add Contact</button>
          <Link to={'/'} className='btn btn-danger ms-3'>Back</Link>
        </div>
      </form>
      {isSubmitted && (
        <Redirect to='/' />
      )}
    </div>
  );
}

//propTypes check
AddContact.propTypes = {
  handleContactChange: PropTypes.func.isRequired
}

export default AddContact;