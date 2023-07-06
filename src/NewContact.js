import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form>
      <h3>Add a New Contact</h3>

      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <br />
        <input
          placeholder="Image URL"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        />
        <br />
        <button onClick={handleClick} type="button">
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default NewContact;
