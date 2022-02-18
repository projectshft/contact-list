import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";
import "./ContactSingle.css";

const ContactSingle = (props) => {
  console.log(props);
  let { id } = useParams();
  console.log(id);
  const contact = props.contacts.find((el) => el.id === Number(id));
  console.log(contact);
  let navigate = useNavigate();
  const handleBackBtnClick = () => {
    navigate("/contacts/");
  };

  return (
    <div className="single-container">
      <Header />
      <div className="card-container">
        <div className="single-header">
          <h1 className="single-person-h1">
            {contact.fName} {contact.lName}
          </h1>
        </div>
        <div className="single-image">
          <img
            className="contact-single-image"
            src={contact.image}
            alt="friend-list"
          />
        </div>
        <div className="mt-5">
          <p className="text-center single-text">
            <strong>Email:</strong> {contact.email}
          </p>
          <p className="text-center single-text single-text-btm">
            <strong>Phone:</strong> {contact.phone}
          </p>
        </div>
      </div>
      <div className="back-btn-single text-center">
        <Link
          to="/contacts"
          className="btn btn-lg btn-dark"
          onClick={handleBackBtnClick}
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ContactSingle;
