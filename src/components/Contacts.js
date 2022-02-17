import Contact from "./Contact";

import "./Contacts.css";
import { useNavigate } from "react-router-dom";

//First getting all the individual information out for each contact
const Contacts = (props) => {
  const contactList = props.contacts.map((contact) => {
    return (
      <Contact
        key={contact.number}
        fName={contact.fName}
        lName={contact.lName}
        image={contact.image}
        email={contact.email}
        phone={contact.phone}
      />
    );
  });

  //Using the navigate feature to take user to form when clicking the add new contact button
  let navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/contact-form/");
  };

  //Rendering all the contact info into a table
  return (
    <main className="container contact-list ">
      <h1 className="text-center mt-5 text-uppercase">Contacts</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
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
  );
};

export default Contacts;
