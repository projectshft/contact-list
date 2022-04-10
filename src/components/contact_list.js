import React from "react";
import { useNavigate } from "react-router-dom";


const ContactList = () => {

  let navigate = useNavigate();

  return (
    <div>
      <h1>Contact List</h1>
      <button onClick={() => navigate("/form")}>Add Contact</button>
    </div>
  )
}

export default ContactList