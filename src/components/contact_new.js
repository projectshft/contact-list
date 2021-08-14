import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ContactNew = () => (
  <div>
    <div className="container">
      <div className= "row">
        <div className= "col-md-6 offset-md-3">
        <label className="form-label">Full Name</label>
          <input type="text" className="form-control" id="nameInput" placeholder="Enter Name"></input>
          <label className="form-label">Email Address</label>
          <input type="text" className="form-control" id="emailInput" placeholder="Enter Email"></input>
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneInput" placeholder="Enter Phone"></input>
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control" id="imageInput" placeholder="Enter URL"></input>
          <Link to="/" type="button" className="btn btn-primary">Add Contact</Link>
        </div>
      </div>
    </div>
  </div>
);

export default ContactNew