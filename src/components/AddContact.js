import React from "react";
import { useHistory } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      fullName: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      URL: e.target[3].value,
    };

    addContact(newContact);
    history.push("/");
  };

  return (
    <form className="w-25 mx-auto mt-5" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Full Name</label>
        <input
          className="form-control"
          placeholder="Enter Full Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          placeholder="Enter Email Address"
          required
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          className="form-control"
          placeholder="Enter Phone Number"
          required
        />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          className="form-control"
          placeholder="Enter Image URL"
          required
        />
      </div>
      <button className="btn btn-primary mt-3">Create New Contact</button>
    </form>
  );
};

export default AddContact;
