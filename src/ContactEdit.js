import { Link } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

const ContactEdit = (props) => {
  const index = props.contacts.findIndex(
    (contact) => contact.id === props.contactId
  );

  const [name, setName] = useState(props.contacts[index].name);
  const [email, setEmail] = useState(props.contacts[index].email);
  const [phone_number, setPhoneNumber] = useState(
    props.contacts[index].phone_number
  );
  const [image_url, setImageUrl] = useState(props.contacts[index].image_url);

  const handleEditContactClick = (event) => {
    event.preventDefault();
    props.editContact({
      name,
      email,
      phone_number,
      image_url,
      id: props.contacts[index].id,
    });

    props.history.push("/contacts");
  };

  return (
    <div className="container">
      <div className="row contact-list-link">
        <Link to="/contacts">Back to Contact List</Link>
      </div>
      <div className="row justify-content-md-center form">
        <form className="row col-8" onSubmit={handleEditContactClick}>
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.contacts[index].name}
            required
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            defaultValue={props.contacts[index].email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label>Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="form-control"
            defaultValue={props.contacts[index].phone_number}
            required
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <br />
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.contacts[index].image_url}
            required
            onChange={(event) => setImageUrl(event.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-dark update">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

ContactEdit.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone_number: PropTypes.number,
  image_url: PropTypes.string,
  id: PropTypes.string,
};

export default ContactEdit;
