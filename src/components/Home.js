import { useState, useContext } from "react";
import { useContacts } from "./Context";
import { Link } from "react-router-dom";
// import icon from "./sample.png"

const HomePage = () => {
  const myContacts = useContacts();
  
  return ( 
    <div className="home">
      {myContacts.map(contact => (
      <div key={contact.id} class="col-lg-4">
        <h2 class="fw-normal">{contact.name}</h2>
        <p><strong>Phone:  </strong>{contact.phone}</p>
        <p><strong>Email:  </strong>{contact.email}</p>
        <Link to={`/${contact.id}`}>
        <button class="btn btn-secondary">View details »</button>
        </Link>
      </div>
        ))}
    </div>
   );
}
 
export default HomePage;