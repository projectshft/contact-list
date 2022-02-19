import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './components.css';

const New = () => {
  function handleChange(event) {
    console.log(event.target.value);
  }
  const contacts = {
    id: '',
    name: '',
    image_url: '',
    email: '',
    phone_number: '',
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
                onChange={handleChange}
              />
              <h6>Email:</h6>
              <input
                type="text"
                className="form-control"
                placeholder="JohnDoe@gmail.com"
              />
              <h6>Phone Number:</h6>
              <input
                type="text"
                className="form-control"
                placeholder="(123)-456-7890"
              />
              <h6>Image URL:</h6>
              <input type="text" className="form-control" placeholder="URL" />
              <Link to="/contacts">
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default New;
// function handleChange(event) {
//   console.log(event.target.value);
// }

// return (
//   <input name="firstName" onChange={handleChange} />
// );
