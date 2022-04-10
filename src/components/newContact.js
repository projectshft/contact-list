import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NewContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImg] = useState('');

  const addNewContact = () => {
    if (!name || !email || !phone || !img) {
      alert('You need to complete all fields!');
      return;
    }

    props.addContact({
      name,
      email,
      phone,
      img,
    });

    props.history.push(' ');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <div className="header">
            <h1>Add New Contact</h1>
          </div>
          <div>
            <form>
              <label htmlFor="form-control">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="form-control">Email</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="form-control">Phone</label>
              <input
                type="tel"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <label htmlFor="form-control">Image URL</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setImg(e.target.value)}
              />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={addNewContact}
              >
                Add Contact
              </button>
            </form>
            <br />
            <Link to="/contactList">Return to Contact List</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

NewContact.propTypes = {
  props: PropTypes.object,
};

export default NewContact;
