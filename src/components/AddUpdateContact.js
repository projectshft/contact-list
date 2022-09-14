import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddUpdateContact = ({ addUpdateContact, history, selected }) => {
  const [name, setName] = useState(selected?.name || '');
  const [imageUrl, setImageURL] = useState(selected?.imageUrl || '');
  const [phone, setPhone] = useState(selected?.phone || '');
  const [email, setEmail] = useState(selected?.email || '');

  const handleSubmitAddingContact = () => {
    addUpdateContact({
      id: selected?.id || null,
      name,
      imageUrl,
      email,
      phone,
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
            value={name}
            placeholder="Name"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
          />
          <br />

          <label htmlFor="image-url">Image URL</label>
          <input
            type="text"
            id="image-url"
            value={imageUrl}
            placeholder="Image URL"
            className="form-control"
            onChange={(event) => setImageURL(event.target.value)}
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Email"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />

          <label htmlFor="phone-number">Phone</label>
          <input
            type="text"
            id="phone-number"
            value={phone}
            placeholder="Phone number"
            className="form-control"
            onChange={(event) => setPhone(event.target.value)}
          />
          <br />

          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSubmitAddingContact}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

AddUpdateContact.propTypes = {
  addUpdateContact: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  selected: PropTypes.object,
};

export default AddUpdateContact;
