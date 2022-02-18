import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import _ from "lodash";
import "./ContactSingle.css";

const ContactSingle = ({ contactId, contacts }) => {
  const contact = _.find(contacts, { id: contactId });

  let navigate = useNavigate();
  const handleBackBtnClick = () => {
    navigate("/contacts/");
  };

  return (
    <div className="single-container">
      <Header />
      <div className="single-header">
        <h1 className="single-person-h1">Jerry Fabulous</h1>
      </div>
      <div className="single-image">
        <img
          className="contact-single-image"
          src="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"
          alt="friend-list"
        />
      </div>
      <div className="mt-5">
        <p className="text-center single-text">
          <strong>Email:</strong> jerry@gmail.com
        </p>
        <p className="text-center single-text">
          <strong>Phone:</strong> 444-444-4444
        </p>
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
