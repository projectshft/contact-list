import React, { useState } from "react";

const ContactNew = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [image_url, setImage] = useState("");

  const handleSubmitContact = () => {
    const generateId = () => Math.round(Math.random() * 100000000);
    let id = generateId();

    props.addContact({
      id,
      name,
      email,
      phone_number,
      image_url,
    });

    props.history.push("/contacts");
  };

  return (
    <div>
      <h1 className="text-center mt-5">Contact List</h1>
      <form className="col-md-6 offset-md-3">
        <div class="form-group mt-5">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Enter Full Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="form-group mt-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control mt-2"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div class="form-group mt-3">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Enter Phone"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div class="form-group mt-3">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Image URL"
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <button type="button" onClick ={handleSubmitContact} className="btn btn-primary mt-3">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactNew;
