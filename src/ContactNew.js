import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";

const ContactNew = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [id, setId] = useState("");

  const handleSubmitNewContactClick = () => {
    const generateContactId = Math.round(Math.random() * 100000000);
    setId(generateContactId);

    props.addContact({
      name,
      email,
      phone_number,
      image_url,
      id,
    });

    props.history.push("/contacts");
  };

  return (
    <div className="container">
      <div className="row contact-list-link">
        <Link to="/contacts">Back to Contact List</Link>
      </div>
      <div className="row justify-content-md-center">
        <form className="row col-8">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label>Email Address</label>
          <input
            name="email"
            type="text"
            className="form-control"
            placeHolder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeHolder="Enter Phone"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <br />
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            placeHolder="Image URL"
            onChange={(event) => setImageUrl(event.target.value)}
          />
          <br />
          <button
            type="button"
            className="btn btn-dark submit"
            onClick={handleSubmitNewContactClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactNew;
