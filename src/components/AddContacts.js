import { Link } from "react-router-dom";
import { useState } from "react";

const AddContacts = (props) => {

  const [name, setName] = useState('');

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name-input">Full Name</label>
        <input type="text" className="form-control" id="name-input" value={name} onInput={e => setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email-input">Email Address</label>
        <input type="text" className="form-control" id="email-input"/>
      </div>
      <div className="form-group">
        <label htmlFor="phone-input">Phone Number</label>
        <input type="number" className="form-control" id="phone-input"/>
      </div>
      <div className="form-group">
        <label htmlFor="img_url">Image URL</label>
        <input type="email" className="form-control" id="img_url"/>
      </div>
      <Link to="/contacts">
        <button type="submit" className="btn btn-primary" onClick={() => props.submitHandler(name, 'pastorjosh@gmail', '1234234', 'img_url')}>Submit Contact</button>
      </Link>
      <Link to="/contacts">
        <button className="btn btn-secondary" onClick={props.addContactToggle}>Go Back</button>
      </Link>
    </form>
  );
};

export default AddContacts;