import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Contacts from "./Contacts";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const ContactNew = (props) => {
  const [contactName, setContactName] = useState("");
  const [contactImageUrl, setContactImageUrl] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");

  const resetFields = () => {
    setContactName("");
    setContactImageUrl("");
    setContactEmail("");
    setContactPhoneNumber("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Contact Added!");

    const newContact = {
      id: Math.floor(100000 * Math.random()),
      name: contactName,
      image_url: contactImageUrl,
      email: contactEmail,
      phone_number: contactPhoneNumber,
    };

    props.handleNewContact(newContact);

    resetFields();
  };

  return (
    <div className="col-md-4 offset-md-4 styling">
      <form onSubmit={handleFormSubmit}>
        <div className="form-body">
          <div className="row">
            <div className="form-holder">
              <div className="form-content">
                <div className="form-items">
                  <h3>Register Today</h3>
                  <p>Fill in the data below.</p>
                  <label>Name</label>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      id="nameInput"
                      placeholder="Full Name"
                      onChange={(e) => setContactName(e.target.value)}
                      value={contactName}
                    />
                  </div>
                  <label>Email</label>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      id="emailInput"
                      placeholder="E-mail Address"
                      onChange={(e) => setContactEmail(e.target.value)}
                      value={contactEmail}
                    />
                  </div>
                  <label>Phone</label>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="tel"
                      id="phoneInput"
                      placeholder="Phone number"
                      onChange={(e) => setContactPhoneNumber(e.target.value)}
                      value={contactPhoneNumber}
                    />
                  </div>
                  <label>Image</label>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="url"
                      id="imageUrlInput"
                      placeholder="Paste image URL"
                      onChange={(e) => setContactImageUrl(e.target.value)}
                      value={contactImageUrl}
                    />
                  </div>
                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                    <div className="button-goback">
                      <Button onClick={props.goBack}>Go Back</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

ContactNew.propTypes = {
  name: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.number.isRequired,
};

export default ContactNew;
