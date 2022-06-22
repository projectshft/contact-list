import { Link } from "react-router-dom";
import { useState } from "react";

const AddContacts = (props) => {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [phone, setPhone] = useState('');

  const [img, setImg] = useState('');

  const submitHander = (
    <Link to="/contacts">
      <button type="submit" className="btn btn-primary" onClick={() => props.submitHandler(name, email, phone, img)}>Submit Contact</button>
    </Link>
  )

  const goBackHandler = (
    <Link to="/contacts">
      <button className="btn btn-secondary">Go Back</button>
    </Link>
  )

  const formData = (
    <div>
      <div className="form-group">
        <label htmlFor="name-input">Full Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name-input" 
          value={name} 
          onInput={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email-input">Email Address</label>
        <input 
          type="text" 
          className="form-control" 
          id="email-input" 
          value={email} 
          onInput={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone-input">Phone Number</label>
        <input 
          type="number" 
          className="form-control" 
          id="phone-input" 
          value={phone} 
          onInput={e => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="img_url">Image URL</label>
        <input 
          type="email" 
          className="form-control" 
          id="img_url" 
          value={img}
          onInput={e => setImg(e.target.value)}
        />
      </div>
    </div>
  )

  return (
    <form>
      {formData}
      {submitHander}
      {goBackHandler}
    </form>
  );
};

export default AddContacts;