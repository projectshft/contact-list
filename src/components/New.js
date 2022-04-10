import React from 'react';
import { Link } from 'react-router-dom';

const New = () => {
  return (
    <div>
      <h1>Add contact here</h1>
      <button className='btn-primary'><Link className="back-button" to="/contacts">Back</Link></button>
      <div className="mx-auto form">
        <input className="form-control mx-auto" placeholder="First Name"></input>
        <input className="form-control mx-auto" placeholder="Last Name"></input>
        <input className="form-control mx-auto" placeholder="Email"></input>
        <input className="form-control mx-auto" placeholder="Phone Number"></input>
        <input className="form-control mx-auto" placeholder="Image Url"></input>
        <button type="button btn-primary">Add</button>
      </div>
      
    </div>
  )
}


export default New;