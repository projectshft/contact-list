import React, { useState } from 'react';
import Header from './Header';
import './components.css';

const New = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');

  const handleClick = () => {
    props.addContact({
      name,
      email,
      phone,
      url,
    });
    props.history.push('/contacts');
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <form className="post-form">
            <div className="form-group">
              <h6>Full Name:</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: John Doe"
                onChange={(event) => setName(event.target.value)}
              />
              <h6>Email:</h6>
              <input
                type="email"
                className="form-control"
                placeholder="JohnDoe@gmail.com"
                onChange={(event) => setEmail(event.target.value)}
              />
              <h6>Phone Number:</h6>
              <input
                type="text"
                className="form-control"
                placeholder="1234567890"
                onChange={(event) => setPhone(parseInt(event.target.value, 10))}
              />
              <h6>Image URL:</h6>
              <input
                type="text"
                className="form-control"
                placeholder="URL"
                onChange={(event) => setUrl(event.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default New;
