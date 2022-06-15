import { useState } from 'react';
import { Link } from "react-router-dom";

const AddContact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');

  return (
    <form>
      <div className="form-group">
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" className="form-control" id="full-name" value={name} onInput={e => setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" value={email} onInput={e => setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="phone-number">Phone Number:</label>
        <input type="text" className="form-control" id="phone-number" value={phone} onInput={e => setPhone(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input type="text" className="form-control" id="image" value={image} onInput={e => setImage(e.target.value)}/>
      </div>
      <Link to="/diplayed-list">
        <button type="button" className="btn btn-secondary">Go Back</button>
      </Link>
      <Link to="/diplayed-list">
        <button type="submit" className="btn btn-primary">Submit</button>
      </Link>
    </form>
  )
}

export default AddContact;