import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function AddContact(props) {
  console.log('here');
  const [name, setName] = useState("")
  const [image_url, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("")

  const id = Math.round(Math.random() * 100000000);

  const handleSubmitChangeButton = () => {
    props.addPlayer({
      id,
      name,
      image_url,
      email,
      phone_number,
    })

    props.history.push('/display-contact')
  }

  return (
    <div className="AddContact">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="post-form">
            <h3>Add a New Contact</h3>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
              />
              <br />
              <label>Email Address</label>
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
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              <br />
              <label>Image URL</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setImageUrl(event.target.value)}
              />
              <br />
            </div>

            <Link to="/">
              <button
                onClick={handleSubmitChangeButton}
                type="button"
                className="btn btn-primary add-contact-and-return"
              >
                Add Contact
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );

}

