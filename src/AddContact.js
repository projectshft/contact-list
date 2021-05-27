import React from "react";
import { Link } from "react-router-dom";

export default function AddContact() {
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
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                placeholder="Image URL"
              />
            </div>
            <button type="button" className="btn btn-primary">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
