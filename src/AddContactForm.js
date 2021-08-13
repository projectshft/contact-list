import {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const AddContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleClick = () => {
    if (name && email && number) {
      props.addContact({
        name: name,
        email: email,
        number: number,
        imgUrl: imgUrl
      })
  
      props.history.push('/');

    } else {
      alert("Please fill out your contact's name, email, and number.");
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form className="contact-form">
          <h2>New Contact:</h2>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              placeholder="Number"
              onChange={e => setNumber(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              placeholder="Profile Pic URL"
              onChange={e => setImgUrl(e.target.value)}
            />
            <br/>
          </div>

          <button type="button" className="btn btn-primary add-contact-btn" onClick={handleClick}>Create Contact</button>
          <Link to={'/contacts'} className="button btn btn-primary">Back</Link>
        </form>   
      </div> 
    </div>   
  );
}

export default AddContactForm;