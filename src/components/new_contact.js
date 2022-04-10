import React from "react";
import { useNavigate } from "react-router-dom";

const NewContact = () => {
  const navigate = useNavigate();

  return (
    <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="page-header">
        <h1>New Contact</h1>
      </div>
      <form className="post-form">

        <div className="form-group">
          Full Name
          <input
            className="form-control"
            placeholder="Enter Full Name"
           
             />
          <br/>
          Email Address
          <input
            className="form-control"
            placeholder="Enter Email"
      
            />
          <br/>
          Phone Number
          <input
            className="form-control"
            placeholder="Enter Phone"

            />
          <br/>
          Image URL
          <input
            className="form-control"
            placeholder="Enter Image URL"

            />
        </div>
        <button onClick={() => navigate("/")} type="button" className="btn btn-primary add-post">Add</button>
      </form>
    </div>
  </div>
  )
}


export default NewContact