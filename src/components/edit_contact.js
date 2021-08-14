import { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export default function EditForm({ contacts, editContact, contactId }) {
  const changeContact = _.find(contacts, { id: contactId });
  const [name, setName] = useState(changeContact.name);
  const [number, setNumber] = useState(changeContact.number);
  const [email, setEmail] = useState(changeContact.email);
  const [avatar, setAvatar] = useState(changeContact.avatar);

  const handleClick = function () {
    editContact({
      name,
      number,
      email,
      avatar,
    });
  };

  return (
    <form className="editContactForm row">
      <div className="col-md-6 offset-md-3">
        <h3>Edit contact</h3>
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
          <Link to={`/contacts/${contactId}`}>Change Contact</Link>
        </button>
      </div>
    </form>
  );
}

EditForm.propTypes = {
  editContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contactId: PropTypes.number,
};
