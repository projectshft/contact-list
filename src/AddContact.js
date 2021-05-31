import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "./App";
import { useHistory } from "react-router-dom";

export default function AddContact() {
  const { handleContactAdd } = useContext(ContactContext);
  const [name, setName] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const history = useHistory();

  function changeRoute() {
    const path = `/contacts`;
    history.push(path);
  }

  function createNewContact(name, image_url, email, phone_number) {
    const generateId = () => Math.round(Math.random() * 100000000);
    const newContact = {
      id: generateId(),
      name,
      image_url,
      email,
      phone_number,
    };

    handleContactAdd(newContact);
    changeRoute();
  }

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
                value={name}
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
                value={email}
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
                value={phone_number}
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
                value={image_url}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
              />
            </div>

            <button
              onClick={() => {
                if (name && image_url && email && phone_number) {
                  createNewContact(name, image_url, email, phone_number);
                }
              }}
              type="button"
              className="btn btn-primary"
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
