import React from "react";
import { useHistory } from "react-router-dom";

export default function ButtonAddContact( {contacts, addContact}) {
  function AddContactButton() {
    let history = useHistory();

    function handleClick() {
      history.push("/add-contact");
    }

    return (
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Add Contact
      </button>
    );
  }

  return (
    <div className="ButtonAddContact">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <AddContactButton />
        </div>
        <br></br>
      </div>
    </div>
  )
}

