import Contact from "./Contact";
import Header from "../Header";
import "./Contacts.css";
import { useNavigate } from "react-router-dom";
import React from "react";

//First getting all the individual information out for each contact
const Contacts = (props) => {
  console.log(props);
  const contactList = props.contacts.map((contact) => {
    return (
      <Contact
        id={contact.id}
        key={contact.id.toString()}
        fName={contact.fName}
        lName={contact.lName}
        image={contact.image}
        email={contact.email}
        phone={contact.phone}
      />
    );
  });

  console.log(contactList);

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
              <th scope="col" className="delete-btn-col"></th>
            </tr>
          </thead>
          <tbody>{contactList}</tbody>
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

// export default Contacts;
