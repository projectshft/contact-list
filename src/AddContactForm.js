import {useState} from 'react';
import {Link} from 'react-router-dom';
import submitForm from './SubmitForm';

const AddContactForm = ({history, addContact}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleClick = () => {
    const newContact = submitForm(name, email, number, imgUrl);

    if (newContact) {
      addContact(newContact)
      history.push('/contacts');
    } 
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form className="contact-form">
          <h2>New Contact:</h2>

          <div className="form-group">
            <span>Name*</span>
            <input
              className="form-control"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
            <br/>

            <span>Email*</span>
            <input
              className="form-control"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <br/>

            <span>Number*</span>
            <input
              className="form-control"
              placeholder="Number"
              onChange={e => setNumber(e.target.value)}
            />
            <br/>

            <span>Profile Pic URL</span>
            <input
              className="form-control"
              placeholder="Profile Pic URL"
              onChange={e => setImgUrl(e.target.value)}
            />
            <br/>
          </div>

          <span>Fields marked with * are required</span>
          <button type="button" className="btn btn-primary add-contact-btn" onClick={handleClick}>Create Contact</button>
          <Link to={'/contacts'} className="button btn btn-primary">Back</Link>
        </form>   
      </div> 
    </div>   
  );
}

export default AddContactForm;