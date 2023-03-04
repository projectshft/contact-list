import React from "react";
import { useHistory } from "react-router-dom";


const NewContact = () => {
  const history = useHistory();

  const contactsPage = () => {
    history.push("/contacts")
  }

  return (
    <div className="container-fluid" id="form">
      <form className="row g-3">
        <div className="col-12">
          <label className="col-sm-2 col-form-label" >Name</label>
          <input className="form-control" id="inputName3" placeholder="Enter Name Here"/>
        </div>
        <div className="col-12">
          <label className="col-sm-2 col-form-label" >Email</label>
          <input className="form-control" id="inputName3" placeholder="Enter Email Here"/>
        </div>
        <div className="col-12">
          <label className="col-sm-2 col-form-label" >Phone</label>
          <input className="form-control" id="inputName3" placeholder="Enter Phone Number Here"/>
        </div>
        <div className="col-12">
          <label className="col-sm-2 col-form-label" >Profile Pic</label>
          <input className="form-control" id="inputName3" placeholder="Enter Image URL Here"/>
        </div>
      </form>
      <button type="button" className="btn btn-primary" id="btn-list" onClick={contactsPage}>Add Contact</button>
    </div>
  )
}

export default NewContact;