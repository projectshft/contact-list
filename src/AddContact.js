import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContactsStateData } from "./ContactsStateData.js";
import PropTypes from "prop-types";

export default function AddContact(props) {
  // use "useState" from Hooks section of Parsity
  
  // follow app.js all the way down

  // what goes in useState()?
  const [people, setPeople] = useState([ContactsStateData.people])

  const [person, setPerson] = useState({
    name: "",
    image_url: "",
    email: "",
    phone_number: "",
    id: Math.round(Math.random() * 100000000),
  });

  function handleChange(e) {
    const newItem = e.target.value;

    setPerson ({
      ...person, [e.target.name]: newItem
    });
  }

  function handleClick(e) {
    console.log(people, person);
    setPeople(people.concat(person));

    console.log(people);
  }
  // Hello.propTypes = {
  //   // `name` must be a string, and it can't be `null` or `undefined`!
  //   name: PropTypes.string.isRequired,
  // };

  return (
    <div className="AddContact">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="post-form">
            <h3>Add a New Post</h3>

            <div className="form-group">
              Full Name
              <input
                type="text"
                className="form-control full-name"
                name="name"
                value={person.name}
                onChange={handleChange}
              />
              <br />
              Email Address
              <input
                type="text"
                className="form-control email-address"
                name="email"
                value={person.email}
                onChange={handleChange}
              />
              <br />
              Phone Number
              <input
                type="text"
                className="form-control phone-number"
                name="phone_number"
                value={person.phone_number}
                onChange={handleChange}
              />
              <br />
              Image URL
              <input
                type="text"
                className="form-control image-url"
                name="image_url"
                value={person.image_url}
                onChange={handleChange}
              />
              <br />
            </div>

            <Link to="/">
              <button
                onClick={handleClick}
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
