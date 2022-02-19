import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import "./ContactForm.css";
import PropTypes from "prop-types";
import phoneNumberPropType from "phone-number-prop-type";

function EditForm(props) {
  let { id } = useParams();
  const contact = props.contacts?.find((c) => c.id === Number(id));

  //Making an object to fill with edited values which will then be used to update state. Pre-populating it with current state values
  const contactObj = {
    fName: contact.fName,
    lName: contact.lName,
    email: contact.email,
    phone: contact.phone,
    image: contact.image,
    id: contact.id,
  };

  //Handling updates per field
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (contact[field] !== value) {
      contactObj[field] = value;
    }
  };

  //Using the navigate feature to take user back to /contacts after submission;
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/contacts");
  };

  //Sending back to app to update state there based on edits
  const handleEditSubmit = (e) => {
    e.preventDefault();
    props.onEdit(contact.id, contactObj);
    redirect();
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container p-10">
        <h1 className="text-center mb-4 text-uppercase">Edit Contact</h1>
        <form onSubmit={handleEditSubmit}>
          <div className="form-group mb-5">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              name="fName"
              placeholder={contact.fName}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder={contact.lName}
              name="lName"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder={contact.email}
              name="email"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="string"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              placeholder={contact.phone}
              name="phone"
              onChange={handleOnChange}
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
              placeholder={contact.image}
              onChange={handleOnChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-lg btn-dark m-2">
              Submit
            </button>
            <Link to={`/contacts/`} className="btn btn-danger btn-lg m-2">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

EditForm.propTypes = {
  fName: PropTypes.string,
  lName: PropTypes.string,
  email: PropTypes.string,
  phone: phoneNumberPropType,
  image: PropTypes.string,
};

export default EditForm;
