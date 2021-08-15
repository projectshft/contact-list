import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactNew = (props) => {

  const generateId = () => Math.round(Math.random() * 100000000);

  const [state, setState] = useState ({
    id: generateId(),
    image_url: '',
    name: '',
    email: '',
    phone_number: ''
  });

  const changeHandler = (e) => {
    setState({...state, [e.target.id]: e.target.value});
  };

  const clickHandler = () => {
    props.passNewContact(state);
  }

  return (
    <div>
      <div className="container">
        <div className= "row">
          <div className= "col-md-6 offset-md-3">

          <label className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" onChange={changeHandler}></input>

            <label className="form-label">Email Address</label>
            <input type="text" className="form-control" id="email" placeholder="Enter Email" onChange={changeHandler}></input>

            <label className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phone_number" placeholder="Enter Phone" onChange={changeHandler}></input>

            <label className="form-label">Image URL</label>
            <input type="text" className="form-control" id="image_url" placeholder="Enter URL" onChange={changeHandler}></input>

            <Link to="/" type="button" className="btn btn-primary" onClick={clickHandler}>Add Contact</Link>
          </div>

        </div>
      </div>
    </div>
  )
};

ContactNew.propTypes = {
  passNewContact: PropTypes.func.isRequired
};

export default ContactNew