import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/User";

const ContactForm = () => {
  
  const { addUser } = useContext(UserContext);

  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    imageUrl: "",
  });

  const [showMsg, setShowMsg] = useState(false);
  const [message, setMessage] = useState("");

  let history = useHistory();

  const onAddContact = (e) => {
    e.preventDefault();

    if (
      values.name !== "" &&
      values.email !== "" &&
      values.number !== "" &&
      values.imageUrl !== ""
    ) {
      addUser(values);
      setMessage("Contact Added");
      cancelBtn()
    } else {
      setMessage("Fields cannot be empty");
    }

    setShowMsg(true);
    
  };

  const cancelBtn = (e) => {
    return history.push("/");
  };

  const handleName = (e) => setValues({ ...values, name: e.target.value });

  const handleEmail = (e) => setValues({ ...values, email: e.target.value });

  const handleNumber = (e) => setValues({ ...values, number: e.target.value });

  const handleImageUrl = (e) =>
    setValues({ ...values, imageUrl: e.target.value });

  return (
    <div className="container form__wrapper">
      {showMsg && (
        <div className="alert__wrapper alert alert-primary" role="alert">
          {message}
        </div>
      )}
      <form className="mt-5">
        <div>
          <label htmlFor="full-name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="full-name"
            value={values.name}
            onChange={handleName}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={values.email}
            onChange={handleEmail}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone-number" className="form-label">
            Phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone-number"
            value={values.number}
            onChange={handleNumber}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image-url" className="form-label">
            Image url
          </label>
          <input
            type="text"
            className="form-control"
            id="image-url"
            value={values.imageUrl}
            onChange={handleImageUrl}
          />
        </div>
        <input
          onClick={onAddContact}
          type="button"
          className="btn btn-primary"
          value="Add Contact"
        />
        <button onClick={cancelBtn} className="btn btn-primary ml-3">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ContactForm;