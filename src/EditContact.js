import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "./App";

export default function EditContact(props) {
  const { contacts, handleContactEdit } = useContext(ContactContext);
  const id = parseInt(props.match.params.id);
  const contact = contacts.find((c) => c.id === id);
  const { name, image_url, email, phone_number } = contact;

  const [editName, setName] = useState(name);
  const [editEmail, setEmail] = useState(email);
  const [editImage_url, setImageUrl] = useState(image_url);
  const [editPhone_number, setPhoneNumber] = useState(phone_number);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Link to="/">
            <button type="button" className="btn btn-secondary">
              Back
            </button>
          </Link>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={editName}
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
                value={editEmail}
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
                value={editPhone_number}
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
                value={editImage_url}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
              />
            </div>
            <Link to="/contacts">
              <button
                onClick={() =>
                  handleContactEdit(
                    id,
                    editName,
                    editImage_url,
                    editEmail,
                    editPhone_number
                  )
                }
                type="button"
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
