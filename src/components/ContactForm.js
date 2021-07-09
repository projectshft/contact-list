import { Link } from "react-router-dom";
import React, { useState } from "react";

const ContactForm = (props) => {
  const [imageURL, setImageURL] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmitContactClick = () => {

    props.addContact({
      imageURL,
      name,
      email,
      phone
    });

    props.history.push("/");
  };

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-md-3">
          <div class="page-header">
            <h1 class="text-center">Add a Contact</h1>
          </div>
          <div>
            <form>
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
              />

              <br />

              <label>Email address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              />

              <br />

              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setPhone(event.target.value)}
              />

              <br />

              <label>Image URL</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setImageURL(event.target.value)}
              />

              <br />

              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmitContactClick}
              >
                Add Contact to List
              </button>

            </form>

            <br />

            <Link to="/">Return to Contact List</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
