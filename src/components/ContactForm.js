import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./ContactForm.css";

function ContactForm(props) {
  //Set individual state variables for the elements and attach handlers on their inputs;
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

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
  };

  //   function handleEditInputChange(e) {
  //     // set the new state value to what's currently in the edit input box
  //     setCurrentUser({ ...currentUser, name: e.target.value });
  //   }

  //   // function to handle when the "Edit user name" button is clicked
  //   function handleEditClick(user) {
  //     // set isEditing to true
  //     setIsEditing(true);
  //     // update the state to the updatedUsers
  //     setCurrentUser({ ...user });
  //   }

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
              required
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

// ContactForm.propTypes = {
//     name: PropTypes.string
//   }

export default ContactForm;
