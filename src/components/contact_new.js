import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ContactNew = (props) => {

  const [state, setState] = useState ({
    profPic: '',
    name: '',
    email: '',
    phoneNum: ''
  });

  const changeHandler = (e) => {
    setState({...state, [e.target.id]: e.target.value});
  };

  const clickHandler = () => {
    props.passNewContact('click!');
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
            <input type="text" className="form-control" id="phoneNum" placeholder="Enter Phone" onChange={changeHandler}></input>

            <label className="form-label">Image URL</label>
            <input type="text" className="form-control" id="profPic" placeholder="Enter URL" onChange={changeHandler}></input>

            <Link to="/" type="button" className="btn btn-primary" onClick={clickHandler}>Add Contact</Link>
          </div>

        </div>
      </div>
    </div>
  )
};

export default ContactNew