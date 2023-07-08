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

  function handleClick() {
    const contact = {
      profileID: Math.round(Math.random() * 100000000),
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      imageURL: imageURL,
    };

    addContact(contact);
    navigate("/contacts");
  }

  return (
    <>
      <h1 className="pageHeader">Contact List</h1>

      <form>
        <div>
          <input
            class="form-control"
            placeholder="Full Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <input
            class="form-control"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <input
            class="form-control"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <br />
          <input
            class="form-control"
            placeholder="Image URL"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Contact
          </button>
        </div>
      </form>
    </>
  );
};

NewContact.propTypes = {
  addContact: PropTypes.func,
};

export default NewContact;
