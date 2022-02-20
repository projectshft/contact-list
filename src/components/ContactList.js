import ContactRow from "./ContactRow";
import Header from "./Header";
import "./Contacts.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import phoneNumberPropType from "phone-number-prop-type";

//First getting all the individual information out for each contact
const ContactList = (props) => {
  //Using the navigate feature to take user to form when clicking the add new contact button
  let navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/contacts/new");
  };

  //Rendering all the contact info into a table
  return (
    <React.Fragment>
      <Header />
      <main className="container contact-list ">
        <h1 className="text-center mt-5 text-uppercase">Contacts</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col" className="edit-btn-col"></th>
              <th scope="col" className="delete-btn-col"></th>
            </tr>
          </thead>
          <tbody>
            <ContactRow contacts={props.contacts} onDelete={props.onDelete} />
          </tbody>
        </table>
        <div className="text-center">
          <button className="btn btn-lg btn-dark mt-5" onClick={handleAddClick}>
            Add New Contact
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  lName: PropTypes.string,
  email: PropTypes.string,
  phone: phoneNumberPropType,
  image: PropTypes.string,
};

export default ContactList;
