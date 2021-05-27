import { Link } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import "./index.css";

const ContactNew = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [image_url, setImageUrl] = useState("");

  const handleSubmitNewContactClick = (event) => {
    event.preventDefault();
    props.addContact({
      name,
      email,
      phone_number,
      image_url,
      id: v4(),
    });

    props.history.push("/contacts");
  };

  return (
    <div className="container">
      <div className="row contact-list-link">
        <Link to="/contacts">Back to Contact List</Link>
      </div>
      <div className="row justify-content-md-center form">
        <form className="row col-8" onSubmit={handleSubmitNewContactClick}>
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            required
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter Email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label>Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="form-control"
            placeholder="XXX-XXX-XXXX"
            required
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <br />
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            required
            onChange={(event) => setImageUrl(event.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-dark submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

ContactNew.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone_number: PropTypes.number,
  image_url: PropTypes.string,
  id: PropTypes.string,
};

export default ContactNew;
