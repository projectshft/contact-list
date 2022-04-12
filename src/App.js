import React from "react"
import ContactList from "./components/contact_list";
import "./App.css";
import { useLocation, useNavigate } from "react-router";


function App() {
const location = useLocation ();
const navigate = useNavigate();



return (
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="page-header">
        <h1>Contact List</h1>
      </div>
      <button className="btn btn-primary" onClick={() => navigate("/contacts/new", {state: location.state || []})}>Add Contact</button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Phone Number</th>
          </tr>
       </thead>
  
       {<ContactList/>}
    
      </table>
    </div>
  </div>
  )
}

export default App;
