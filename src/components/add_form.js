import { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const id = Math.round(Math.random() * 100000000);

  const handleClick = function () {
    props.addContact({
      name,
      number,
      email,
      avatar,
      id,
    });
    props.history.push('/');
  };

  return (
    <form className="addContactForm row">
      <div className="col-md-6 offset-md-3">
        <h3>Add New contact</h3>
      </div>

      <div className="form-group col-md-6 offset-md-3">
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Contact Name"
          required
        />
        <br />
        <input
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
          type="tel"
          className="form-control"
          placeholder="Contact Number"
          required
        />
        <br />
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
          className="form-control"
          placeholder="Contact Email"
          required="required"
        />
        <br />
        <input
          value={avatar}
          onChange={(event) => {
            setAvatar(event.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Contact Image"
          required
        />
      </div>
      <div className="col-md-1 offset-md-3">
        <br />
        <button type="button" onClick={handleClick} className="btn btn-primary">
          Add Contact
        </button>
      </div>
    </form>
  );
}

AddForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  history: PropTypes.object,
};
