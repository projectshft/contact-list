import { Link } from "react-router-dom";
import React, { useState } from "react";

const ContactNew = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [id, setId] = useState();

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

    props.history.push("/");
  };

  return (
    <div>
      <form>
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
        <button type="button" onClick={handleSubmitNewContactClick}>
          Submit
        </button>
      </form>

      <Link to="/">Contact List</Link>
    </div>
  );
};
export default ContactNew;
