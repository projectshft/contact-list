import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";
import _ from "lodash";
import "./ContactSingle.css";

const ContactSingle = (props) => {
  const { fName, lName, email, phone, image } = useParams();

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
            {fName} {lName}
          </h1>
        </div>
        <div className="single-image">
          <img className="contact-single-image" src={image} alt="friend-list" />
        </div>
        <div className="mt-5">
          <p className="text-center single-text">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-center single-text single-text-btm">
            <strong>Phone:</strong> {phone}
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
