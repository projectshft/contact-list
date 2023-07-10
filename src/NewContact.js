import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewContact = ({ addContact }) => {
  //Set state for profile ID
  const [profileID, setProfileID] = useState("");
  //Set state for name
  const [name, setName] = useState("");
  //Set state for email
  const [email, setEmail] = useState("");
  //Set state for phone number
  const [phoneNumber, setPhoneNumber] = useState("");
  //Set state for image
  const [imageURL, setImageURL] = useState("");

  const navigate = useNavigate();

  const emailRE = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  const phoneNumberRE = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  function handleClick() {
    const contact = {
      profileID: Math.round(Math.random() * 100000000),
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      imageURL: imageURL,
    };

    if (name === "" || email === "" || phoneNumber === "" || imageURL === "") {
      alert("Please fill out all fields");
    } else if (!emailRE.test(email)) {
      alert("Please enter a valid email");
    } else if (!phoneNumberRE.test(phoneNumber)) {
      alert("Please enter a valid phone number");
    } else {
      addContact(contact);
      navigate("/contacts");
    }
  }

  return (
    <div>
      <h1 className="pageHeader">Contact List</h1>

      <form>
        <input
          className="form-control"
          placeholder="Full Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          className="form-control"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          className="form-control"
          placeholder="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <br />
        <input
          className="form-control"
          placeholder="Image URL"
          type="url"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        />
        <br />
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

NewContact.propTypes = {
  addContact: PropTypes.func,
};

export default NewContact;
