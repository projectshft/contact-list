import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactDetail = function () {
  const location = useLocation();
  const state = location.state.contact;
  const navigate = useNavigate();

return (
  <div>
  <div className="row contact-detail">
    <div className="col-md-6 offset-md-3">
      <img src={state.image} alt="profile pic"></img>
    </div>
    <div className="col-md-6 offset-md-3">{state.name}</div>
    <div className="col-md-6 offset-md-3">{state.email}</div>
    <div className="col-md-6 offset-md-3">{state.phone}</div>
  </div>
  <div className="col-md-6 offset-md-3 back">
    <button className="btn btn-primary" onClick={() => navigate(-1, {state: location.state})}>Go Back</button>
  </div>
  </div>
   
)

}

export default ContactDetail