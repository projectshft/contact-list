import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ContactContext } from "./App";
import PropTypes from "prop-types";

export default function EditContact(props) {
  const { contacts, handleContactEdit } = useContext(ContactContext);
  const id = parseInt(props.match.params.id);
  const contact = contacts.find((c) => c.id === id);
  const { name, image_url, email, phone_number } = contact;
  const history = useHistory();

  const [editedName, setName] = useState(name);
  const [editedEmail, setEmail] = useState(email);
  const [editedImage_url, setImageUrl] = useState(image_url);
  const [editedPhone_number, setPhoneNumber] = useState(phone_number);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <button
            onClick={() => history.push(`/`)}
            type="button"
            className="btn btn-secondary"
          >
            Back
          </button>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={editedName}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={editedEmail}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={editedPhone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                value={editedImage_url}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
              />
            </div>
            <button
              onClick={() => {
                handleContactEdit(
                  id,
                  editedName,
                  editedImage_url,
                  editedEmail,
                  editedPhone_number
                );
                history.push(`/contacts`);
              }}
              type="button"
              className="btn btn-primary"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

EditContact.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
