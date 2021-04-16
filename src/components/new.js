import React, { useState } from 'react';

export default function New() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  function handleNewContactClick() {
    console.log('click');
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8 self-align-center">
          <div className="display-4 text-center">New Contact</div>
          <div className="form-group">
            <p>Full Name</p>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              htmlFor="name-input"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>

          <div className="form-group">
            <p>Email Address</p>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              htmlFor="email-input"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <p>Email Address</p>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              htmlFor="phone-input"
              className="form-control"
              placeholder="Enter Phone"
            />
          </div>

          <div className="form-group">
            <p>Email Address</p>
            <input
              onChange={(e) => {
                setAvatarURL(e.target.value);
              }}
              type="text"
              htmlFor="email-ipnut"
              className="form-control"
              placeholder="Image URL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleNewContactClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
