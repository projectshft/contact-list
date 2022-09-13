import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewContact = ({ addContact, history }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageURL] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmitAddingContact = () => {
    addContact({
      id: generateId(),
      name,
      imageUrl,
      phone,
      email,
    });
    history.push('/');
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-5">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
          />
          <br />

          <label htmlFor="image-url">Image URL</label>
          <input
            type="text"
            id="image-url"
            placeholder="Image URL"
            className="form-control"
            onChange={(event) => setImageURL(event.target.value)}
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />

          <label htmlFor="phone-number">Phone</label>
          <input
            type="text"
            id="phone-number"
            placeholder="Phone number"
            className="form-control"
            onChange={(event) => setPhone(Number(event.target.value))}
          />
          <br />

          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSubmitAddingContact}
          >
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};

NewContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NewContact;
