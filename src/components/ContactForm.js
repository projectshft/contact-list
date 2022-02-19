import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./ContactForm.css";
import PropTypes from "prop-types";
import phoneNumberPropType from "phone-number-prop-type";

function ContactForm(props) {
  //Set individual state variables for the elements and attach handlers on their inputs;
  //Everything is required except for image, so I have a default one there
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  //Setting state on change
  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };

  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  //Using the navigate feature to take user back to /contacts after submission;
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/contacts");
  };

  //Everything that gets set upon form submission;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("The email entered is invalid. Flease re-enter a valid email");
    }

    if (!validatePhone(phone)) {
      alert(
        "Please enter a phone number in the format XXX-XXX-XXXX (e.g. 212-330-5950)"
      );
    } else {
      const contactObject = {
        fName,
        lName,
        email,
        phone,
        image,
        id: Math.round(Math.random() * 100000000),
      };

      props.onAddContact(contactObject);

      //Set inputs back to blank after form submission;
      setFName("");
      setLName("");
      setEmail("");
      setPhone("");
      setImage("");

      redirect();
    }
  };

  //A function to validate an email
  function validateEmail(email) {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  //And another to put the phone number in the correct format for this list (XXX-XXX-XXXX)
  function validatePhone(input) {
    let phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (input.match(phoneNum)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container p-10">
        <h1 className="text-center mb-4 text-uppercase">Add New Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-5">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              name="fName"
              placeholder="Arianna"
              value={fName}
              onChange={handleFNameChange}
              required
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Reese"
              name="lName"
              value={lName}
              onChange={handleLNameChange}
              required
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="arianna@gmail.com"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="string"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              placeholder="919-230-4409"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="image"
              aria-describedby="emailHelp"
              name="image"
              value={image}
              onChange={handleImageChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-lg btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

ContactForm.propTypes = {
  fName: PropTypes.string,
  lName: PropTypes.string,
  email: PropTypes.string,
  phone: phoneNumberPropType,
  image: PropTypes.string,
};

export default ContactForm;
